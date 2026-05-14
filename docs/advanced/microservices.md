# Microservices

## Overview
Microservices architecture is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable.

## Key Concepts
### 1. Independent Deployment
Each service can be updated, deployed, and scaled independently without affecting the entire system.

### 2. Service Communication

- **Synchronous**: REST, gRPC.
- **Asynchronous**: Message queues (Kafka, RabbitMQ), Pub/Sub.

### 3. API Gateway
A single entry point for all clients. It handles requests by routing them to the appropriate backend service, and can also handle cross-cutting concerns like authentication, rate limiting, and logging.

### 4. Service Discovery
A way for services to find each other's network locations (IP/Port) in a dynamic environment (e.g., Kubernetes).

## Trade-offs & Considerations

- **Operational Complexity**: Managing dozens or hundreds of services requires robust CI/CD, monitoring, and orchestration (e.g., Kubernetes).
- **Data Consistency**: Maintaining consistency across multiple databases is challenging (Saga pattern, 2PC).
- **Network Latency**: Inter-service communication adds latency compared to in-process calls in a monolith.

## Further Reading

- [Microservices.io](https://microservices.io/)
- [Introduction to Microservices (Nginx)](https://www.nginx.com/blog/introduction-to-microservices/)
- [Building Microservices by Sam Newman](https://samnewman.io/books/building_microservices/)
