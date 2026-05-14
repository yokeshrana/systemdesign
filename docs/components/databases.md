# Databases

## Overview
Databases are the heart of most software systems, providing persistent storage for application data. Choosing the right database (SQL vs. NoSQL) and designing an efficient schema are critical for system performance and scalability.

## Key Concepts
### 1. Relational Databases (SQL)
Store data in tables with predefined schemas.

- **Examples**: PostgreSQL, MySQL, Oracle.
- **Strengths**: ACID compliance, powerful querying (JOINs), data integrity.

### 2. Non-Relational Databases (NoSQL)
Flexible schemas for diverse data models.

- **Document**: MongoDB (JSON-like).
- **Key-Value**: Redis, DynamoDB.
- **Column-family**: Cassandra, HBase.
- **Graph**: Neo4j.

### 3. ACID Properties

- **Atomicity**: All or nothing.
- **Consistency**: Data stays valid.
- **Isolation**: Transactions don't interfere.
- **Durability**: Committed data is saved.

## Trade-offs & Considerations

- **SQL vs. NoSQL**: SQL is better for complex queries and relational data. NoSQL is better for high-throughput, unstructured data, and easy horizontal scaling.
- **Read vs. Write Optimization**: Some databases (like Cassandra) are optimized for writes, while others (like PostgreSQL) are balanced or read-optimized with indexes.
- **Replication & Sharding**: Replication provides high availability; sharding provides horizontal scalability. Both increase system complexity.

## Further Reading

- [Database Types (Google Cloud)](https://cloud.google.com/learn/training/data-engineering-and-analytics/database-types)
- [ACID vs. BASE](https://www.scylladb.com/glossary/acid-vs-base/)
- [High Performance MySQL](https://www.oreilly.com/library/view/high-performance-mysql/9781492080503/)
