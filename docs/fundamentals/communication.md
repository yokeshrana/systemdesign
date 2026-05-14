# Client-Server Communication

## Overview
Effective communication between clients and servers is the backbone of web applications. Depending on the use case—ranging from simple form submissions to real-time financial dashboards—different protocols and techniques are employed to optimize performance, latency, and resource usage.

## Key Concepts

### 1. AJAX (Short Polling / Request-Response)
AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.

*   **Mechanism:** Client sends a standard HTTP request; server processes and sends a response.
*   **Use Case:** Standard web forms, fetching data on page load.

### 2. Polling (Short Polling)
The client periodically sends requests to the server to check for new data.

*   **Mechanism:** `setInterval(() => fetch('/api/updates'), 5000)`.
*   **Trade-off:** High overhead due to constant HTTP handshakes and empty responses.

### 3. Long Polling (Comet)
A variation of polling where the server holds the request open until new data is available or a timeout occurs.

*   **Mechanism:** Client sends request; server waits for data; server responds; client immediately sends a new request.
*   **Use Case:** Chat applications where WebSockets aren't available.

### 4. WebSockets
A full-duplex, persistent communication channel over a single TCP connection.

*   **Mechanism:** Starts with an HTTP handshake and upgrades to the WebSocket protocol (`ws://` or `wss://`).
*   **Use Case:** Real-time gaming, collaborative editing, stock tickers.

### 5. Server-Sent Events (SSE)
A standard allowing servers to push data to web pages over HTTP. Unlike WebSockets, it is unidirectional (Server -> Client).

*   **Mechanism:** Uses the `EventSource` API over a long-lived HTTP connection.
*   **Use Case:** Social media newsfeeds, real-time dashboards, notification systems.

## Trade-offs

| Technique | Bi-directional | Protocol | Latency | Overhead |
| :--- | :--- | :--- | :--- | :--- |
| **Short Polling** | No | HTTP | High | High |
| **Long Polling** | No | HTTP | Medium | Medium |
| **WebSockets** | Yes | TCP/WS | Low | Low (after handshake) |
| **SSE** | No (S->C only) | HTTP | Low | Low |

### Choosing the Right Strategy

*   Use **WebSockets** if you need low-latency, bi-directional communication (e.g., Multiplayer games).
*   Use **SSE** if you only need the server to push updates (e.g., Live scores).
*   Use **Polling** for simple, non-critical updates where low infrastructure complexity is preferred.

## Reading

*   **HTTP/2 Push vs. SSE:** Understanding how HTTP/2 improves communication.
*   **Connection Limits:** How browsers handle multiple open connections.
*   **Keep-Alive:** The role of persistent connections in modern HTTP.
