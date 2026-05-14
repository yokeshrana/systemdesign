# 4. Data Model Definition

This step anchors the system in persistence. It explains what entities exist, how they relate, and where they should live.

## What to Define

- Core entities such as users, objects, sessions, events, messages, feeds, or counters.
- Relationships between entities.
- Primary keys, partition keys, and secondary indexes.
- SQL versus NoSQL choice.
- Data retention, archival, and deletion policies.
- Which data belongs in object storage, cache, search, analytics, or a transactional database.
- Which fields must be strongly consistent and which can lag.
- Which data is immutable, append-only, or frequently updated.

## Design Questions

- What are the access patterns?
- Which queries must be fast?
- Which data needs strong consistency?
- Which data can be denormalized?
- How will the schema evolve over time?
- Will this model need to support joins, fan-out, or aggregation?
- Are there hot partitions or hot keys to avoid?

## Data Modeling Choices

- Use a relational schema when transactions and joins matter.
- Use a key-value or document store when lookups dominate.
- Use time-series or log-oriented storage when events arrive continuously.
- Use object storage for large blobs such as images or video.
- Use search indexes for text, filtering, and ranking.

## Output of This Step

- A simple schema or entity model.
- The database choice and why it fits the workload.
- The read and write patterns the model must support.
- The partitioning strategy and indexing approach.

## Common Mistakes

- Starting with tables before access patterns.
- Ignoring partitioning and indexing.
- Putting every kind of data into one store.
- Designing a schema that is hard to scale or evolve.