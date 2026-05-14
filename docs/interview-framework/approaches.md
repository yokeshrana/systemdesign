# Alternative Frameworks

The PDF uses a 7-step Grokking-style approach, but other resources emphasize different interview frameworks. This page compares the main approaches so you can adapt to your interviewer's style.

## Four-Step Framework (System Design Primer)

The donnemartin System Design Primer and many tech companies use a 4-step approach:

1. **Clarify constraints and identify use cases** – Ask questions to set scope.
2. **Create a high-level design** – Sketch the architecture with major components.
3. **Design core components** – Deep dive into each piece (APIs, schemas, algorithms).
4. **Scale the design** – Address bottlenecks, trade-offs, and scalability issues.

### When to Use

This framework works well when the interviewer expects rapid iteration and broad coverage rather than depth on one area first. It's common at Google, Facebook, and other large tech companies.

## Seven-Step Framework (Grokking)

The PDF uses this structure:

1. Requirements Clarification
2. System Interface Definition
3. Back-of-the-Envelope Estimation
4. Data Model Definition
5. High-Level Design
6. Detailed Design
7. Bottlenecks and Scaling

### When to Use

This framework works well when the interviewer values a methodical, step-by-step approach that forces you to justify each decision with data. It's more common in interviews designed to test communication and design depth.

## Comparison

| Step | Grokking (7-step) | System Design Primer (4-step) |
| :--- | :--- | :--- |
| 1 | Requirements clarification | Clarify constraints and use cases |
| 2 | System interface definition | Create high-level design |
| 3 | Back-of-the-envelope estimation | Design core components |
| 4 | Data model definition | Scale the design |
| 5 | High-level design | *(Covered in step 3)* |
| 6 | Detailed design | *(Covered in step 3)* |
| 7 | Bottlenecks and scaling | *(Covered in step 4)* |

## How to Adapt

- If the interviewer says "high-level first," use the 4-step framework; move faster and sketch broadly.
- If the interviewer asks "what are the requirements?," use the 7-step framework; dig into each area methodically.
- If the interviewer interrupts with follow-ups, acknowledge their direction and pivot to whichever framework aligns with their style.

## Hybrid Approach (Recommended for Interviews)

In practice, most interviews blend both:

1. **Start with requirements** – 5-10 minutes.
2. **Sketch high-level design** – 5-10 minutes, then iterate based on feedback.
3. **Design core components** – 10-20 minutes, focusing on the area the interviewer probes.
4. **Scale and optimize** – 5-10 minutes, addressing bottlenecks they raise.

The flexibility to switch frameworks mid-interview is a strength, not a weakness. Interviewers notice and reward adaptability.

## Key Takeaway

Both frameworks reach the same destination—a well-reasoned, scalable design. Choose the one that feels natural to you, but be ready to adapt.

## Related Reading

- [Overview](index.md)
- [Trade-offs and Rules of Thumb](trade-offs.md)
- [Case Study Playbook](../case-studies/playbook.md)
