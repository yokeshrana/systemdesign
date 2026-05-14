# 2. System Interface Definition

This step defines the public contract of the system. It explains how clients, services, or users interact with the design.

## What to Define

- Core APIs and endpoints.
- Request and response shapes.
- Authentication and authorization expectations.
- Idempotency requirements for retries.
- Error cases, status codes, and validation rules.
- Synchronous versus asynchronous interfaces.
- Resource names, identifiers, and how clients reference them.
- Pagination, filtering, sorting, and search semantics.
- Rate limits, quotas, and abuse prevention.

## What May Come Up

- REST, gRPC, GraphQL, or event-driven interfaces.
- Pagination, filtering, sorting, and search behavior.
- Rate limits and quota enforcement.
- Upload and download flows.
- Webhooks, message queues, and background jobs.
- File upload and download flows.
- Callback or webhook delivery for long-running tasks.

## API Design Notes

- Keep the contract small and easy to explain.
- Prefer resource-oriented naming where possible.
- Make retry behavior explicit for clients.
- Separate user-facing requests from internal worker messages when needed.
- Include error responses for invalid input, not found, conflict, and rate limit cases.

## Output of This Step

- A concise API sketch.
- The main request/response fields.
- Any contract guarantees, such as ordering or idempotency.
- A clear statement of whether the interaction is synchronous or asynchronous.

## Common Mistakes

- Defining a design without defining how it is used.
- Forgetting error handling and retries.
- Leaving ownership and permissions ambiguous.
- Designing the whole system before naming the API surface.