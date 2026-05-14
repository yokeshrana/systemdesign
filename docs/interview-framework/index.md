# System Design Interview Framework

The System Design Framework used in this project follows a consistent seven-step flow. Use it as the default outline for every system design answer, whether you are designing a URL shortener, a news feed, a ride-sharing backend, or an internal platform.

## Why this structure works

This sequence forces you to move from problem definition to scale, then from architecture to failure handling. It keeps the interview grounded in requirements instead of jumping straight to diagrams.

## What the framework emphasizes

- Clarify scope before designing anything.
- Define the API contract early so the system has a concrete shape.
- Estimate traffic, storage, and bandwidth to avoid unrealistic designs.
- Choose a data model that matches the access pattern.
- Draw the high-level architecture before discussing optimizations.
- Use the detailed design step to explain the hardest trade-offs.
- Finish with bottlenecks, replication, monitoring, and failure handling.

## Recurring Technical Themes

- Sharding and partitioning with consistent hashing or key-based splits.
- Caching with cache-aside, write-through, and eviction policies such as LRU or LFU.
- Feed and ranking systems with fan-out on write, fan-out on read, and hybrid approaches.
- Geospatial design with geohash, quadtrees, or grid-based lookups.
- Queue-based asynchronous processing for background work and decoupling.
- Quorum-based reads and writes where consistency needs careful tuning.
- Bloom filters and other lightweight structures for fast membership checks.
- Rate limiting, notification delivery, search indexing, and CDN-heavy delivery paths.

## Additional Reading

- [Trade-offs and Rules of Thumb](trade-offs.md)

## The Seven Steps

1. [Requirements Clarification](requirements-clarification.md)
2. [System Interface Definition](system-interface.md)
3. [Back-of-the-Envelope Estimation](estimation.md)
4. [Data Model Definition](data-model.md)
5. [High-Level Design](high-level-design.md)
6. [Detailed Design](detailed-design.md)
7. [Bottlenecks and Scaling](bottlenecks.md)

## How to Use It in an Interview

Start with Step 1 and do not jump ahead until the scope is clear. Use Step 2 to define the contract, Step 3 to justify scale, Step 4 to anchor persistence, Step 5 to show the overall system, Step 6 to prove you can reason about the hard parts, and Step 7 to show you can make the design production-ready.

## Interviewer Checklist

- Did you ask the right clarifying questions?
- Did you define the main APIs or user actions?
- Did you estimate the load and storage before choosing components?
- Did you explain why the data store fits the access pattern?
- Did you show a readable architecture with the critical request paths?
- Did you go deep on one or two real bottlenecks instead of everything?
- Did you close with scaling, observability, and failure recovery?

## What Interviewers Look For

- Clear scope control and good clarifying questions.
- Sensible assumptions that are stated out loud.
- Capacity estimates that are directionally correct.
- A design that balances reads, writes, latency, availability, and cost.
- Concrete handling for failure, growth, and operational visibility.

## Practical Output Format

When you practice, aim to produce this sequence in order:

1. Short problem statement.
2. Functional and non-functional requirements.
3. API sketch.
4. Capacity estimates.
5. Core entities and storage choice.
6. Architecture diagram or block flow.
7. Deep dive on the hardest part.
8. Bottlenecks and scaling plan.

## Related Reading

- [Case Studies](../case-studies/index.md)
- [System Design Basics](../fundamentals/basics.md)
- [Scalability](../fundamentals/scalability.md)