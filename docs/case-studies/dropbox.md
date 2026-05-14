# Case Study: Dropbox / Google Drive

## 1. Requirements clarifications (Functional & Non-Functional)

### Functional
*   Users can upload and download files from any device.
*   File synchronization across multiple devices.
*   File versioning and history (recovery).
*   Sharing files and folders with other users.

### Non-Functional
*   **Durability:** Data should not be lost (99.999999999% durability).
*   **Availability:** High availability for file access.
*   **Efficiency:** Minimize bandwidth usage (incremental updates).

## 2. System interface definition (APIs)
*   `uploadFile(file_data, metadata)`
*   `downloadFile(file_id, version)`
*   `listUpdates(cursor)` (used by clients for sync)

## 3. Back-of-the-envelope estimation (Capacity Estimation)
*   **Users:** 500M total, 10M daily active users (DAU).
*   **Storage:** Average 10GB per user $\rightarrow$ 5 Exabytes total storage.
*   **Traffic:** 100M file uploads/updates per day.

## 4. Defining data model (Database Schema/Model)
*   **Metadata DB:** Relational (MySQL/PostgreSQL) for ACID properties.
    *   `User (user_id, name, email)`
    *   `File (file_id, name, path, is_directory, parent_id, latest_version)`
    *   `FileVersion (version_id, file_id, device_id, checksum, size, timestamp)`
*   **Block Storage:** Amazon S3 or similar object store for actual file chunks.

## 5. High-level design (with Mermaid)

```mermaid
graph TD
    A[Mobile/Desktop Client] --> B[Load Balancer]
    B --> C[API Servers]
    C --> D[Metadata DB]
    C --> E[Block Service]
    E --> F[Object Storage - S3]
    G[Notification Service] --> A
    C --> G
    H[Sync Service] --> D
```

## 6. Detailed design (Deep dive into components)

### Block Level Storage
Files are split into fixed-size chunks (e.g., 4MB). Only modified chunks are re-uploaded.
*   **Deduplication:** Checksums (SHA-256) are used to identify identical blocks across the entire system to save space.

### Client-Side Sync
The client keeps a local database (SQLite) to track file states.
*   **Chunking:** Files are chunked locally.
*   **Watchdog:** Monitors local file changes.
*   **Differential Sync:** Only sends the delta (modified blocks).

### Metadata Cache
To speed up lookups, metadata for active users is cached in Redis.

## 7. Identifying and resolving bottlenecks (Scaling/Bottlenecks)
*   **Metadata DB Scaling:** As the number of files grows into trillions, sharding the Metadata DB becomes necessary.
*   **Notification Latency:** Ensuring real-time sync across devices requires a robust Long Polling or WebSocket-based notification service.
*   **Upload Speed:** Use Edge locations (CDNs) to terminate connections closer to the user.

## Likely Follow-Up Questions

<details>
<summary>How do we efficiently handle very large files (e.g., several GBs)?</summary>
Files are broken into fixed-size chunks (e.g., 4MB). Only the chunks that have changed are re-uploaded and synced, significantly reducing bandwidth and storage usage (Differential Sync).
</details>

<details>
<summary>How do we ensure data consistency across multiple devices?</summary>
We use a centralized Metadata Database to keep track of file versions. When a client modifies a file, it updates the metadata server, which then notifies other connected clients via a notification service (long polling/WebSockets).
</details>

<details>
<summary>How do we handle file versioning and recovery?</summary>
Each change to a file creates a new version of the metadata record. Older versions of chunks are kept in storage for a set period (e.g., 30 days), allowing users to roll back to previous states.
</details>

<details>
<summary>How can we optimize the upload of many small files?</summary>
Small files can be bundled into a single upload request or batch-processed to reduce the overhead of multiple HTTP requests and metadata updates.
</details>
