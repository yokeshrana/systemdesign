# System Design Case Studies

Real-world system design case studies are the best way to understand how fundamental concepts and components come together to solve complex problems at scale.

Every case study in this section follows the same seven-step interview framework used across the site:

1. Requirements clarification
2. System interface definition
3. Back-of-the-envelope estimation
4. Data model definition
5. High-level design
6. Detailed design
7. Bottlenecks and scaling

## How to Read a Case Study

Use each example as a guided interview answer, not just as a reference design.

1. Re-state the problem in your own words and identify the key constraints.
2. Call out the main APIs or user actions before drawing any architecture.
3. Estimate scale early so the design choices feel justified.
4. Notice which data model choices match the workload.
5. Track the critical request path through the high-level design.
6. Study the deep dive section to see the hardest trade-off.
7. Finish with bottlenecks, reliability, and operational concerns.

## Recurring Patterns Across Cases

- Feed systems usually need a push/pull hybrid strategy.
- Location systems usually need geospatial indexing and region-aware partitioning.
- Media systems usually need encoding, object storage, and CDN delivery.
- Messaging systems usually need ordering, delivery guarantees, and presence handling.
- High-volume lookup systems usually need sharding, caching, and idempotent writes.

---

## Social & Content Platforms

These services handle massive user bases, high-concurrency feed generation, and huge volumes of user-generated content.

*   **[Instagram Design](instagram.md)** – Architecting a photo and video sharing platform for 2B+ users. Focus on feed generation and storage.
*   **[Twitter Design](twitter.md)** – Handling real-time microblogging and the "fan-out" problem for celebrity accounts.
*   **[YouTube Design](youtube.md)** – Building a video hosting service that handles 4K uploads and global streaming.

## Entertainment & Streaming

Scale and availability are critical for these services, often requiring custom content delivery networks and advanced caching.

*   **[Netflix Design](netflix.md)** – A deep dive into cloud-native microservices and adaptive bitrate streaming at global scale.

## Infrastructure & Location Services

These studies focus on specialized data structures (geospatial indexing) and high-availability utility services.

*   **[Uber Design](uber.md)** – Real-time geospatial matching and location tracking for ride-sharing.
*   **[URL Shortener](url-shortener.md)** – Designing a high-throughput, low-latency redirection service with unique key generation.

---

### How to Study Case Studies

When reviewing these designs, focus on:
1.  **Trade-offs**: Why was one database chosen over another?
2.  **Bottlenecks**: Where will the system fail first as it scales?
3.  **Key Decisions**: What are the 2-3 unique technical challenges for this specific problem?
4.  **Back-of-Envelope**: Can you estimate the storage and bandwidth requirements?
5.  **Operational Readiness**: How do monitoring, retries, and failover work?
6.  **Hot Paths**: Which request path must stay under tight latency limits?

Before reading any specific case study, skim the matching pages in [Interview Framework](../interview-framework/index.md) so you can map each example back to the same structure.

For a faster review loop, use the [Case Study Playbook](playbook.md) before jumping into a specific example.
