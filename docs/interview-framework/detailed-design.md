# 6. Detailed Design

This step handles the hard parts. It is where you explain the inner mechanics that make the design work at scale.

## Common Deep-Dive Areas

- Caching strategy and eviction policy.
- Database partitioning and replication.
- Fan-out, ranking, or aggregation logic.
- Search and indexing behavior.
- Background jobs and eventual consistency.
- Concurrency control, ordering, and deduplication.
- Retry logic, timeouts, and backpressure.
- Geospatial lookup and proximity matching.
- Timeline generation, recommendation, or feed delivery.
- Media processing or large-object handling.
- Membership checks using Bloom filters or similar structures.

## What to Show

- The most important bottleneck in the system.
- The key trade-off that changes the design.
- The mechanism that keeps the system correct under load.
- Any special flow for hot keys, large objects, or burst traffic.
- The exact reason one approach is better than the alternatives.

## Common Deep Dives by Use Case

- URL shortener: key generation, uniqueness, and redirection.
- Social feed: fan-out strategy, ranking, and cache invalidation.
- Location service: geohash, nearby search, and dynamic matching.
- Messaging: delivery semantics, presence, and push notifications.
- Video service: encoding, chunking, and storage orchestration.

## Caching Strategies

When and how to cache data:

| Strategy | Approach | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **Cache-Aside** | App checks cache, miss → DB | Simple, only hot data | Cache miss = 3 roundtrips |
| **Write-Through** | App writes cache, cache → DB | Data always fresh | Slower writes |
| **Write-Behind** | App writes cache, async DB | Fastest writes | Risk of data loss |
| **Refresh-Ahead** | Refresh before expiry | Reduced miss latency | Unnecessary refreshes |

**Cache Invalidation**: "Two hard things in CS: cache invalidation and naming."
- TTL-based: Expiry via timeout.
- Event-based: Invalidate on database changes.
- LRU/LFU: Evict least recently/frequently used.

## Rate Limiting Algorithms

Protect system from overload:

| Algorithm | Mechanism | Use Case |
| :--- | :--- | :--- |
| **Token Bucket** | Refill N tokens/interval, allow bursts | APIs with bursty traffic |
| **Leaky Bucket** | Fixed rate output, queue requests | Smooth traffic shaping |
| **Fixed Window** | Counter resets per interval | Simple, per-minute limits |
| **Sliding Window** | Track requests in time window | Accurate across boundaries |

## Sharding Strategies

How to partition data across nodes:

- **Range-based**: Shard by ID range (users 1-1M in shard 1).
  - Pros: Simple, range queries fast.
  - Cons: Hot shards if skewed, rebalancing hard.

- **Hash-based**: Hash key, mod by shard count.
  - Pros: Uniform distribution.
  - Cons: Rebalancing requires remapping.

- **Consistent Hashing**: Ring-based, key maps to nearest node.
  - Pros: Adding/removing only affects neighbors.
  - Cons: Virtual nodes needed for balance.

- **Directory-based**: Central lookup table (Zookeeper, Etcd).
  - Pros: Arbitrary flexibility.
  - Cons: Single point of failure.

## Database Optimization

### SQL Tuning
- Schema: CHAR for fixed-length, INT for numbers, DECIMAL for currency.
- Indexes: Index WHERE, JOIN, ORDER BY, GROUP BY columns.
- Joins: Denormalize to avoid expensive joins if read-heavy.
- Partitioning: Split large tables by range or hash.
- Replication: Use read replicas for scale reads.

### NoSQL Optimization
- Denormalization: Duplicate across documents if access patterns demand.
- Indexes: Create secondary indexes for fast lookups.
- Batch Operations: Insert/update multiple items to reduce roundtrips.
- TTL: Auto-delete old data (e.g., sessions).
- Compression: Compress large values.

## Replication Patterns

- **Master-Slave**: Master writes, slaves read. Simple but slaves lag.
- **Master-Master**: Both accept writes, coordinate. Conflict resolution needed.
- **Multi-Region**: Replicas across regions. Higher latency but better availability.

## Output of This Step

- One or two focused deep dives.
- Concrete mechanisms instead of vague statements.
- A design that answers the hardest part of the problem.
- The trade-offs the interviewer is most likely to probe.

## Common Mistakes

- Spending time on unimportant components.
- Giving generic answers without implementation detail.
- Ignoring consistency and failure behavior.
- Trying to cover every optimization instead of the most important one.