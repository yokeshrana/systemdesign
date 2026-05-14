# 7. Bottlenecks and Scaling

This final step makes the design production-ready. It addresses what breaks first and how the system survives growth or failure.

## What to Cover

- Single points of failure.
- Database and cache scaling.
- Load balancing across tiers.
- Replication and failover.
- Service discovery and health checks.
- Monitoring, logging, and alerting.
- Security, cost, and operational limits.

## Scaling Questions

- What is the next bottleneck after the first optimization?
- How will the system behave during a spike?
- How are retries and failures handled safely?
- How does the system recover from partial outages?

## Output of This Step

- A list of the main risks.
- Concrete scaling techniques for each risk.
- A production-readiness story, not just a happy-path design.

## Common Mistakes

- Ending with the first architecture sketch.
- Forgetting observability and recovery.
- Treating scale as only a database problem.