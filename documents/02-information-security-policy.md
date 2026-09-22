# Information Security Policy

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 5.2
**Document owner:** CEO (Top Management), maintained by Head of Security & Compliance
**Version:** 1.0
**Review cycle:** Annually, or on material change to scope, risk, or applicable law

## 1. Policy statement

Top management is committed to protecting the confidentiality, integrity,
and availability of information assets belonging to Northwind Cloud
Services, its employees, and its customers. This policy establishes the
framework for setting information security objectives and is the
top-level document of the Information Security Management System (ISMS)
defined in [`01-scope-statement.md`](./01-scope-statement.md).

Northwind commits to:

1. Satisfying applicable legal, regulatory, and contractual information
   security obligations (see [Legal & Regulatory Register](#appendix-legal-and-regulatory-register)).
2. Continual improvement of the ISMS.
3. Providing the resources necessary to establish, implement, maintain, and
   improve the ISMS.
4. Setting measurable information security objectives, reviewed at each
   management review.

## 2. Scope

This policy applies to the ISMS scope defined in
[`01-scope-statement.md`](./01-scope-statement.md): all employees,
contractors, and third parties with access to Northwind systems or data.

## 3. Information security objectives (Clause 6.2)

| Objective | Metric | Target | Owner |
|---|---|---|---|
| Reduce time to patch critical vulnerabilities | Days from CVSS ≥ 9 disclosure to patch in production | ≤ 14 days | Engineering Lead |
| Maintain security awareness | % staff completing annual training | 100% | People Ops |
| Limit standing privileged access | # of users with permanent (non-time-boxed) admin access to production | 0 | Head of Security |
| Incident response readiness | Time to acknowledge a P1 security incident | ≤ 30 minutes | On-call Engineering |
| Third-party risk visibility | % of data-processing suppliers with a current security review | 100% | Head of Security |

## 4. Roles and responsibilities (Clause 5.3)

| Role | Responsibility |
|---|---|
| CEO (Top Management) | Ultimate accountability for the ISMS; approves policy and resource allocation |
| Head of Security & Compliance | Day-to-day ISMS ownership; chairs management review; owns the risk register and SoA |
| Engineering Lead | Implements technical controls (Annex A Theme 8); owns secure SDLC |
| People Ops Lead | Screening, onboarding/offboarding, awareness training (Annex A Theme 6) |
| Office Manager | Physical security controls (Annex A Theme 7) |
| All employees | Comply with this policy and report security events per
  [`06-internal-audit-checklist.md`](./06-internal-audit-checklist.md) reporting channel |

Segregation of duties: the person who approves a production access request
is never the same person who provisions it (see A.5.3 in the
[Statement of Applicability](./05-statement-of-applicability.md)).

## 5. Supporting policies

This top-level policy is supported by topic-specific policies referenced
throughout the SoA, including: Acceptable Use, Access Control, Cryptography,
Backup, Incident Response, Secure Development, Supplier Security, and
Business Continuity. Topic-specific policies are maintained as separate
controlled documents and are not duplicated here.

## 6. Non-compliance

Failure to comply with this policy is handled under the disciplinary
process referenced in Annex A control 6.4, proportionate to the severity
and intent of the breach.

## 7. Approval

| Role | Name | Date | Signature |
|---|---|---|---|
| CEO | — | — | — |
| Head of Security & Compliance | — | — | — |

## Appendix: Legal and Regulatory Register

| Requirement | Applies because | Owner |
|---|---|---|
| UK GDPR / Data Protection Act 2018 | Processes personal data of UK data subjects | Head of Security & Compliance |
| EU GDPR | Processes personal data of EU customers' end users | Head of Security & Compliance |
| Customer contractual security clauses | Standard in enterprise SaaS agreements | Legal / Sales Ops |
| PCI DSS (indirect) | Payment card handling is fully outsourced to a PCI DSS Level 1 processor; Northwind never touches card data | Finance |
