# Replication & Redundancy

## Overview
Replication and redundancy are foundational concepts in distributed systems designed to ensure high availability, reliability, and fault tolerance. Replication involves storing the same data across multiple nodes, while redundancy refers to the duplication of critical components or functions of a system with the intention of increasing reliability.

## Key Concepts

### 1. Types of Replication
*   **Synchronous Replication:** Data is written to the primary and all replicas before the write is acknowledged to the client. This ensures strong consistency but increases latency.
*   **Asynchronous Replication:** Data is written to the primary and acknowledged immediately. Replicas are updated in the background. This offers low latency but risks data loss if the primary fails before replication completes.
*   **Semi-Synchronous Replication:** A middle ground where the primary waits for at least one replica to acknowledge the write before responding to the client.

### 2. Replication Models
*   **Single-Leader (Master-Slave):** One node (the leader) handles all writes and propagates changes to followers (replicas). Followers can serve read requests to scale read throughput.
*   **Multi-Leader:** Multiple nodes can accept writes. This is useful for multi-region deployments but requires complex conflict resolution.
*   **Leaderless (Quorum-based):** Any node can accept writes and reads. Success is determined by a quorum (e.g., $W + R > N$). Popularized by Dynamo-style databases like Cassandra and Riak.

### 3. Redundancy Levels
*   **Hardware Redundancy:** Using RAID for disks, redundant power supplies, and multiple network interfaces.
*   **Process Redundancy:** Running multiple instances of a service behind a load balancer.
*   **Geographic Redundancy:** Deploying the system across multiple data centers or regions to survive site-wide disasters.

## Trade-offs

| Feature | Synchronous | Asynchronous |
| :--- | :--- | :--- |
| **Consistency** | Strong (High) | Eventual (Low) |
| **Latency** | High | Low |
| **Availability** | Lower (Requires all nodes) | Higher (Primary only) |
| **Data Loss Risk** | Near Zero | Possible on crash |

### Consistency vs. Availability (CAP Theorem)
Replication forces a choice between Consistency and Availability during a network partition. Strong consistency (CP) requires all replicas to be in sync, while high availability (AP) allows nodes to diverge temporarily.

## Reading
*   **Active-Active vs. Active-Passive:** Understanding failover mechanisms.
*   **Conflict Resolution:** Last-Write-Wins (LWW) vs. Vector Clocks.
*   **Replication Lag:** The delay between a write on the leader and its appearance on a follower.
