# Case Study Playbook

This page turns the individual case studies into a repeatable interview practice loop. Use it as the lens for every example in this section.

## What to Extract From Every Case

- The user action that starts the request.
- The system component on the critical path.
- The first bottleneck that appears at scale.
- The data that must stay strongly consistent.
- The data that can be cached, delayed, or reconstructed.

## Common Patterns by Category

### Feeds and Social Graphs

- Twitter, Instagram, and Facebook Newsfeed all need a hybrid fan-out strategy.
- Celebrity or high-fanout users usually force a read-time merge path.
- Timeline ranking, caching, and deduplication matter as much as storage.

### Location and Matching

- Uber and Yelp both need geospatial indexing and locality-aware lookup.
- Region-aware partitioning helps keep queries fast and failure domains small.
- Real-time updates usually need TTLs, caches, and idempotent writes.

### Media and Streaming

- Netflix and YouTube both need encoding pipelines, manifests, and CDN delivery.
- Storage is rarely the hardest part; delivery, adaptation, and resilience are.
- Offline playback and multiple bitrates add extra state and metadata flows.

### Lookup, Short Links, and Search

- URL shorteners, paste tools, and typeahead systems lean on fast key lookups and strong cache behavior.
- Search-like systems often need indexing, ranking, and freshness trade-offs.
- Key generation, deduplication, and expiry are recurring design concerns.

### Messaging and Collaboration

- Messenger-style systems need presence, delivery guarantees, and ordering semantics.
- WebSockets or long polling are usually discussed alongside push notifications.
- Offline delivery and message reconciliation are the typical follow-up topics.

## PDF Rules of Thumb to Reuse

- Estimate QPS as requests per period divided by seconds in the period.
- Use read/write ratios to sanity-check storage and cache pressure.
- Treat the 80/20 rule as a practical cache sizing heuristic.
- Estimate incoming and outgoing bandwidth separately.
- Remember that retention windows can dominate long-term storage.

## Interview Practice Checklist

1. Start with requirements and explicitly name what is out of scope.
2. Give a quick estimate before proposing technologies.
3. Explain one data model choice and one caching choice.
4. Walk through the main request flow end-to-end.
5. Deep dive into the hardest component only.
6. End with failure handling, monitoring, and scaling.

## How to Study Efficiently

- Read one case from each category, not all of them in one sitting.
- Practice re-telling the design in your own words.
- Compare two similar case studies to see which trade-offs repeat.
- Ask how the design changes if traffic becomes 10x higher or much more skewed.
- Use the same seven-step framework every time so your answers stay consistent.

## Related Reading

- [Interview Framework](../interview-framework/index.md)
- [System Design Basics](../fundamentals/basics.md)
- [Scalability](../fundamentals/scalability.md)