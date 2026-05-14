# 1. Requirements Clarification

This first step defines the problem before any design work begins. It is where you separate what must be built from what is only nice to have.

## What to Clarify

- Core user flows and the exact scope of the system.
- Functional requirements such as create, read, update, delete, search, feed generation, notifications, or sharing.
- Non-functional requirements such as availability, latency, consistency, scalability, durability, and security.
- Expected users, traffic shape, growth assumptions, and product constraints.
- Explicitly out-of-scope items so the design stays bounded.
- Data that must be stored, searched, ranked, or deleted.
- Whether the workload is read-heavy, write-heavy, or balanced.
- Which operations must be real-time and which can be eventual.
- Whether mobile, web, admin, or internal clients are in scope.

## Useful Questions

- Who are the users and what are the main use cases?
- What must work in the first version versus later iterations?
- Are there hard latency or availability targets?
- Is strong consistency required, or is eventual consistency acceptable?
- What data must be retained, archived, or deleted?
- What are the failure scenarios that matter most?
- Which features are deliberately excluded from the first design?

## Good Clarification Targets

- Does the system need search, recommendations, or ranking?
- Do we need user-generated content, uploads, or media processing?
- Should the system support notifications, analytics, or audit trails?
- Is offline processing acceptable for any part of the workflow?
- Are there any legal, privacy, or compliance constraints?

## Output of This Step

- A short problem statement.
- A list of functional requirements.
- A list of non-functional requirements.
- A clear boundary for what the design will and will not cover.
- A set of assumptions you can carry into the rest of the design.

## Common Mistakes

- Designing before the scope is fixed.
- Ignoring non-functional requirements.
- Failing to state assumptions.
- Solving for edge cases that are not actually required.
- Asking too few questions and leaving the problem ambiguous.