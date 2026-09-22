# Corrective Action Log

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 10.1 (Nonconformity and corrective action)
**Document owner:** Head of Security & Compliance

## Purpose

Tracks every nonconformity raised (by internal audit, external audit,
incident post-mortem, or self-identification) through to closure, keeping
**correction**, **root cause**, and **corrective action** distinct — a
frequent point of confusion that auditors specifically probe:

- **Correction** — fixes the immediate instance (e.g. revoke one
  over-privileged account).
- **Root cause** — why it happened (e.g. offboarding checklist isn't
  triggered automatically from the HRIS).
- **Corrective action** — prevents recurrence (e.g. integrate HRIS
  termination event with SSO to auto-disable access).

A correction without a root cause and corrective action does not close a
nonconformity under Clause 10.1.

## Log

| ID | Date raised | Source | Classification | Description | Correction | Root cause | Corrective action | Owner | Due date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| CA-01 | — | Internal audit Q1 (A.8.5) | Minor | MFA not enforced for 3 of 42 accounts, all recently created contractor accounts | 3 accounts brought into MFA enforcement immediately | New-hire provisioning script did not apply the MFA-enforcement group by default for the contractor onboarding path | Fix provisioning script so all account types default into the MFA-enforced group; add automated check to weekly access review | People Ops / Engineering Lead | +30 days | Open |
| CA-02 | — | Internal audit Q1 (A.8.13) | Major | No successful backup restore test on record for the primary datastore | N/A (no immediate exposure identified) | Backup restore testing was never scheduled — implicitly assumed backups worked because jobs reported "success" | Add quarterly restore-drill to the ops calendar with a documented pass/fail report each time | Engineering Lead | +45 days | Open |
| CA-03 | — | Self-identified (R-09 review) | Observation | Several engineers hold standing admin access "for convenience" beyond documented need | N/A — observation, not yet a nonconformity | Ease of use was prioritised over least privilege during early team scaling | Implement just-in-time privileged access model (linked to R-09) | Head of Security | +60 days | Open |
| CA-04 | — | Incident post-mortem (phishing attempt, contained) | Minor | One employee entered credentials into a phishing page; no MFA meant the credential alone was a viable risk (mitigated only because the attempt was reported before use) | Password reset for affected account; account activity reviewed for misuse (none found) | Awareness training frequency (annual) is not sufficient given phishing is the top observed threat vector | Increase phishing-simulation frequency to quarterly; add real-time reporting button in email client | People Ops | +30 days | Open |

## Closure criteria

A corrective action is marked **Closed** only when:

1. The correction has been verified as applied.
2. Root cause analysis is documented and agreed with the control owner.
3. The corrective action has been implemented (not just planned).
4. Effectiveness has been checked — typically at the next relevant internal
   audit or a targeted follow-up — confirming the same nonconformity has
   not recurred.

Open items are reported as a standing input to every
[management review](./07-management-review-minutes.md) until closed.
