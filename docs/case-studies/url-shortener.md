# Case Study: URL Shortener

## 1. Requirements clarifications (Functional & Non-Functional)

### Functional Requirements
*   **URL Shortening:** Generate a shorter, unique alias for any given long URL.
*   **Redirection:** Redirect users to the original long URL when they access the short link.
*   **Custom Aliases:** Allow users to specify a custom alias for their links.
*   **Expiration:** Support default and user-defined expiration times for links.
*   **Analytics:** Track basic metrics such as click counts, visitor location, and referrer.

### Non-Functional Requirements
*   **High Availability:** The system must be available 24/7; redirection failure is not acceptable.
*   **Low Latency:** Redirection should be performed with minimal delay (sub-100ms).
*   **Uniqueness:** Shortened links must be unique and non-guessable.
*   **Scalability:** The system should handle billions of records and millions of concurrent requests.

## 2. System interface definition (APIs)

*   `shortenUrl(api_dev_key, original_url, custom_alias=None, expire_date=None)`: Returns the generated short URL or an error code.
*   `getUrl(short_url)`: Retrieves the original long URL for redirection.
*   `deleteUrl(api_dev_key, url_key)`: Deletes a shortened URL and releases the alias.

## 3. Back-of-the-envelope estimation (Capacity Estimation)

### Traffic Estimates
*   Assume a 100:1 read-to-write ratio.
*   **Writes:** 500 million new URLs per month.
*   **Reads:** 50 billion redirections per month.
*   **Write QPS:** ~200 URLs/sec.
*   **Read QPS:** ~20,000 requests/sec.

### Storage Estimates
*   **Total Period:** 10 years.
*   **Total URLs:** 60 billion.
*   **Record Size:** ~500 bytes per mapping.
*   **Total Storage:** ~30 Terabytes.

### Bandwidth Estimates
*   **Write Bandwidth:** ~100 KB/s.
*   **Read Bandwidth:** ~10 MB/s.

## 4. Defining data model (Database Schema/Model)

Since the system requires billions of records and simple key-value lookups, a **NoSQL** database like **Cassandra** or **DynamoDB** is preferred for horizontal scalability.

### Schema
*   **URL Table:** `short_hash (PK), original_url, user_id, created_at, expire_at`.
*   **User Table:** `user_id (PK), name, email, api_key`.

## 5. High-level design (with Mermaid)

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

## 6. Detailed design (Deep dive into components)

### Encoding and Uniqueness
*   We use **Base62** encoding ([0-9, a-z, A-Z]).
*   A 7-character short link provides $62^7 \approx 3.5$ trillion unique IDs, which safely covers our 10-year requirement of 60 billion URLs.

### Key Generation Service (KGS)
To prevent collisions in a distributed environment:
1.  A dedicated KGS pre-generates unique keys and stores them in a "Key-DB".
2.  Web servers request keys from KGS in blocks to reduce network overhead.
3.  **Apache Zookeeper** coordinates range assignments to different KGS instances, ensuring no overlap.

### Redirection Logic
*   **302 (Temporary Redirect):** The browser always hits our server first. This is essential for accurate, real-time analytics tracking.
*   **301 (Permanent Redirect):** The browser caches the result. While faster for the user, it prevents us from tracking subsequent clicks.

## 7. Identifying and resolving bottlenecks (Scaling/Bottlenecks)

*   **Database Scaling:** Shard the database based on the `short_hash`. Use consistent hashing to distribute the load evenly across shards and minimize reshuffling when adding new nodes.
*   **Caching Strategy:** Use **Redis** with an LRU (Least Recently Used) eviction policy to store the most frequently accessed URL mappings. Even a small cache can handle a significant portion of the traffic (80/20 rule).
*   **Load Balancing:** Deploy load balancers at multiple layers:
    1. Between User and Web Servers.
    2. Between Web Servers and Database.
    3. Between Web Servers and Cache.
*   **Cleanup and Expiration:** A background service should periodically scan the database for expired links and remove them. This offloads the cleanup work from the main request path, maintaining low latency for users.
