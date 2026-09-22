# Statement of Applicability (SoA)

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 6.1.3(d)
**Annex A version:** ISO/IEC 27001:2022 (93 controls, 4 themes)
**Document owner:** Head of Security & Compliance
**Version:** 1.0

## How to read this document

- **Applicable** — Yes/No, with justification required either way (a bare
  "N/A" is a common Stage 1 audit finding).
- **Status** — Implemented / Partial / Planned / Not Implemented.
- **Reference** — the policy, procedure, or tool implementing the control,
  or the linked risk ID from the [risk register](./04-risk-register.md)
  driving a Planned item.

Controls excluded as Not Applicable are excluded because Northwind's scope,
architecture, or business model genuinely does not create the exposure the
control addresses — not because implementing it would be inconvenient.

---

## Theme 5 — Organizational controls (37)

| # | Control | Applicable | Justification | Status | Reference |
|---|---|---|---|---|---|
| A.5.1 | Policies for information security | Yes | Required to direct the ISMS | Implemented | [`02-information-security-policy.md`](./02-information-security-policy.md) |
| A.5.2 | Information security roles and responsibilities | Yes | Defined ownership required for accountability | Implemented | Policy §4 |
| A.5.3 | Segregation of duties | Yes | Prevents single-person compromise of access approval | Implemented | Access Control Policy |
| A.5.4 | Management responsibilities | Yes | Managers enforce policy within their teams | Implemented | Policy §4, onboarding process |
| A.5.5 | Contact with authorities | Yes | Required for breach notification (ICO) and law enforcement liaison | Implemented | Incident Response Plan |
| A.5.6 | Contact with special interest groups | Yes | Threat intel feeds and sector ISAC membership inform R-01–R-10 | Implemented | Threat intel subscriptions |
| A.5.7 | Threat intelligence | Yes | Feeds the risk assessment process | Partial | Ad-hoc; formal feed onboarding planned (R-03) |
| A.5.8 | Information security in project management | Yes | New features touch production data; security must be a project gate | Partial | Security review added to project template, not yet mandatory gate |
| A.5.9 | Inventory of information and other associated assets | Yes | Cannot assess risk to assets not inventoried | Implemented | Asset register (CMDB) |
| A.5.10 | Acceptable use of information and other associated assets | Yes | Governs employee use of company systems | Implemented | Acceptable Use Policy |
| A.5.11 | Return of assets | Yes | Offboarding requires device/access return | Implemented | Offboarding checklist |
| A.5.12 | Classification of information | Yes | Customer data must be distinguished from public/internal data | Implemented | Data Classification Policy |
| A.5.13 | Labelling of information | Yes | Applied via storage location/tagging rather than manual labels | Partial | Tagging convention documented; enforcement automated for AWS only |
| A.5.14 | Information transfer | Yes | Customer data moves via API/exports; must be secured | Implemented | TLS enforced; secure file transfer procedure |
| A.5.15 | Access control | Yes | Core control for a multi-tenant SaaS | Implemented | Access Control Policy; linked to R-01, R-09 |
| A.5.16 | Identity management | Yes | Single identity source of truth required | Implemented | Google Workspace SSO as IdP |
| A.5.17 | Authentication information | Yes | Password/credential handling standards | Implemented | Linked to R-02 |
| A.5.18 | Access rights | Yes | Provisioning/de-provisioning and periodic access review | Partial | JIT access model in progress (R-09); quarterly access review implemented |
| A.5.19 | Information security in supplier relationships | Yes | Subprocessors handle customer data | Partial | DPAs in place; formal security review process in progress (R-04) |
| A.5.20 | Addressing information security within supplier agreements | Yes | Contracts must include security clauses | Implemented | Standard DPA template with security schedule |
| A.5.21 | Managing information security in the ICT supply chain | Yes | Relies on AWS and third-party libraries | Partial | Covered for cloud (shared responsibility documented); dependency supply chain scanning in progress (R-10) |
| A.5.22 | Monitoring, review and change management of supplier services | Yes | Ongoing assurance beyond initial onboarding | Planned | Linked to R-04 |
| A.5.23 | Information security for use of cloud services | Yes | 100% of production runs on AWS | Partial | Shared responsibility model documented; CSPM automation in progress (R-03) |
| A.5.24 | Information security incident management planning and preparation | Yes | Required for any organisation processing customer data | Implemented | Incident Response Plan |
| A.5.25 | Assessment and decision on information security events | Yes | Triage step of incident response | Implemented | Incident Response Plan §Triage |
| A.5.26 | Response to information security incidents | Yes | Core incident response capability | Implemented | Incident Response Plan |
| A.5.27 | Learning from information security incidents | Yes | Post-incident review feeds corrective actions | Implemented | Linked to [`08-corrective-action-log.md`](./08-corrective-action-log.md) |
| A.5.28 | Collection of evidence | Yes | Needed for incident investigation and potential legal action | Partial | Basic logging in place; formal chain-of-custody procedure planned |
| A.5.29 | Information security during disruption | Yes | BC/DR planning required for a SaaS with uptime SLAs | Partial | DR runbook exists for primary datastore; not yet tested end-to-end |
| A.5.30 | ICT readiness for business continuity | Yes | Same driver as A.5.29 | Partial | Linked to R-01 backup/restore drill |
| A.5.31 | Legal, statutory, regulatory and contractual requirements | Yes | GDPR and customer contracts apply | Implemented | Legal & Regulatory Register (Policy Appendix) |
| A.5.32 | Intellectual property rights | Yes | Protects Northwind's own and licensed IP | Implemented | Employment contracts; software licence register |
| A.5.33 | Protection of records | Yes | Business and audit records must be retained/protected | Implemented | Records retention schedule |
| A.5.34 | Privacy and protection of PII | Yes | Customer end-user PII is processed | Implemented | Privacy Policy; DPIA process for new features touching PII |
| A.5.35 | Independent review of information security | Yes | Required to validate the ISMS is operating as designed | Implemented | Internal audit programme, [`06-internal-audit-checklist.md`](./06-internal-audit-checklist.md) |
| A.5.36 | Compliance with policies, rules and standards for information security | Yes | Verifies policies are actually followed | Implemented | Internal audit programme |
| A.5.37 | Documented operating procedures | Yes | Required for consistent, repeatable operations | Partial | Core procedures documented (deploy, incident response, backup); full runbook coverage in progress |

## Theme 6 — People controls (8)

| # | Control | Applicable | Justification | Status | Reference |
|---|---|---|---|---|---|
| A.6.1 | Screening | Yes | Background checks required for roles with data access | Implemented | Pre-employment screening policy |
| A.6.2 | Terms and conditions of employment | Yes | Contracts define security obligations | Implemented | Standard employment contract clauses |
| A.6.3 | Information security awareness, education and training | Yes | Mandatory annual training; measured objective in policy | Implemented | Linked to Policy §3 objectives, R-02 |
| A.6.4 | Disciplinary process | Yes | Required to enforce policy consistently | Implemented | HR disciplinary procedure |
| A.6.5 | Responsibilities after termination or change of employment | Yes | Post-employment confidentiality obligations continue | Implemented | Employment contract; offboarding checklist |
| A.6.6 | Confidentiality or non-disclosure agreements | Yes | Signed by all staff and relevant contractors | Implemented | NDA template |
| A.6.7 | Remote working | Yes | Northwind is remote-first | Implemented | Remote Working Policy |
| A.6.8 | Information security event reporting | Yes | All staff must have a clear reporting channel | Implemented | Reporting channel documented in Incident Response Plan and onboarding |

## Theme 7 — Physical controls (14)

| # | Control | Applicable | Justification | Status | Reference |
|---|---|---|---|---|---|
| A.7.1 | Physical security perimeters | Yes | Applies to the HQ office | Implemented | Office access control (badge system) |
| A.7.2 | Physical entry | Yes | Badge + visitor sign-in at HQ | Implemented | Office Security Procedure |
| A.7.3 | Securing offices, rooms and facilities | Yes | Server/comms room at HQ requires additional restriction | Implemented | Office Security Procedure |
| A.7.4 | Physical security monitoring | Yes | CCTV covers HQ entry points | Implemented | Office Security Procedure |
| A.7.5 | Protecting against physical and environmental threats | Yes | Fire suppression and flood risk assessed for HQ | Implemented | Facilities risk assessment |
| A.7.6 | Working in secure areas | No | No dedicated "secure area" beyond general office; no classified physical processing occurs | N/A — no such area exists | — |
| A.7.7 | Clear desk and clear screen | Yes | Applies to HQ and remote workers alike | Implemented | Acceptable Use Policy |
| A.7.8 | Equipment siting and protection | Yes | Applies to the limited on-prem network equipment at HQ | Implemented | Office Security Procedure |
| A.7.9 | Security of assets off-premises | Yes | Remote-first workforce; laptops travel | Partial | Linked to R-06 (encryption verification) |
| A.7.10 | Storage media | Yes | Removable media use is restricted, not eliminated | Implemented | Acceptable Use Policy — removable media clause |
| A.7.11 | Supporting utilities | Yes | Applies to HQ office only; all production infrastructure is in AWS data centres under AWS's own ISO 27001 certification | Implemented | Facilities risk assessment; AWS shared responsibility docs |
| A.7.12 | Cabling security | Yes | Applies to HQ comms room only | Implemented | Office Security Procedure |
| A.7.13 | Equipment maintenance | Yes | Applies to HQ hardware (network equipment, issued laptops) | Implemented | IT asset maintenance schedule |
| A.7.14 | Secure disposal or re-use of equipment | Yes | Retired laptops/drives must be wiped or destroyed | Implemented | IT Asset Disposal Procedure |

## Theme 8 — Technological controls (34)

| # | Control | Applicable | Justification | Status | Reference |
|---|---|---|---|---|---|
| A.8.1 | User endpoint devices | Yes | All staff use company-issued endpoints | Partial | Linked to R-06 (central encryption verification) |
| A.8.2 | Privileged access rights | Yes | Admin access to production exists | Partial | Linked to R-09 (moving to JIT access) |
| A.8.3 | Information access restriction | Yes | Multi-tenant data must be logically segregated | Implemented | Application-level tenant isolation, enforced in code review |
| A.8.4 | Access to source code | Yes | Source is the primary IP and attack surface | Implemented | Git repository access controls |
| A.8.5 | Secure authentication | Yes | Core control | Partial | Linked to R-02 (MFA enforcement) |
| A.8.6 | Capacity management | Yes | Availability SLA depends on capacity planning | Implemented | AWS auto-scaling; capacity review in ops runbook |
| A.8.7 | Protection against malware | Yes | Endpoint and email malware protection required | Implemented | MDM-managed endpoint protection; email filtering |
| A.8.8 | Management of technical vulnerabilities | Yes | Core control | Partial | Linked to R-10 (dependency scanning) |
| A.8.9 | Configuration management | Yes | Infrastructure as Code used for AWS | Partial | Linked to R-03 (CSPM automation) |
| A.8.10 | Information deletion | Yes | Required for GDPR data subject deletion requests and offboarding | Implemented | Data retention & deletion procedure |
| A.8.11 | Data masking | Yes | Used in staging environment to avoid exposing real customer data | Implemented | Staging data anonymisation script |
| A.8.12 | Data leakage prevention | Yes | Customer data must not leave approved channels | Partial | Covered by access control and monitoring; dedicated DLP tooling not yet deployed |
| A.8.13 | Information backup | Yes | Required for availability and ransomware recovery | Partial | Linked to R-01 (restore testing) |
| A.8.14 | Redundancy of information processing facilities | Yes | Multi-AZ deployment for production | Implemented | AWS multi-AZ architecture |
| A.8.15 | Logging | Yes | Required for detection, audit, and incident investigation | Implemented | Centralised logging (CloudTrail, application logs) |
| A.8.16 | Monitoring activities | Yes | Detects anomalous access and incidents | Partial | Linked to R-09 (privileged access log review) |
| A.8.17 | Clock synchronisation | Yes | Required for reliable log correlation | Implemented | NTP via AWS default time sync |
| A.8.18 | Use of privileged utility programs | Yes | Restricts tools capable of overriding system/application controls | Implemented | Restricted to named admin roles; logged |
| A.8.19 | Installation of software on operational systems | Yes | Prevents unauthorised software on production/endpoints | Implemented | MDM application allow-listing; production deploy pipeline is the only install path |
| A.8.20 | Networks security | Yes | Core control for cloud infrastructure | Implemented | VPC segmentation, security groups |
| A.8.21 | Security of network services | Yes | Applies to all network services consumed (internal and third-party) | Implemented | Vendor security review for network-facing services |
| A.8.22 | Segregation of networks | Yes | Production, staging, and corporate networks are separated | Implemented | Separate VPCs per environment |
| A.8.23 | Web filtering | Yes | Reduces phishing/malware risk on corporate endpoints | Implemented | DNS-layer filtering via MDM |
| A.8.24 | Use of cryptography | Yes | Encrypts data in transit and at rest | Implemented | TLS 1.2+ enforced; AWS KMS-managed encryption at rest |
| A.8.25 | Secure development life cycle | Yes | Core control for a SaaS product company | Partial | Code review and CI checks in place; formal SSDLC policy document in progress |
| A.8.26 | Application security requirements | Yes | Security requirements defined per feature | Partial | Linked to A.5.8 (security in project management) |
| A.8.27 | Secure system architecture and engineering principles | Yes | Applies to the platform architecture | Implemented | Architecture review process for new services |
| A.8.28 | Secure coding | Yes | Reduces vulnerability introduction | Partial | Linked to R-05 (secret scanning); secure coding guidelines documented, training in progress |
| A.8.29 | Security testing in development and acceptance | Yes | Validates controls before release | Partial | SAST in CI; DAST and periodic penetration testing planned |
| A.8.30 | Outsourced development | No | All product development is performed by direct Northwind employees; no outsourced development at present | N/A — reassess if this changes | — |
| A.8.31 | Separation of development, test and production environments | Yes | Prevents test activity from affecting production | Implemented | Separate AWS accounts per environment |
| A.8.32 | Change management | Yes | Controls risk of unreviewed changes to production | Implemented | Pull-request review + CI gate required for all production deploys |
| A.8.33 | Test information | Yes | Ensures test data does not expose real customer data | Implemented | Linked to A.8.11 (data masking in staging) |
| A.8.34 | Protection of information systems during audit testing | Yes | Applies during internal audits and any future penetration testing | Implemented | Audit/pen-test scoping procedure limits impact to non-production where possible, with change-controlled exceptions |

---

## Summary

| Theme | Total controls | Applicable | Not Applicable | Fully Implemented | Partial | Planned |
|---|---|---|---|---|---|---|
| 5 — Organizational | 37 | 37 | 0 | 27 | 9 | 1 |
| 6 — People | 8 | 8 | 0 | 8 | 0 | 0 |
| 7 — Physical | 14 | 13 | 1 | 12 | 1 | 0 |
| 8 — Technological | 34 | 33 | 1 | 20 | 13 | 0 |
| **Total** | **93** | **91** | **2** | **67** | **23** | **1** |

Two controls (A.7.6, A.8.30) are marked Not Applicable, each with a specific
architectural or operational justification rather than a blanket exclusion.
Every Partial or Planned control traces to an owned, dated item in the
[risk register](./04-risk-register.md), so the SoA and risk register stay
consistent — a common point auditors cross-check.
