# 3. Back-of-the-Envelope Estimation

This step justifies scale with simple math. The goal is not exact precision; it is to show that your design choices are proportional to the expected load.

## Estimate

- Daily active users and total users.
- Read and write QPS.
- Storage growth over time.
- Bandwidth for reads, writes, and media transfer.
- Cache size and memory footprint.
- Number of machines, shards, or partitions needed.

## Questions to Answer

- How many requests per second must the system handle?
- What is the read-to-write ratio?
- How much data is stored per entity?
- How much traffic is hot versus cold?
- What are the rough limits for a single node?

## Output of This Step

- A small set of explicit assumptions.
- A few quick calculations.
- A scale estimate that drives architecture decisions.

## Common Mistakes

- Overcomplicating the math.
- Skipping the assumptions.
- Designing for the wrong bottleneck.