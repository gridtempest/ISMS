# Risk Register

**Organisation:** Northwind Cloud Services
**Clause reference:** ISO/IEC 27001:2022, Clause 6.1.2 / 6.1.3
**Methodology:** [`03-risk-assessment-methodology.md`](./03-risk-assessment-methodology.md)
**Last reviewed:** Quarterly review cycle — see management review minutes

Scores use Likelihood (L) × Impact (I) = Risk, on the 1–5 scales defined in
the methodology document. Ratings: Low (1–4), Medium (5–9), High (10–15),
Critical (16–25).

| ID | Asset | Threat / Scenario | Vulnerability | L | I | Inherent Risk | Existing Controls | Treatment | Residual Risk | Linked Annex A Control(s) | Owner | Target Date |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-01 | Production database (customer analytics data) | Ransomware encrypts primary datastore | Single AWS account, broad IAM role used by CI/CD | 3 | 5 | 15 (High) | Nightly automated backups, not yet tested for restore | Modify — restrict CI/CD IAM role; implement quarterly backup restore drills | 6 (Medium) | A.8.13, A.8.7, A.8.32, A.5.15 | Engineering Lead | +60 days |
| R-02 | Employee email accounts (Google Workspace) | Phishing leads to account takeover | No MFA enforced org-wide at time of assessment | 4 | 4 | 16 (Critical) | Basic spam filtering only | Modify — enforce phishing-resistant MFA for all accounts, prioritise admins | 4 (Low) | A.5.17, A.8.5, A.6.3 | People Ops / Head of Security | +30 days |
| R-03 | Production AWS environment | Misconfigured S3 bucket exposes customer data publicly | No automated cloud security posture checks | 3 | 4 | 12 (High) | Manual quarterly review only | Modify — deploy automated CSPM (e.g. AWS Config rules) with alerting | 6 (Medium) | A.8.9, A.5.23, A.8.16 | Engineering Lead | +45 days |
| R-04 | Customer data shared with subprocessors | Subprocessor suffers a breach affecting Northwind customer data | No formal security review of subprocessors prior to onboarding | 3 | 4 | 12 (High) | DPAs signed, but no security questionnaire on file | Modify — implement supplier security review process before onboarding, annual re-review | 6 (Medium) | A.5.19, A.5.20, A.5.22 | Head of Security | +90 days |
| R-05 | Source code repository | Leaked secret (API key / credential) committed to git history | No automated secret scanning in CI | 3 | 3 | 9 (Medium) | Code review process (manual) | Modify — enable automated secret scanning + pre-commit hooks | 4 (Low) | A.8.28, A.8.24, A.8.32 | Engineering Lead | +30 days |
| R-06 | Employee laptops | Lost or stolen unencrypted device | Encryption not centrally enforced/verified | 2 | 4 | 8 (Medium) | Disk encryption enabled by default on issued devices, not centrally verified | Modify — enforce and centrally verify full-disk encryption via MDM | 4 (Low) | A.7.9, A.8.1, A.5.10 | Engineering Lead / People Ops | +60 days |
| R-07 | Production API | Distributed denial-of-service (DDoS) affects availability | No WAF/DDoS protection layer in front of API | 2 | 4 | 8 (Medium) | AWS Shield Standard (default) | Modify — enable AWS Shield Advanced / WAF rate limiting on customer-facing endpoints | 4 (Low) | A.8.20, A.8.22, A.5.30 | Engineering Lead | +90 days |
| R-08 | Departing employee accounts | Access not revoked promptly after termination | Offboarding checklist exists but not consistently enforced | 3 | 3 | 9 (Medium) | Manual offboarding checklist | Modify — integrate offboarding with HRIS trigger to auto-disable SSO within 1 hour | 3 (Low) | A.5.18, A.6.5, A.5.16 | People Ops | +45 days |
| R-09 | Internal admin/support tooling | Insider misuse of standing privileged access to view customer data | Several engineers hold permanent admin roles for convenience | 3 | 4 | 12 (High) | Access logging exists but not routinely reviewed | Modify — move to just-in-time privileged access with time-boxed approval and mandatory logging review | 6 (Medium) | A.5.18, A.8.2, A.8.15, A.8.16 | Head of Security | +60 days |
| R-10 | Unpatched dependencies (application libraries) | Known CVE exploited in a third-party library | No automated dependency vulnerability scanning | 3 | 3 | 9 (Medium) | Ad-hoc manual updates | Modify — add automated SCA/dependency scanning to CI pipeline with SLA-based patching | 4 (Low) | A.8.8, A.8.28 | Engineering Lead | +30 days |
| R-11 | Legacy internal wiki (low-sensitivity, no customer data) | Compromise of an unmaintained internal tool | Tool is out of active support | 2 | 1 | 2 (Low) | None specific | Retain — accepted, low impact, monitored via general logging | 2 (Low) | A.8.19 | Engineering Lead | Accepted — CEO sign-off on file |

## Risk summary (for management review)

| Rating | Count (inherent) | Count (residual, post-treatment) |
|---|---|---|
| Critical | 1 | 0 |
| High | 4 | 0 |
| Medium | 5 | 5 |
| Low | 1 | 6 |

All Critical and High inherent risks have an assigned Modify treatment with
an owner and target date; none are being silently accepted. R-11 is the
only risk formally Retained, with sign-off on file per the acceptance
criteria in the methodology document.
