# Indexing

## Overview
Indexing is a technique used to speed up the retrieval of data from a database. An index is a data structure (usually a B-Tree or Hash Table) that stores a small portion of the data (the index key) along with a pointer to the full record. Without indexes, the database must perform a full table scan, which is very slow for large datasets.

## Key Concepts
### 1. Index Types
- **Primary Index**: Automatically created for the primary key.
- **Secondary Index**: Created on other columns to speed up searches.
- **Clustered Index**: Determines the physical order of data in the table.
- **Non-Clustered Index**: A separate structure from the data rows.

### 2. Data Structures
- **B-Trees**: Good for range queries and sorting. Used by most SQL databases.
- **Hash Indexes**: Excellent for exact matches. Very fast (O(1)) but doesn't support ranges.
- **LSM Trees (Log-Structured Merge-Tree)**: Optimized for high write throughput. Used by NoSQL databases like Cassandra.

### 3. Composite Indexes
An index on multiple columns. The order of columns in the index matters (leftmost prefix rule).

## Trade-offs & Considerations
- **Read vs. Write Speed**: Indexes speed up reads but slow down writes (INSERT, UPDATE, DELETE) because the index must be updated as well.
- **Storage Space**: Indexes consume additional disk space and memory.
- **Selectivity**: An index is most effective when it is highly selective (i.e., the column has many unique values).

## Further Reading
- [Database Indexing Explained (SQL Shack)](https://www.sqlshack.com/database-index-internals-and-analysis/)
- [Use The Index, Luke](https://use-the-index-luke.com/)
- [B-Tree vs Hash Index](https://dev.mysql.com/doc/refman/8.0/en/index-btree-hash.html)
