# Scalability

## Overview
Scalability is the ability of a system to handle a growing amount of work by adding resources to the system. In system design, we aim to build systems that can scale gracefully as the number of users or data volume increases without a significant drop in performance.

## Key Concepts
### 1. Vertical Scaling (Scaling Up)
Adding more power (CPU, RAM, SSD) to an existing server.

- **Pros**: Easy to implement, no changes to code.
- **Cons**: Has a hard limit (hardware ceiling), creates a single point of failure, expensive.

### 2. Horizontal Scaling (Scaling Out)
Adding more servers to the system.

- **Pros**: Virtually unlimited scale, provides redundancy/high availability.
- **Cons**: Requires a load balancer, increases architectural complexity (state management, data consistency).

### 3. Scaling the Data Tier

- **Replication**: Copying data to multiple servers (Leader-Follower).
- **Sharding**: Partitioning data across multiple databases based on a key.

## Trade-offs & Considerations

- **Statelessness**: To scale horizontally, application servers should be stateless so that any request can be handled by any server.
- **Database Bottlenecks**: Application servers are easy to scale, but the database is often the hardest part to scale.
- **Cost**: Horizontal scaling can be more cost-effective as it uses "commodity" hardware, but it increases operational overhead.

## Further Reading

- [Scale Cube (Microservices.io)](https://microservices.io/articles/scalecube.html)
- [Horizontal vs. Vertical Scaling](https://www.cloudzero.com/blog/horizontal-vs-vertical-scaling)
- [Scalability Rules by Abbott and Fisher](https://www.amazon.com/Scalability-Rules-Principles-Scaling-Websites/dp/0137030428)
