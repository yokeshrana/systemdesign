# Load Balancing

## Overview
Load balancing is the process of distributing network traffic across multiple servers. This ensures no single server bears too much demand, which improves responsiveness and increases availability of applications. A load balancer sits between the client and the server farm and accepts incoming network and application traffic.

## Key Concepts
### 1. Algorithms

- **Round Robin**: Requests are distributed sequentially.
- **Least Connections**: Sends requests to the server with the fewest active connections.
- **IP Hash**: The IP address of the client is used to determine which server receives the request.
- **Weighted Round Robin**: Servers with higher capacity receive more requests.

### 2. Layers

- **L4 (Transport Layer)**: Based on IP and port. Fast but doesn't look at the content of the packet.
- **L7 (Application Layer)**: Based on HTTP headers, cookies, or URL. Allows for "intelligent" routing.

### 3. Health Checks
Load balancers regularly check the health of backend servers. If a server is down, it is removed from the rotation until it recovers.

## Trade-offs & Considerations

- **Single Point of Failure**: If the load balancer goes down, the whole system is unreachable. This is solved by using redundant load balancers (Active-Passive or Active-Active).
- **Session Persistence (Sticky Sessions)**: Some applications require a user to stay on the same server. This can be handled by the load balancer but can lead to uneven distribution.
- **Hardware vs. Software**: Hardware load balancers (F5) are powerful but expensive. Software load balancers (Nginx, HAProxy, AWS ELB) are more flexible and cost-effective.

## Further Reading

- [What is Load Balancing? (NGINX)](https://www.nginx.com/resources/glossary/load-balancing/)
- [Introduction to HAProxy](https://www.haproxy.org/download/1.2/doc/architecture.txt)
- [AWS Elastic Load Balancing Documentation](https://docs.aws.amazon.com/elasticloadbalancing/)
