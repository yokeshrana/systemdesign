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

### SQL vs NoSQL Decision Tree

**Choose SQL (RDBMS) When:**

- Structured data with rigid schema (users, transactions, orders).
- Relational data with complex joins.
- Need ACID transactions (banking, payments).
- Developers familiar with SQL.
- Examples: PostgreSQL, MySQL.

**Choose NoSQL When:**

- Semi-structured or dynamic schema (JSON documents).
- Very large data volumes (TB/PB scale).
- Very high throughput (millions of writes/sec).
- Eventual consistency acceptable.

**NoSQL Types:**

- **Key-Value**: O(1) reads/writes (Redis, DynamoDB).
- **Document Store**: JSON queries (MongoDB, CouchDB).
- **Wide Column Store**: High write throughput (Cassandra, HBase).
- **Graph Database**: Complex relationships (Neo4j).

## Consistency Patterns (CAP Theorem)

You can guarantee 2 of 3: Consistency, Availability, Partition Tolerance. Since networks fail, choose Consistency or Availability:

| Pattern | Speed | Reliability | Use Case |
| :--- | :--- | :--- | :--- |
| **Strong Consistency** | Slower | High | Transactions, banking |
| **Eventual Consistency** | Faster | Medium | Feeds, DNS, S3 |
| **Weak Consistency** | Fastest | Low | Gaming, real-time |

**ACID vs BASE:**

- **ACID** (SQL): Atomicity, Consistency, Isolation, Durability → strong guarantees.
- **BASE** (NoSQL): Basically Available, Soft state, Eventually consistent → higher throughput.

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