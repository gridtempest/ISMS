# ISMS

A from-scratch Information Security Management System (ISMS) documentation
suite, built the way a GRC analyst or ISMS implementation lead would actually
build one: scope statement, top-level policy, risk methodology, a populated
risk register, a full Statement of Applicability across all 93 Annex A
controls, an internal audit programme, and a management review cycle —
mapped directly to ISO/IEC 27001:2022 clauses 4–10.

**Live site:** https://gridtempest.github.io/ISMS/

This complements the [ISO 27001 Risk Assessment Tool](https://gridtempest.github.io/iso27001checkertool/).
That tool *scores* a control set. This project produces the *governance
paper trail* — the documents an external certification auditor actually
asks to see during a Stage 1 / Stage 2 audit.

## Why this project

Anyone can recite "ISO 27001 has 93 controls in 4 themes." Implementing an
ISMS is a documentation and process discipline, not a checklist tick. This
project demonstrates the artifacts and the reasoning behind them: why a
control is marked not applicable, how a risk gets scored and treated, what
an internal auditor actually checks, and what a management review needs as
input versus what it produces as output.

## The fictional organisation

To keep every document concrete instead of a blank template, all artifacts
here are written for a fictional company:

> **Northwind Cloud Services** — a 40-person B2B SaaS company providing an
> analytics dashboard product to mid-market customers. Hosted entirely on
> AWS (multi-tenant), handles customer business data (not regulated health
> or card data), remote-first workforce, one office (HQ), and uses several
> SaaS subprocessors (payment, email, support ticketing).

Swap the org details in each document for your own scenario and the
structure holds.

## Structure: PDCA mapped to ISO/IEC 27001 clauses

| Phase | ISO Clause(s) | Deliverable | File |
|---|---|---|---|
| **Plan** | 4 — Context of the organization | ISMS scope, interested parties, boundaries | [`01-scope-statement.md`](./documents/01-scope-statement.md) |
| **Plan** | 5 — Leadership | Top management commitment, roles, policy | [`02-information-security-policy.md`](./documents/02-information-security-policy.md) |
| **Plan** | 6.1 — Risk assessment & treatment | Methodology, likelihood/impact scales, treatment options | [`03-risk-assessment-methodology.md`](./documents/03-risk-assessment-methodology.md) |
| **Plan** | 6.1.2 / 6.1.3 | Populated risk register with treatment decisions | [`04-risk-register.md`](./documents/04-risk-register.md) |
| **Plan** | 6.1.3(d) | Statement of Applicability — all 93 Annex A controls | [`05-statement-of-applicability.md`](./documents/05-statement-of-applicability.md) |
| **Do** | 7, 8 — Support & Operation | Control implementation evidenced via the SoA status column | *(see SoA)* |
| **Check** | 9.2 — Internal audit | Audit programme, scope, checklist, finding classification | [`06-internal-audit-checklist.md`](./documents/06-internal-audit-checklist.md) |
| **Check** | 9.3 — Management review | Review meeting template: required inputs & outputs | [`07-management-review-minutes.md`](./documents/07-management-review-minutes.md) |
| **Act** | 10.1 — Nonconformity & corrective action | Tracker for findings raised during audit/review | [`08-corrective-action-log.md`](./documents/08-corrective-action-log.md) |

## How to use this

1. Read `01` → `05` in order — each builds on the last (scope defines what's
   in-bounds, the policy commits leadership to protecting it, the
   methodology defines how risk gets scored, the register applies it to
   real assets, and the SoA justifies which of the 93 controls treat those
   risks).
2. `06` and `07` are the "Check" half of the cycle — run an internal audit
   against the SoA, then feed the results into a management review.
3. `08` closes the loop — every audit finding or review action becomes a
   tracked corrective action with an owner and a due date.
4. Fork the structure for a real organisation: keep the clause mapping,
   replace Northwind's specifics.

## Skills demonstrated

- ISO/IEC 27001:2022 clause structure (4–10) and the 2022 Annex A control
  restructuring (Organizational / People / Physical / Technological)
- Risk assessment methodology design — asset-based, likelihood × impact
  scoring, defined acceptance criteria
- Statement of Applicability drafting, including documented justification
  for both inclusion and exclusion of controls (a common Stage 1 audit gap)
- Internal audit programme planning against ISO 19011 principles
- Management review facilitation — knowing the mandatory clause 9.3 inputs
  and outputs, not just "have a meeting"
- Nonconformity and corrective action tracking (clause 10.1) distinguishing
  correction, root cause, and corrective action

## Next steps / extensions

- Add a Stage 1 readiness self-assessment (gap analysis against clause 4–10
  documentation requirements before booking a certification audit)
- Wire the risk register and SoA into the
  [ISO 27001 Risk Assessment Tool](https://gridtempest.github.io/iso27001checkertool/)
  as importable JSON so the two projects share one data model
- Add a supplier/third-party risk assessment questionnaire (expands on
  A.5.19–A.5.22) with a scoring rubric for vendor onboarding

## License

MIT — see [LICENSE](./LICENSE).
