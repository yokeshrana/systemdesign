# Caching

## Overview
Caching is the process of storing copies of data in a temporary storage location (cache) so that they can be accessed more quickly. In system design, caching is one of the most effective ways to improve performance and reduce the load on your primary data store (usually a database).

## Key Concepts
### 1. Cache Levels
- **Client-side**: Browser cache.
- **CDN**: Content Delivery Network for static assets.
- **Web Server**: Nginx/Varnish caching.
- **Application**: In-memory cache (Redis, Memcached).
- **Database**: Buffer pool, query cache.

### 2. Caching Strategies
- **Cache-Aside**: Application checks cache; if miss, reads from DB and updates cache.
- **Read-Through**: Cache sits in the data path and updates itself from DB on miss.
- **Write-Through**: Data is written to cache and DB simultaneously.
- **Write-Behind (Write-Back)**: Data is written to cache and asynchronously written to DB.

### 3. Eviction Policies
- **LRU (Least Recently Used)**: Evicts the least recently accessed items.
- **LFU (Least Frequently Used)**: Evicts items used the least often.
- **FIFO (First In First Out)**: Evicts the oldest items.

## Trade-offs & Considerations
- **Data Consistency**: Caches can become stale. Strategies like TTL (Time to Live) or explicit invalidation are needed to keep data fresh.
- **Cache Hit Ratio**: The percentage of requests served from the cache. A low hit ratio means the cache isn't being used effectively.
- **Warm-up**: When a new cache node is added, it starts empty. This can cause a "thundering herd" problem on the database.

## Further Reading
- [Caching Overview (AWS)](https://aws.amazon.com/caching/)
- [Redis Documentation](https://redis.io/documentation)
- [Memcached Documentation](https://memcached.org/)
