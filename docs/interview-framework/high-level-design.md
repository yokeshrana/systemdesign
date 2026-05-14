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
- Which parts are stateful and which are stateless.
- Which components are on the critical path for latency.

## Common Diagram Elements

- Clients, load balancers, and API gateways.
- Application servers or services.
- Cache layers and CDN edges.
- Databases, replicas, and partitions.
- Background workers and queues.
- Search or analytics pipelines when relevant.

## How to Present the Flow

1. Start with the user request.
2. Show how it reaches the system.
3. Explain the main read or write path.
4. Call out any async offloading.
5. End with persistence and delivery to the user.

## Output of This Step

- A block diagram or architecture sketch.
- A request flow explanation.
- The first-pass split between online and offline processing.
- A system-wide view that sets up the deep dive.

## Common Mistakes

- Jumping into deep details too early.
- Leaving out one of the major request paths.
- Failing to explain why the chosen components fit the problem.
- Making the diagram too busy to explain clearly.