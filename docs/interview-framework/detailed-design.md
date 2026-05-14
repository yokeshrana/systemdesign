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

## What to Show

- The most important bottleneck in the system.
- The key trade-off that changes the design.
- The mechanism that keeps the system correct under load.
- Any special flow for hot keys, large objects, or burst traffic.

## Output of This Step

- One or two focused deep dives.
- Concrete mechanisms instead of vague statements.
- A design that answers the hardest part of the problem.

## Common Mistakes

- Spending time on unimportant components.
- Giving generic answers without implementation detail.
- Ignoring consistency and failure behavior.