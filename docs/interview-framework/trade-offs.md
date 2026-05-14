# Trade-offs and Rules of Thumb

The framework repeatedly returns to a few practical trade-offs and estimation shortcuts. This page collects them in one place so you can reuse the same reasoning across different case studies.

## Consistency vs. Availability

Distributed systems often have to choose between stronger consistency and better availability under partition.

- Use stronger consistency when correctness matters more than freshness, such as payments, trip state, or billing.
- Use eventual consistency when user experience can tolerate slight lag, such as feed counts, likes, or recommendations.
- Separate metadata from blob storage so large objects can live in object storage while transactional state stays in a database.
- Prefer read replicas, queues, or cached views when the system can absorb short delays.

## Common Rate Limiting Algorithms

- Token Bucket: allows bursts up to a bucket capacity while enforcing a steady refill rate.
- Leaky Bucket: smooths traffic by processing requests at a fixed outflow rate.
- Fixed Window: simple but can allow bursts at window boundaries.
- Sliding Window Log: precise but more expensive because it tracks individual timestamps.
- Sliding Window Counter: a practical compromise between accuracy and cost.

## Search, Notifications, and Delivery

- Use inverted indexes for text search and typeahead-style lookup.
- Use tries when prefix matching is the dominant operation.
- Use push notifications when immediacy matters and pull when clients can fetch on demand.
- Use WebSockets or long polling when real-time presence or chat-style updates matter.
- Use CDNs for media-heavy systems so repeated reads stay close to users.

## Estimation Rules of Thumb

- QPS = requests per period divided by seconds in the period.
- Storage grows with both object size and retention duration, not just traffic volume.
- Incoming bandwidth = writes per second multiplied by average object size.
- Outgoing bandwidth = reads per second multiplied by average response size.
- Cache sizing should start with hot data, not full-data storage.
- A 100:1 or 80/20 split is often a reasonable starting assumption when the problem is read-heavy.

## Partitioning and Scaling Patterns

- Use consistent hashing to reduce data movement when nodes are added or removed.
- Use key-based or user-based sharding when locality matters.
- Use geographic partitioning when the workload is tied to regions or cities.
- Watch for hot keys and celebrity-like outliers that can defeat naive partitioning.

## How to Apply This in an Interview

1. Name the trade-off instead of hiding it.
2. Pick one rule of thumb and show the estimate.
3. Explain what gets stronger, weaker, cheaper, or slower.
4. Tie the answer back to the user-facing requirement.

## Related Reading

- [Overview](index.md)
- [Requirements Clarification](requirements-clarification.md)
- [Back-of-the-Envelope Estimation](estimation.md)