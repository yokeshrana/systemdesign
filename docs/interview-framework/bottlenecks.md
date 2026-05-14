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
- Graceful degradation and fallbacks.
- Backpressure, retry storms, and queue growth.

## Reliability Checklist

- Can the system survive a node failure?
- Can traffic be rerouted automatically?
- Are reads and writes still acceptable under partial outages?
- Is there a clear recovery path for data or worker failures?
- Do we know how to detect the problem quickly?
- Can we slow down or shed load safely?

## Availability Targets and SLAs

Availability measured in "nines":

| Target | Downtime/Year | Downtime/Month | Use Case |
| :--- | :--- | :--- | :--- |
| 99% (2 nines) | 3.6 days | 7.2 hours | Internal tools |
| 99.9% (3 nines) | 8.8 hours | 43 minutes | Most web services |
| 99.99% (4 nines) | 52 minutes | 4.3 minutes | SaaS, payments |
| 99.999% (5 nines) | 5 minutes | 26 seconds | Critical infrastructure |

## Failover Patterns

### Active-Passive

- Primary handles all traffic, passive is standby.
- Failure → passive takes over (10-30 sec downtime).
- Simple, used with master-slave databases.

### Active-Active

- Both servers handle traffic, balanced by DNS/load balancer.
- Failure → degraded service (no downtime).
- Complex, needs master-master databases or distributed consensus.

## Availability in Series vs Parallel

- **Series**: 99.9% × 99.9% = 99.8% overall (multiply).
- **Parallel**: 1 - (1 - 99.9%)² = 99.9999% (use redundancy).

Lesson: Redundancy in parallel improves availability; avoid single points of failure.

## Scaling Questions

- What is the next bottleneck after the first optimization?
- How will the system behave during a spike?
- How are retries and failures handled safely?
- How does the system recover from partial outages?
- What gets degraded first if capacity runs out?

## Operational Concerns

- Metrics for latency, errors, saturation, and throughput.
- Logs for debugging and audits.
- Traces for distributed request flows.
- Capacity planning and alert thresholds.
- Safe deploys, rollbacks, and feature flags.

## Output of This Step

- A list of the main risks.
- Concrete scaling techniques for each risk.
- A production-readiness story, not just a happy-path design.
- A clear explanation of how the system fails and recovers.

## Common Mistakes

- Ending with the first architecture sketch.
- Forgetting observability and recovery.
- Treating scale as only a database problem.
- Not mentioning failure modes or recovery behavior.