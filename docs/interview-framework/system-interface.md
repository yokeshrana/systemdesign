# 2. System Interface Definition

This step defines the public contract of the system. It explains how clients, services, or users interact with the design.

## What to Define

- Core APIs and endpoints.
- Request and response shapes.
- Authentication and authorization expectations.
- Idempotency requirements for retries.
- Error cases, status codes, and validation rules.
- Synchronous versus asynchronous interfaces.

## What May Come Up

- REST, gRPC, GraphQL, or event-driven interfaces.
- Pagination, filtering, sorting, and search behavior.
- Rate limits and quota enforcement.
- Upload and download flows.
- Webhooks, message queues, and background jobs.

## Output of This Step

- A concise API sketch.
- The main request/response fields.
- Any contract guarantees, such as ordering or idempotency.

## Common Mistakes

- Defining a design without defining how it is used.
- Forgetting error handling and retries.
- Leaving ownership and permissions ambiguous.