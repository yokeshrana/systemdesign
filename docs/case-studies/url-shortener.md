# Case Study: Designing a URL Shortening Service (Bitly)

This guide provides a comprehensive system design for a URL shortening service, focusing on scalability, high availability, and low latency.

## 1. Requirements Clarifications

### Functional Requirements
- **URL Shortening**: Given a long URL, the service should generate a shorter and unique alias.
- **Redirection**: When users access the short link, the service should redirect them to the original long URL.
- **Custom Aliases**: Users should be able to specify a custom alias (e.g., `bit.ly/my-custom-link`).
- **Expiration**: Short links should have a default expiration time; users can optionally specify an expiration date.
- **Analytics**: The service should track metrics like click counts, visitor location, and referrer.

### Non-Functional Requirements
- **High Availability**: The system must be available 24/7; if the service is down, all redirections will fail.
- **Low Latency**: Redirection should happen with minimal delay (sub-100ms).
- **Uniqueness**: Shortened links must be unique and non-guessable.
- **Scalability**: The system should handle billions of records and millions of requests per second.

---

## 2. Capacity Estimation and Constraints

The system is **read-heavy**. Let's assume a 100:1 read-to-write ratio.

### Traffic Estimates
- **New URLs (Write)**: 500 million per month.
- **URL Redirections (Read)**: 500M * 100 = 50 billion per month.
- **Queries Per Second (QPS)**:
    - Write QPS: $500M / (30 \times 24 \times 3600) \approx 200$ URLs/sec.
    - Read QPS: $200 \times 100 = 20,000$ requests/sec.

### Storage Estimates
- **Total years**: 10 years.
- **Total URLs**: $500M \times 12 \text{ months} \times 10 \text{ years} = 60 \text{ billion}$.
- **Size per record**: Assume ~500 bytes per URL mapping (long URL, short ID, user ID, timestamps).
- **Total Storage**: $60B \times 500 \text{ bytes} \approx 30 \text{ Terabytes}$.

### Bandwidth Estimates
- **Write Bandwidth**: $200 \text{ requests/sec} \times 500 \text{ bytes} = 100 \text{ KB/s}$.
- **Read Bandwidth**: $20,000 \text{ requests/sec} \times 500 \text{ bytes} \approx 10 \text{ MB/s}$.

---

## 3. System APIs

We can use REST APIs to expose the functionality of our service.

### Create URL
```http
POST /api/v1/shorten
Content-Type: application/json

{
  "api_dev_key": "string",
  "original_url": "string",
  "custom_alias": "string (optional)",
  "user_name": "string (optional)",
  "expire_date": "timestamp (optional)"
}
```
**Returns**: The generated short URL or an error code (e.g., if custom alias is taken).

### Delete URL
```http
DELETE /api/v1/delete
Content-Type: application/json

{
  "api_dev_key": "string",
  "url_key": "string"
}
```
**Returns**: Confirmation of deletion.

---

## 4. Database Design

Since we need to store billions of records and perform simple key-value lookups, a **NoSQL** database like **Cassandra** or **DynamoDB** is ideal for the URL mappings. Relational databases might be harder to scale horizontally at this volume.

### Schema

#### URL Table (NoSQL)
| Column Name | Type | Description |
| :--- | :--- | :--- |
| **short_hash** (PK) | varchar(16) | The short alias (e.g., '8j2m1L') |
| **original_url** | varchar(2048) | The long URL to redirect to |
| **user_id** | int | ID of the user who created it |
| **created_at** | timestamp | Creation time |
| **expire_at** | timestamp | When the link expires |

#### User Table (SQL/NoSQL)
| Column Name | Type | Description |
| :--- | :--- | :--- |
| **user_id** (PK) | int | Unique ID |
| **name** | varchar(64) | User name |
| **email** | varchar(128) | User email |
| **api_key** | varchar(64) | For rate limiting and auth |

---

## 5. High Level Design

```mermaid
graph TD
    User((Users)) --> LB[Load Balancer]
    LB --> Web[Web Servers]
    
    Web --> Cache[(Redis Cache)]
    Web --> DB[(NoSQL - Cassandra)]
    
    Web --> KGS[Key Generation Service]
    KGS --> Zoo[Zookeeper]
    
    Web --> Analytics[Analytics Worker]
    Analytics --> TSDB[(Time-Series DB)]
```

---

## 6. Detailed Component Design

### Encoding and Uniqueness
We use **Base62** encoding ([0-9, a-z, A-Z]). 
- A 6-character short link gives $62^6 \approx 56.8$ billion unique IDs.
- A 7-character short link gives $62^7 \approx 3.5$ trillion unique IDs.
Given our 60B requirement over 10 years, **7 characters** is safer.

### Key Generation Service (KGS)
To avoid collisions in a distributed environment, we use a KGS:
1. A separate microservice pre-generates unique keys and stores them in a "Key-DB".
2. When a web server needs a key, it requests one from KGS.
3. To handle high load, KGS loads a range of keys into memory. **Apache Zookeeper** is used to coordinate range assignments to different KGS instances, ensuring no two instances hand out the same key.

### Redirection (301 vs 302)
- **301 (Permanent)**: Browser caches the result. Subsequent hits don't reach our server. Best for performance but limits analytics.
- **302 (Temporary)**: Browser always hits our server. Essential for accurate, real-time analytics tracking.

---

## 7. Identifying and Resolving Bottlenecks

### Data Sharding
To scale the database, we can shard based on the `short_hash`. 
- **Hash-based Sharding**: Compute `hash(short_hash) % number_of_shards` to determine which server stores the data. This distributes load evenly.

### Caching
We can use **Redis** or **Memcached** to store the most frequently accessed URLs.
- **Policy**: LRU (Least Recently Used) is effective here.
- **Hit Ratio**: Even a small cache can handle 20% of the most popular links (80/20 rule), significantly reducing DB load.

### Load Balancing
LBs should be placed at three layers:
1. Between User and Web Servers.
2. Between Web Servers and Database.
3. Between Web Servers and Cache.
Round Robin or Least Connection strategies can be used.

### Cleanup and Expiration
A separate background cleanup service scans the database for expired links and removes them to reclaim storage. This is better than doing it on-read to minimize latency.
