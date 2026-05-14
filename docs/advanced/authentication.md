# Authentication

## Overview
Authentication is the process of verifying the identity of a user or service. In distributed systems, authentication must be secure, scalable, and often stateless to allow for horizontal scaling.

## Key Concepts
### 1. JWT (JSON Web Tokens)
Stateless authentication mechanism where the user's identity is encoded in a signed token.

- **Strengths**: No need for server-side sessions, works well in microservices.
- **Weaknesses**: Hard to revoke before expiration, token size can increase latency.

### 2. OAuth2 & OpenID Connect
Industry-standard protocols for authorization and authentication.

- **OAuth2**: Focuses on authorization (accessing resources).
- **OIDC**: An identity layer on top of OAuth2.

### 3. SSO (Single Sign-On)
Allows a user to log in once and access multiple related systems.

- **Technologies**: SAML, Okta, Auth0.

## Trade-offs & Considerations

- **Stateful vs. Stateless**: Stateless (JWT) is easier to scale but harder to manage (revocation). Stateful (Sessions) is easier to manage but requires a shared session store (like Redis).
- **Security**: Always use HTTPS. Protect against CSRF, XSS, and Brute Force attacks.
- **MFA (Multi-Factor Authentication)**: Adding an extra layer of security (e.g., TOTP, SMS).

## Further Reading

- [Auth0: The Ultimate Guide to JWT](https://auth0.com/learn/json-web-tokens/)
- [OAuth 2.0 Simplified](https://aaronparecki.com/oauth-2-simplified/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
