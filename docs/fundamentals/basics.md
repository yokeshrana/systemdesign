# System Design Basics

## Overview
System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It is a critical skill for building scalable, reliable, and maintainable software systems. In an interview context, it involves translating ambiguous requirements into a concrete technical plan.

## Key Concepts
### 1. Functional Requirements
These define what the system should do (e.g., "users should be able to upload photos"). These are the core features of the application.

### 2. Non-Functional Requirements
These define how the system should perform (e.g., "the system should be highly available," "latency should be less than 200ms"). Common non-functional requirements include:

- **Availability**: The percentage of time the system is operational.
- **Scalability**: The ability to handle increasing load.
- **Reliability**: The probability that the system will perform its function without failure.
- **Maintainability**: How easy it is to update or fix the system.

### 3. Capacity Estimation (Back-of-the-Envelope)
Estimating the scale of the system (DAU, RPS, storage, bandwidth) helps in choosing the right technologies and architecture.

## Trade-offs & Considerations

- **Complexity vs. Performance**: Adding more components (like caches or message queues) can improve performance but increases system complexity and maintenance overhead.
- **Cost vs. Reliability**: High availability often requires redundancy (multiple data centers, replicated databases), which increases infrastructure costs.
- **Time to Market vs. Scalability**: Sometimes, a monolithic architecture is faster to build initially, even if it might need refactoring into microservices later to scale.

## Further Reading

- [Grokking Modern System Design Interview](https://www.educative.io/courses/grokking-modern-system-design-interview)
- [System Design Primer (GitHub)](https://github.com/donnemartin/system-design-primer)
- [Designing Data-Intensive Applications by Martin Kleppmann](https://dataintensive.net/)
