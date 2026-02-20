# Development Log Artifact

This file is the persistent artifact for tracking important implementation knowledge and project changes.

## Versioning

- Current version: `0.1.2`
- Versioning strategy: semantic-ish patch increments for day-to-day updates (`major.minor.patch`).
- Rule: each meaningful development change adds one entry and increments patch.

## Entries


### v0.1.2
- **Summary:** Improved launch behavior for unavailable tools by replacing placeholder launch links with clear "Coming soon" messaging.
- **Knowledge:** Only tools with real URLs render clickable Launch/Open Tool links; placeholder (`#`) entries are displayed as unavailable to avoid confusing no-op clicks.
- **Date:** 2026-02-20

### v0.1.1
- **Summary:** Removed user-facing development log UI; retained repository-only artifact workflow.
- **Knowledge:** Development change tracking should live in `DEVELOPMENT_LOG.md` and be updated as part of commits. No in-app logging UX or `localStorage` persistence is required.
- **Date:** 2026-02-20

### v0.1.0
- **Summary:** Added in-app development log modal and local artifact workflow.
- **Knowledge:** The web app now supports capturing change summaries and implementation knowledge in the UI; entries persist in browser `localStorage` under `modelToolkitDevLog` and auto-increment patch versions.
- **Date:** 2026-02-20
