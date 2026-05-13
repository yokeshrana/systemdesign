# HLD vs. LLD

## Overview
Architecture design is typically divided into two phases: High-Level Design (HLD) and Low-Level Design (LLD). HLD focuses on the overall system architecture and how different components interact, while LLD dives into the internal logic and implementation details of those components.

## Key Concepts
### High-Level Design (HLD)
HLD provides a "birds-eye view" of the system.
- **Components**: Load balancers, API gateways, microservices, databases, caches, message queues.
- **Interactions**: How data flows between services (REST, gRPC, Pub/Sub).
- **Infrastructure**: Cloud providers, regions, availability zones.
- **Goal**: To ensure the system can meet non-functional requirements like scalability and availability.

### Low-Level Design (LLD)
LLD focuses on the "internals" of a specific component.
- **Class Diagrams**: Relationships between objects, inheritance, and interfaces.
- **Database Schema**: Table structures, indexes, and relationships.
- **Algorithms**: Specific logic for processing data or handling requests.
- **API Definitions**: Detailed endpoint specifications (input parameters, response formats).
- **Goal**: To provide a blueprint for developers to write code.

## Trade-offs & Considerations
- **Detail Level**: Too much detail in HLD can make the architecture rigid. Too little detail in LLD can lead to inconsistent implementation.
- **Collaboration**: HLD is often used for communication with stakeholders and product managers, while LLD is primarily for the engineering team.
- **Evolution**: HLD changes less frequently as it defines the core structure. LLD evolves more often as features are implemented and refined.

## Further Reading
- [High Level Design vs Low Level Design](https://www.geeksforgeeks.org/difference-between-high-level-design-hld-and-low-level-design-lld/)
- [The C4 Model for Software Architecture](https://c4model.com/)
