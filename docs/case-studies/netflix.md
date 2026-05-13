# Netflix Design

## Problem Statement

Design a video streaming platform that:
- Serves 1B+ users
- 5B+ videos watched daily
- Provides personalized recommendations
- Handles geographic distribution

## Key Challenges

1. **Video Processing**: Encode to multiple formats/bitrates
2. **Streaming Quality**: Adaptive bitrate streaming
3. **Recommendations**: Personalized suggestions using ML
4. **Scalability**: Serve videos globally

## Architecture Overview

Netflix operates on a **Cloud-Native Microservices** architecture primarily hosted on AWS. The system is split into two major planes:

### 1. Control Plane (AWS)
Handles everything before you hit "Play":
- **Zuul (API Gateway)**: Handles routing, monitoring, and security.
- **Hystrix (Circuit Breaker)**: Provides latency and fault tolerance to prevent cascading failures.
- **Microservices**: User management, billing, and the recommendation engine.
- **Database**: 
    - **Cassandra**: Used for scalability and high availability of user history and bookmarks.
    - **MySQL**: Used for billing and user account management.

### 2. Data Plane (Open Connect)
Handles the actual video streaming:
- **Open Connect (CDN)**: Netflix’s custom global network of hardware appliances (OCAs) that store video content close to users at ISPs.
- **Encoding Pipeline**: Converts raw video into thousands of formats and bitrates to support various devices and network conditions.

## Key Decisions

- **Chaos Engineering**: Uses the "Simian Army" (e.g., Chaos Monkey) to intentionally disable services in production to ensure the system can survive failures.
- **Adaptive Bitrate Streaming (ABR)**: Automatically adjusts video quality in real-time based on the user's current bandwidth.
- **Personalization**: Driven by **Machine Learning** models (using Spark/Flink) that analyze user behavior to provide personalized recommendations, accounting for over 80% of content discovery.
- **Resilience**: Every service is designed to fail gracefully. If the recommendation service is down, the system shows a default list of popular titles instead of a broken page.
