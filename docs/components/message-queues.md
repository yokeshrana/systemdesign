# Message Queues

## Overview
Message queues provide an asynchronous communication mechanism between different services in a distributed system. They allow a producer to send a message to a queue without waiting for a consumer to process it, which decouples services and improves system resilience and scalability.

## Key Concepts
### 1. Producer & Consumer

- **Producer**: The service that creates and sends messages.
- **Consumer**: The service that receives and processes messages.
- **Queue/Topic**: The temporary storage where messages live until they are consumed.

### 2. Messaging Models

- **Point-to-Point**: One message is consumed by exactly one consumer.
- **Publish/Subscribe (Pub/Sub)**: One message can be consumed by multiple subscribers (e.g., through different topics).

### 3. Popular Technologies

- **RabbitMQ**: Traditional message broker, supports complex routing.
- **Apache Kafka**: Distributed streaming platform, high throughput, persistent storage.
- **AWS SQS**: Managed message queue service.

## Trade-offs & Considerations

- **Delivery Guarantees**:
    - **At-most-once**: Messages may be lost but never duplicated.
    - **At-least-once**: Messages are never lost but may be duplicated (requires idempotency).
    - **Exactly-once**: The "holy grail" of messaging, hardest to achieve.
- **Order Guarantees**: Some queues guarantee FIFO (First-In-First-Out), while distributed systems like Kafka guarantee order only within a partition.
- **Complexity**: Introducing a message queue adds another component to manage, monitor, and troubleshoot.

## Further Reading

- [What is a Message Queue? (Cloudflare)](https://www.cloudflare.com/learning/cloud/what-is-a-message-queue/)
- [Apache Kafka Introduction](https://kafka.apache.org/intro)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
