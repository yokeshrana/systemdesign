# Consistent Hashing

## Overview
Consistent hashing is a special kind of hashing technique such that when a hash table is resized and consistent hashing is used, only `K/n` keys need to be remapped on average, where `K` is the number of keys, and `n` is the number of slots. In contrast, in most traditional hash tables, a change in the number of array slots causes nearly all keys to be remapped.

## Key Concepts
### 1. The Hash Ring
Imagine the hash space as a circle (ring). Both servers and data keys are mapped to this ring using the same hash function.
- **Placement**: A key is assigned to the first server it encounters while moving clockwise on the ring.

### 2. Virtual Nodes
To ensure a more even distribution of keys (load balancing), each physical server is represented by multiple "virtual nodes" on the ring.
- **Benefit**: If a server is powerful, it can have more virtual nodes. If a server is added or removed, only a small portion of the keys are affected.

## Trade-offs & Considerations
- **Load Balancing**: Virtual nodes are essential to avoid "hotspots" where one server handles significantly more traffic than others.
- **Complexity**: Implementing and managing a consistent hashing ring is more complex than simple modulo hashing (`key % n`).
- **Use Cases**: Used in distributed caches (Memcached), distributed databases (Cassandra, DynamoDB), and load balancers.

## Further Reading
- [Consistent Hashing (Wikipedia)](https://en.wikipedia.org/wiki/Consistent_hashing)
- [A Guide to Consistent Hashing (Toptal)](https://www.toptal.com/big-data/consistent-hashing)
- [Consistent Hashing in Cassandra](https://cassandra.apache.org/doc/latest/architecture/dynamo.html#consistent-hashing)
