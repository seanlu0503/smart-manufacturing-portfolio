# Design QA

final result: passed

## Reference

- Project: Smart Manufacturing Portfolio landing page.
- Goal: A one-link portfolio hub for job platforms, connecting the production dashboard and incident dispatch system.
- Target use: public GitHub Pages link for 1111, Cake, LinkedIn, and interview sharing.

## Checks

- Production build: passed with `npm.cmd run build`.
- Local server: passed, `http://127.0.0.1:5175` returned HTTP 200.
- Desktop visual QA: passed, captured `outputs/smart-manufacturing-portfolio-desktop.png`.
- Mobile visual QA: passed after tuning the hero headline line breaks, captured `outputs/smart-manufacturing-portfolio-mobile.png`.
- Core links included:
  - production dashboard demo
  - production dashboard GitHub repo
  - incident dispatch demo
  - incident dispatch GitHub repo
  - GitHub profile
- Portfolio content included:
  - manufacturing workflow roadmap
  - interview talking points for each project
  - target role mapping for MES, production control, process improvement, and digital transformation roles
  - updated incident dispatch positioning for SLA tracking, supervisor review, RCA, and improvement tracking
  - design rationale explaining why the portfolio is split into production tracking and incident handling
  - AI collaboration boundary explaining what AI assisted and what decisions were handled by the portfolio owner
  - future extension plan for database persistence, role permissions, reporting, and MES / ERP integration
  - public safety statement for static frontend deployment, simulated data, and no API keys or credentials

## Notes

- This site uses only static content and local screenshot assets. No API keys, tokens, credentials, backend, database, or external write APIs are included.
