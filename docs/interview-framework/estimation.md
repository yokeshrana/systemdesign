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