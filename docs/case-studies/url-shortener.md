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

## Interviewer Lens

URL shortener interviews are usually about key generation, uniqueness, and fast redirection. The best answer shows why the system separates creation from redirect, how it avoids collisions, and why temporary redirects are better when analytics matter.

## Likely Follow-Up Questions

<details>
<summary><strong>How would you support custom aliases without collisions?</strong></summary>

Custom aliases (e.g., "bit.ly/my-campaign") add user personalization but risk collisions:

- **Alias lookup first**: Check if alias already exists before allowing creation.
- **Reservation**: Allow users to reserve aliases; auto-release after 30 days of inactivity.
- **Namespacing**: Prefix aliases with user_id: "u123_my-campaign" to avoid collisions.
- **Case insensitivity**: Convert aliases to lowercase to reduce collision surface.
- **Banned words**: Maintain list of reserved/profane aliases; prevent users from claiming them.
- **Collision handling**: If collision, suggest "my-campaign-2", "my-campaign-3", etc.

Implementation: Add unique constraint on (alias, user_id); return 409 Conflict if duplicate.

</details>

<details>
<summary><strong>Why use 302 instead of 301 for redirects?</strong></summary>

HTTP redirects affect analytics, caching, and user experience differently:

- **302 (Temporary)**: Client doesn't cache; browser fetches fresh from server each time. Allows analytics tracking and redirect changes.
- **301 (Permanent)**: Client caches in browser; subsequent clicks skip server entirely. Analytics lose visibility; redirects can't change.

**Trade-off**:
- **Use 302**: When you need analytics (click tracking), flexibility to change destination later, or short-lived redirects.
- **Use 301**: When redirect target is truly permanent and you don't need tracking.

For most URL shorteners, 302 is better because clicks are a key business metric.

</details>

<details>
<summary><strong>What happens when expired links are still cached?</strong></summary>

Cached redirects can outlive their expiration time, causing confusing user experience:

- **Cache expiration**: Set Cache-Control header to match URL TTL. If URL expires in 30 days, set max-age=2592000 (30 days).
- **Stale-while-revalidate**: Cache can serve stale response while revalidating in background.
- **CDN coordination**: CDN respects Cache-Control; when URL expires, CDN removes entry and returns 404.
- **Conditional requests**: Client can send If-Modified-Since; server responds with 304 Not Modified or 410 Gone.
- **Long URLs**: If URL doesn't expire, cache indefinitely (301 redirect).

Monitoring: Track 404 rates; spike indicates many requests hitting expired links.

</details>

<details>
<summary><strong>How would you shard the database and cache hot mappings?</strong></summary>

Sharding strategy for URL mapping lookups:

- **Shard by short_code**: Hash short code, mod by number of shards. Distributes writes and reads evenly.
- **Range-based**: short codes "a"-"f" → shard 1, "g"-"l" → shard 2. Simpler but can have hot shards.
- **Cache strategy**: Cache most popular URLs in Redis. Most requests hit cache (>99%).
- **Hot key handling**: If one short code becomes extremely popular (e.g., trending link), replicate across multiple cache nodes using consistent hashing.
- **Cache invalidation**: On URL update/delete, invalidate cache entry immediately.

Typical scale: Single database shard handles ~1M requests/day; scale horizontally as needed.

</details>

<details>
<summary><strong>How do you prevent brute-force enumeration of short URLs?</strong></summary>

Brute-force attacks try to guess short URLs (e.g., bit.ly/a, bit.ly/b, etc.) and scan for valid mappings:

- **Rate limiting**: Limit redirects per IP to 100 per minute; 429 Too Many Requests.
- **CAPTCHA**: After N failed redirects from same IP, require CAPTCHA.
- **Randomness**: Use random base62 codes instead of sequential (abc, abd, abe). Harder to guess.
- **Obfuscation**: Don't reveal if short code exists; return 404 for both invalid and expired links.
- **Monitoring**: Alert if single IP generates >1000 404s in 1 hour (suspicious).
- **IP blocking**: Block IPs with excessive redirect attempts.

Trade-off: More aggressive blocking reduces spam but can frustrate legitimate users with bad network.

</details>

## Trade-Offs To Call Out

- A 302 redirect preserves analytics visibility, while a 301 redirect improves client-side caching.
- Key pre-generation reduces collision risk, but it adds operational complexity to the key service.
- A NoSQL key-value store scales well for redirects, but it sacrifices relational flexibility.
- Cached mappings improve redirect latency, but cache invalidation must respect expiration.
- Base62 short codes are compact and human-friendly, but they still need protection against enumeration.
