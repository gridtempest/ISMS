# ISMS Scope Statement

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 4.3
**Document owner:** Head of Security & Compliance
**Version:** 1.0
**Status:** Approved by top management

## 1. Purpose

This document defines the boundaries and applicability of Northwind Cloud
Services' Information Security Management System (ISMS), in accordance with
ISO/IEC 27001:2022 Clause 4.3.

## 2. Understanding the organisation and its context (Clause 4.1)

**Internal issues:**
- Rapid headcount growth (15 → 40 employees in 18 months)
- Fully remote-first engineering organisation
- Single production environment on AWS shared across all customers
  (multi-tenant SaaS architecture)

**External issues:**
- Increasing customer due-diligence requirements (security questionnaires,
  SOC 2 / ISO 27001 requests) as a condition of sale to mid-market and
  enterprise accounts
- Evolving data protection regulation (UK GDPR, EU GDPR for EU customers)
- Ransomware and business email compromise as the dominant threats facing
  companies of Northwind's size and sector

## 3. Interested parties and their requirements (Clause 4.2)

| Interested party | Requirement relevant to the ISMS |
|---|---|
| Customers | Contractual security commitments (SLA uptime, breach notification, right to audit) |
| Employees | Clear acceptable use, awareness training, whistleblowing/reporting channel |
| Regulators (ICO, EU DPAs) | GDPR compliance for personal data processed on behalf of customers |
| Cloud provider (AWS) | Shared responsibility model — AWS secures the cloud, Northwind secures configuration and data in it |
| Subprocessors (payment processor, email/SMS provider, support ticketing) | Data processing agreements, security assurance |
| Investors / Board | Assurance that security risk is managed and reported |
| Certification body | Demonstrable conformance to ISO/IEC 27001:2022 for certification |

## 4. ISMS Scope Statement (Clause 4.3)

> The ISMS covers the design, development, hosting, and operation of the
> Northwind analytics SaaS platform, including all AWS infrastructure
> supporting production and staging environments, the corporate Google
> Workspace tenant, and all Northwind employees and contractors who access
> customer data or production systems, in support of Northwind's HQ office
> and its fully remote workforce.

### In scope

- Production and staging AWS accounts (all regions in use: `eu-west-2`,
  `us-east-1`)
- The analytics SaaS application (web app, API, background workers,
  primary data store)
- Corporate IT: Google Workspace (email, drive, calendar), endpoint devices
  issued to staff, the HQ office network
- All employees, contractors, and interns with access to production systems
  or customer data
- Supplier relationships where the supplier processes customer data or has
  access to production systems

### Out of scope (with justification)

| Exclusion | Justification |
|---|---|
| Marketing website (`northwindcloud.com`) | Static site, no customer data, no authentication, hosted separately from production infrastructure |
| Physical security of shared co-working space used for occasional in-person meetings | Not a Northwind-controlled facility; no persistent storage of assets or data there |
| Personal devices used solely for reading corporate email under a BYOD policy | Covered instead by the Acceptable Use Policy and MDM email-only profile, not full ISMS technical controls |

## 5. Boundaries and interfaces

- **Network boundary:** All production workloads sit inside a dedicated VPC
  per environment; the ISMS boundary is the VPC edge plus the identity
  perimeter (SSO) for any service reachable from outside it.
- **Organisational boundary:** Northwind Cloud Services Ltd. only. Excludes
  any future acquired subsidiary until formally brought into scope by a
  scope-change record.
- **Third-party interface:** Subprocessor access to customer data is
  governed by Data Processing Agreements referenced in
  [`../documents/05-statement-of-applicability.md`](./05-statement-of-applicability.md)
  under controls A.5.19–A.5.22.

## 6. Approval and review

This scope statement is reviewed at least annually, and following any
material change (new product line, acquisition, change of cloud provider,
significant re-architecture). Reviewed as an input to the management review
(see [`07-management-review-minutes.md`](./07-management-review-minutes.md)).

| Role | Name | Date |
|---|---|---|
| Approved by (Top Management) | CEO | — |
| Prepared by | Head of Security & Compliance | — |
