# Monitoring & Logging

## Overview
Monitoring and logging (Observability) are critical for understanding the health and performance of your system in production. You cannot fix what you cannot measure. A robust observability stack helps you detect issues before your users do and provides the data needed for root cause analysis.

## Key Concepts
### 1. The Four Golden Signals
- **Latency**: Time it takes to service a request.
- **Traffic**: Demand placed on the system (e.g., HTTP requests per second).
- **Errors**: Rate of requests that fail (e.g., HTTP 500s).
- **Saturation**: How "full" your service is (e.g., CPU/Memory usage).

### 2. Monitoring vs. Logging
- **Monitoring**: Real-time dashboards and alerts based on metrics (e.g., Prometheus, Grafana).
- **Logging**: Detailed records of events that occurred in the system (e.g., ELK Stack - Elasticsearch, Logstash, Kibana).

### 3. Distributed Tracing
A way to track a single request as it moves through multiple microservices.
- **Technologies**: Jaeger, Zipkin, AWS X-Ray.

## Trade-offs & Considerations
- **Cost**: Storing large amounts of logs and metrics can be expensive. Log rotation and sampling are necessary.
- **Alert Fatigue**: Too many alerts can lead to "noise," where developers start ignoring them. Alerts should be actionable.
- **Overhead**: Adding extensive monitoring and tracing can add a small amount of latency to your application.

## Further Reading
- [Google SRE Book: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [The Three Pillars of Observability](https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/ch04.html)
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview/)
