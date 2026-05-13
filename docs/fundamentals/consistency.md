# Consistency Models

## Overview
Consistency in system design refers to the requirement that every read receives the most recent write or an error. In distributed systems, maintaining consistency is challenging due to the CAP theorem, which states that a system can only provide two out of three guarantees: Consistency, Availability, and Partition Tolerance.

## Key Concepts
### 1. Strong Consistency
After an update completes, any subsequent access will return the updated value. This is typically achieved using protocols like Paxos or Raft.
- **Example**: Financial systems, RDBMS with ACID properties.

### 2. Eventual Consistency
The system guarantees that, if no new updates are made to the object, eventually all accesses will return the last updated value.
- **Example**: DNS, social media "likes", Amazon S3.

### 3. Weak Consistency
After an update, subsequent accesses may or may not return the updated value.
- **Example**: VoIP, live video streaming where losing a few frames is acceptable.

### 4. Causal Consistency
If process A has communicated to process B that it has updated a data item, a subsequent access by process B will return the updated value.

## Trade-offs & Considerations
- **Latency vs. Consistency**: Strong consistency often requires synchronous communication between nodes, increasing write latency.
- **Availability vs. Consistency**: In the event of a network partition (the 'P' in CAP), you must choose between staying available but potentially returning stale data (AP) or being consistent but returning errors (CP).
- **Complexity**: Implementing strong consistency in a global scale system requires sophisticated consensus algorithms and careful synchronization.

## Further Reading
- [The CAP Theorem (Wikipedia)](https://en.wikipedia.org/wiki/CAP_theorem)
- [Jepsen: Analyses of Distributed Systems](https://jepsen.io/analyses)
- [Consistency Models in Distributed Systems](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/ConsistencyModelsDistributedSystems.pdf)
