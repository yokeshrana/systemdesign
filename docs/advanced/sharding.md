# Database Sharding

## Overview
Sharding is a method for distributing data across multiple machines. It is a horizontal scaling technique for databases where a large dataset is broken into smaller, more manageable chunks called "shards." Each shard is stored on a separate database server instance, which allows the system to handle more requests and store more data than a single machine could.

## Key Concepts
### 1. Shard Key
The column(s) used to determine which shard a particular row belongs to. Choosing a good shard key is critical for preventing "hotspots."

### 2. Sharding Strategies

- **Range-Based Sharding**: Dividing data based on ranges of a value (e.g., users with IDs 1-1000 in Shard A, 1001-2000 in Shard B).
- **Hash-Based Sharding**: Applying a hash function to the shard key to determine the shard. This provides a more even distribution.
- **Directory-Based Sharding**: Maintaining a lookup table that maps keys to shard locations.

### 3. Vertical vs. Horizontal Sharding

- **Vertical**: Storing different tables on different servers.
- **Horizontal**: Storing different rows of the same table on different servers.

## Trade-offs & Considerations

- **Complexity**: Sharding significantly increases the complexity of the application and the database infrastructure.
- **Joins & Transactions**: Performing JOINs or maintaining ACID transactions across shards is difficult and often requires architectural changes.
- **Resharding**: If a shard grows too large or the load becomes unbalanced, you may need to move data between shards, which is a complex operation.

## Further Reading

- [Database Sharding (DigitalOcean)](https://www.digitalocean.com/community/tutorials/understanding-database-sharding)
- [Sharding in MongoDB](https://www.mongodb.com/docs/manual/sharding/)
- [Horizontal Partitioning (Microsoft)](https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding)
