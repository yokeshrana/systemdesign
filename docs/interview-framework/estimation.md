# 3. Back-of-the-Envelope Estimation

This step justifies scale with simple math. The goal is not exact precision; it is to show that your design choices are proportional to the expected load.

## Estimate

- Daily active users and total users.
- Read and write QPS.
- Storage growth over time.
- Bandwidth for reads, writes, and media transfer.
- Cache size and memory footprint.
- Number of machines, shards, or partitions needed.
- Peak traffic versus average traffic.
- Hot-key pressure and request skew.
- Retention window and archival needs.

## Questions to Answer

- How many requests per second must the system handle?
- What is the read-to-write ratio?
- How much data is stored per entity?
- How much traffic is hot versus cold?
- What are the rough limits for a single node?
- How much data will accumulate over one month, one year, and five years?
- How many bytes are added per object or event?
- How many bytes move across the network per request?

## Useful Rule-of-Thumb Checks

- Estimate write load first for systems that create data continuously.
- Estimate read load first for systems that serve feeds or lookups.
- Validate whether a single cache, database node, or queue partition would become a bottleneck.
- Compare hot-path storage against cold storage requirements.
- Use simple per-user or per-item assumptions instead of complex formulas.

### Quick Capacity Rules

- 1 server at 1000 QPS → ~1,000 servers for 1M QPS.
- 1 GB storage per day → ~365 GB/year, ~1.8 TB/5 years.
- Latency rule: Round-trip within datacenter ~500 µs; across world ~150 ms.
- Bandwidth: 1 Gbps = 125 MB/s; typical server egress ~10 Gbps.
- Cache hit rate 80% reduces DB load by 5x on read-heavy workloads.

## Performance vs Scalability

- **Performance Problem**: Your system is slow for a *single user*.
- **Scalability Problem**: Your system is fast for one user but slow under *heavy load*.

Optimize for performance first, then scalability.

## Latency Numbers Every Programmer Should Know

```
L1 cache reference                    0.5 ns
Main memory reference                 100 ns   (200x slower than L1)
Compress 1K with Zippy               10 µs
Send 1 KB over 1 Gbps                10 µs
Read 4 KB randomly from SSD         150 µs   (1.5GB/sec)
Read 1 MB from memory               250 µs
Round trip within datacenter        500 µs
Read 1 MB from SSD                    1 ms   (1GB/sec, 4x slower than memory)
Disk seek                            10 ms   (20x datacenter roundtrip)
Read 1 MB from HDD                   30 ms   (120x memory, 30x SSD)
Send packet CA→Netherlands→CA       150 ms
```

**Key Insight**: Disk is ~100,000x slower than L1 cache. Caching decisions drive architecture.

## Throughput vs Latency

- **Throughput**: Actions per unit time (req/sec, MB/sec).
- **Latency**: Time for single action (milliseconds).

Goal: Maximize throughput with acceptable latency. Batch systems have high throughput + high latency; streaming has lower throughput + low latency.

## Example Dimensions

- Requests per second.
- Storage in GB, TB, or PB.
- Bandwidth in MB/s or GB/s.
- Memory for cache or in-memory indexes.
- Number of partitions or replicas.

## Output of This Step

- A small set of explicit assumptions.
- A few quick calculations.
- A scale estimate that drives architecture decisions.
- Confidence that the chosen architecture is sized reasonably.

## Common Mistakes

- Overcomplicating the math.
- Skipping the assumptions.
- Designing for the wrong bottleneck.
- Ignoring growth over time.