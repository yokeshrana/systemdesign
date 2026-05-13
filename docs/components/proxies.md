# Proxies & CDN

## Overview
Proxies and Content Delivery Networks (CDNs) are intermediate components that sit between the client and the origin server. They play a crucial role in improving performance, security, and scalability by caching content and distributing traffic.

## Key Concepts
### 1. Forward Proxy
A server that sits in front of a group of client machines. When those machines make requests to sites on the internet, the forward proxy intercepts those requests and then communicates with web servers on behalf of those clients.
- **Use cases**: Anonymity, filtering (at a company/school).

### 2. Reverse Proxy
A server that sits in front of one or more web servers, intercepting requests from clients.
- **Use cases**: Load balancing, SSL termination, caching.
- **Technologies**: Nginx, HAProxy.

### 3. Content Delivery Network (CDN)
A globally distributed network of proxy servers deployed in multiple data centers. The goal is to provide high availability and performance by distributing the content spatially relative to end users.
- **Use cases**: Caching static assets (JS, CSS, images, videos).
- **Technologies**: Cloudflare, Akamai, AWS CloudFront.

## Trade-offs & Considerations
- **Latency**: CDNs significantly reduce latency for global users by serving content from an "edge" location close to them.
- **Cost**: CDNs can be expensive for high-bandwidth applications, but they also reduce the load and cost on the origin server.
- **Invalidation**: When content changes at the origin, it must be invalidated across all CDN edge locations, which can take time and be complex.

## Further Reading
- [What is a Proxy Server? (Cloudflare)](https://www.cloudflare.com/learning/cdn/glossary/proxy-server/)
- [What is a CDN? (Akamai)](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn)
- [Nginx Reverse Proxy Guide](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
