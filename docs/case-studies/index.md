# System Design Case Studies

Real-world system design case studies are the best way to understand how fundamental concepts and components come together to solve complex problems at scale.

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
