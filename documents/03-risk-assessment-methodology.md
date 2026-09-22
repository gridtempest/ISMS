# Risk Assessment & Treatment Methodology

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 6.1.2 (assessment) & 6.1.3 (treatment)
**Document owner:** Head of Security & Compliance
**Version:** 1.0

## 1. Purpose

Defines a consistent, repeatable method for identifying, analysing,
evaluating, and treating information security risk, so that results are
comparable across assets and over time.

## 2. Approach

Northwind uses an **asset-based risk assessment**: for each information
asset in the asset inventory (A.5.9), identify realistic threats and
exploitable vulnerabilities, then score the resulting risk.

Risk = Likelihood × Impact, assessed against **Confidentiality, Integrity,
and Availability (CIA)** separately where they differ, with the register
recording the highest-scoring dimension.

## 3. Likelihood scale (1–5)

| Score | Rating | Definition |
|---|---|---|
| 1 | Rare | Not expected to occur; no known precedent in our environment or sector |
| 2 | Unlikely | Could occur but not expected within 12 months |
| 3 | Possible | May occur within 12 months; has happened in similar organisations |
| 4 | Likely | Expected to occur within 12 months without additional controls |
| 5 | Almost certain | Actively being observed / exploited, or trivially easy given current controls |

## 4. Impact scale (1–5)

| Score | Rating | Definition |
|---|---|---|
| 1 | Negligible | No customer impact; internal nuisance only |
| 2 | Minor | Limited internal disruption, no data exposure, no customer notification required |
| 3 | Moderate | Single customer or small dataset affected; recoverable within SLA; possible regulatory notification |
| 4 | Major | Multiple customers affected, confirmed data exposure, mandatory breach notification, reputational harm |
| 5 | Severe | Platform-wide outage or breach; existential financial/legal/reputational impact |

## 5. Risk matrix and acceptance criteria

| Likelihood \ Impact | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **5** | 5 | 10 | 15 | 20 | 25 |
| **4** | 4 | 8 | 12 | 16 | 20 |
| **3** | 3 | 6 | 9 | 12 | 15 |
| **2** | 2 | 4 | 6 | 8 | 10 |
| **1** | 1 | 2 | 3 | 4 | 5 |

| Score range | Rating | Action required |
|---|---|---|
| 1–4 | Low | Accept; review annually |
| 5–9 | Medium | Treat within 6 months, or accept with documented sign-off from Head of Security |
| 10–15 | High | Treat within 90 days; requires Head of Security sign-off to accept |
| 16–25 | Critical | Treat within 30 days; requires CEO sign-off to accept; escalate immediately |

**Risk acceptance criteria:** Northwind will not knowingly accept any
Critical risk, and accepts Medium/High risk only with a documented,
time-bound sign-off recorded in the risk register — acceptance is never
silent.

## 6. Risk treatment options (Clause 6.1.3)

For every risk above Low, one of four treatments is selected and recorded:

| Option | Meaning | Example |
|---|---|---|
| **Modify** | Apply a control to reduce likelihood and/or impact | Enable MFA to reduce account-takeover likelihood |
| **Retain** | Knowingly accept the risk as-is (requires sign-off per matrix above) | Accept residual risk of a low-severity internal tool after compensating controls |
| **Avoid** | Stop the activity causing the risk | Decommission a legacy integration rather than patch it indefinitely |
| **Share** | Transfer risk via a third party | Cyber insurance; outsourcing card processing to a PCI DSS-compliant processor |

Every "Modify" treatment must reference the specific Annex A control(s)
implementing it, linking the risk register to the
[Statement of Applicability](./05-statement-of-applicability.md).

## 7. Process and cadence

1. **Identify** — asset owners and Security jointly identify threats/vulnerabilities per asset, informed by threat intelligence (A.5.7) and prior incidents.
2. **Analyse & evaluate** — score using the scales above; record in the [risk register](./04-risk-register.md).
3. **Treat** — select a treatment option and, for "Modify," implement or reference the relevant control(s).
4. **Review** — the full register is reviewed at least quarterly and after any significant change (new system, incident, audit finding), and residual risk re-scored after treatment.
5. **Report** — summarised risk posture is a mandatory input to management review ([`07-management-review-minutes.md`](./07-management-review-minutes.md)).

## 8. Roles

| Role | Responsibility |
|---|---|
| Asset owner | Identifies risk to their asset; implements agreed treatment |
| Head of Security & Compliance | Facilitates assessment, maintains the register, tracks treatment completion |
| CEO | Sign-off authority for Critical risk acceptance |
