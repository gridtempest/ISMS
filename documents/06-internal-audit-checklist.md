# Internal Audit Programme & Checklist

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 9.2
**Standard applied:** Audit principles drawn from ISO 19011
**Document owner:** Head of Security & Compliance

## 1. Purpose

Provides objective evidence on whether the ISMS conforms to Northwind's own
requirements and to ISO/IEC 27001, and whether it is effectively
implemented and maintained — independent of the teams being audited.

## 2. Audit programme

| Element | Detail |
|---|---|
| Frequency | Full ISMS audit annually; rotating thematic audits quarterly (one Annex A theme per quarter) |
| Auditor independence | Auditor must not audit their own area of responsibility (e.g. Engineering Lead does not audit Theme 8 controls they implemented) |
| Audit criteria | ISO/IEC 27001:2022 Clauses 4–10, the [Statement of Applicability](./05-statement-of-applicability.md), and internal policies |
| Sampling | Minimum 3 evidence samples per control tested, or 100% for Critical/High-risk-linked controls |
| Reporting | Findings classified per §4 below, reported to management review within 30 days of audit completion |

### Annual audit schedule

| Quarter | Focus (Annex A theme) | Plus |
|---|---|---|
| Q1 | Theme 8 — Technological controls | Follow-up on prior year's open findings |
| Q2 | Theme 5 — Organizational controls | Risk register / SoA consistency check |
| Q3 | Theme 6 & 7 — People & Physical controls | Offboarding sample testing |
| Q4 | Full ISMS surveillance audit | Clause 4–10 conformance ahead of any external certification audit |

## 3. Sample audit checklist (Q1 example — Theme 8 excerpt)

| Ref | Question | Evidence to request | Pass/Fail | Finding |
|---|---|---|---|---|
| A.8.5 | Is MFA enforced for all accounts with access to production? | SSO admin console export of MFA enrolment | ☐ | |
| A.8.8 | Is there a documented SLA for patching critical vulnerabilities, and is it met? | Vulnerability scan reports + patch tickets for last quarter | ☐ | |
| A.8.13 | Has a backup restore been tested in the last 12 months? | Restore test log/report | ☐ | |
| A.8.15 | Are production access events logged and retained per policy? | Sample of CloudTrail logs; retention configuration | ☐ | |
| A.8.16 | Is privileged access activity reviewed on a defined schedule? | Access review sign-off records | ☐ | |
| A.8.24 | Is data encrypted at rest and in transit per policy? | KMS configuration; TLS configuration scan | ☐ | |
| A.8.32 | Does every sampled production change have an associated approved pull request? | Sample of 5 recent production deploys, matched to PR approvals | ☐ | |

## 4. Finding classification

| Classification | Definition | Response requirement |
|---|---|---|
| **Major nonconformity** | A control required by the SoA is absent, or the ISMS process itself has broken down (e.g. no risk assessment performed in over a year) | Immediate corrective action; logged in [`08-corrective-action-log.md`](./08-corrective-action-log.md); re-audited before next certification milestone |
| **Minor nonconformity** | A control is implemented but not consistently, or evidence is incomplete (e.g. access reviews done for 3 of 4 quarters) | Corrective action within 90 days |
| **Observation** | Not yet a nonconformity, but a trend or weak point worth tracking | Logged for trend monitoring; no mandatory deadline |
| **Opportunity for improvement (OFI)** | Control is effective; a better way exists | Optional; owner may pick up voluntarily |

## 5. Reporting

Each audit produces:

1. An audit report (scope, criteria, sample, findings, classification).
2. Entries in the [corrective action log](./08-corrective-action-log.md) for
   every Major/Minor nonconformity.
3. A summary presented as a mandatory input to the next
   [management review](./07-management-review-minutes.md).
