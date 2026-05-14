# Networking

## Overview
Networking is the foundation of distributed systems. Understanding how data travels over the wire, the protocols involved, and the common pitfalls (like latency and packet loss) is essential for designing high-performance systems.

## Key Concepts
### 1. Protocols

- **TCP (Transmission Control Protocol)**: Connection-oriented, reliable, guarantees order. Used for HTTP, FTP, SSH.
- **UDP (User Datagram Protocol)**: Connectionless, unreliable, but very fast. Used for video streaming, gaming, DNS.
- **HTTP/HTTPS**: The application layer protocol for the web.
- **HTTP/2 & HTTP/3**: Newer versions that improve performance through multiplexing and QUIC.

### 2. DNS (Domain Name System)
The "phonebook of the internet," translating human-readable names (example.com) into IP addresses.

### 3. OSI Model
A conceptual framework used to understand how different networking protocols interact.

- **L4 (Transport)**: TCP/UDP.
- **L7 (Application)**: HTTP/DNS.

## Trade-offs & Considerations

- **Latency**: The time it takes for a packet to travel from source to destination. This is limited by the speed of light and can be reduced by using CDNs or moving services closer to users.
- **Bandwidth**: The maximum amount of data that can be transmitted over a connection in a given time.
- **Security**: Using TLS/SSL to encrypt data in transit is mandatory for modern applications.

## Further Reading

- [Computer Networking: A Top-Down Approach by Kurose & Ross](https://www.amazon.com/Computer-Networking-Top-Down-Approach-7th/dp/0133594149)
- [How the Internet Works (Cloudflare)](https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/)
- [Introduction to QUIC](https://blog.cloudflare.com/the-road-to-quic/)
