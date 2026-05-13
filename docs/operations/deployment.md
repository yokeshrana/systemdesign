# Deployment Strategies

## Overview
Deployment is the process of making your application available to users. In modern system design, we aim for "Zero Downtime Deployments" and the ability to roll back quickly if something goes wrong.

## Key Concepts
### 1. Blue-Green Deployment
Two identical production environments (Blue and Green). One is live, and the other is idle. When a new version is ready, you deploy it to the idle environment and then switch the load balancer to point to it.
- **Pros**: Zero downtime, easy rollback.

### 2. Canary Deployment
Deploying the new version to a small subset of users (e.g., 5%) first. If no errors are detected, you gradually roll it out to the rest of the users.
- **Pros**: Reduces risk by testing on real users in production.

### 3. Rolling Deployment
Updating instances of the application one by one.
- **Pros**: No need for double the infrastructure (unlike Blue-Green).
- **Cons**: Both new and old versions are running simultaneously, which can cause issues with data consistency or API compatibility.

## Trade-offs & Considerations
- **CI/CD Pipelines**: Automating the build, test, and deployment process is essential for reliable releases.
- **Database Migrations**: Handling changes to the database schema without causing downtime is one of the hardest parts of deployment.
- **Infrastructure as Code (IaC)**: Using tools like Terraform or CloudFormation to manage your infrastructure ensures consistency and reproducibility.

## Further Reading
- [Deployment Strategies (Google Cloud)](https://cloud.google.com/architecture/application-deployment-and-testing-strategies)
- [Introduction to CI/CD (Red Hat)](https://www.redhat.com/en/topics/devops/what-is-ci-cd)
- [Martin Fowler on Blue-Green Deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html)
