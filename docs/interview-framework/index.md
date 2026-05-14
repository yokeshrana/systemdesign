# System Design Interview Framework

The PDF framework used in this project follows a consistent seven-step flow. Use it as the default outline for every system design answer, whether you are designing a URL shortener, a news feed, a ride-sharing backend, or an internal platform.

## Why this structure works

This sequence forces you to move from problem definition to scale, then from architecture to failure handling. It keeps the interview grounded in requirements instead of jumping straight to diagrams.

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

## What Interviewers Look For

- Clear scope control and good clarifying questions.
- Sensible assumptions that are stated out loud.
- Capacity estimates that are directionally correct.
- A design that balances reads, writes, latency, availability, and cost.
- Concrete handling for failure, growth, and operational visibility.

## Related Reading

- [Case Studies](../case-studies/index.md)
- [System Design Basics](../fundamentals/basics.md)
- [Scalability](../fundamentals/scalability.md)