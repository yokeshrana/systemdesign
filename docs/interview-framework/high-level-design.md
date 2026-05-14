# 5. High-Level Design

This step draws the overall architecture. It shows the major components and how requests move through the system.

## Typical Building Blocks

- Clients and edge delivery.
- Load balancers and API gateways.
- Application servers or service tiers.
- Cache layers.
- Databases and replicas.
- Message queues and workers.
- Object storage, search, and analytics systems.

## What to Explain

- The read path.
- The write path.
- Where caching happens.
- Where asynchronous processing happens.
- How the system scales horizontally.

## Output of This Step

- A block diagram or architecture sketch.
- A request flow explanation.
- The first-pass split between online and offline processing.

## Common Mistakes

- Jumping into deep details too early.
- Leaving out one of the major request paths.
- Failing to explain why the chosen components fit the problem.