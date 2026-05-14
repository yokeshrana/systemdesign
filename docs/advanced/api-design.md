# API Design

## Overview
API (Application Programming Interface) design is the process of defining the endpoints, request/response formats, and communication protocols for your services. Well-designed APIs are intuitive, consistent, and versioned to ensure long-term maintainability.

## Key Concepts
### 1. REST (Representational State Transfer)

- **Verbs**: GET, POST, PUT, DELETE, PATCH.
- **Principles**: Stateless, cacheable, uniform interface.
- **Strengths**: Ubiquitous, easy to understand, works over HTTP.

### 2. gRPC

- **Mechanism**: Remote Procedure Call using Protocol Buffers (protobuf).
- **Strengths**: High performance (binary format), strongly typed, supports streaming.
- **Weaknesses**: Harder for browser clients to use directly, less human-readable.

### 3. GraphQL

- **Mechanism**: Single endpoint where the client specifies exactly what data it needs.
- **Strengths**: Eliminates over-fetching and under-fetching, great for complex data graphs.

## Trade-offs & Considerations

- **Versioning**: How do you handle changes without breaking clients? (e.g., `/v1/`, header-based).
- **Rate Limiting**: Protecting your API from abuse and ensuring fair usage.
- **Documentation**: Essential for developer adoption (e.g., Swagger/OpenAPI).
- **Security**: Authentication (OAuth2, JWT) and Authorization (RBAC).

## Further Reading

- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)
- [Google API Design Guide](https://cloud.google.com/apis/design)
- [GraphQL Official Website](https://graphql.org/)
