# Changelog

## 0.10.0 — 2026-11-12

- Replace conflicting legacy workflows with current mode routing and local-file continuity.
- Distinguish assessment, demonstration, status queries, rest, and skill maintenance.
- Keep original cold-test scores separate from coached retellings.
- Add a read-only Markdown ledger checker for stable IDs, dates, inventory deduplication, and algorithm queues.
- Install the explicit Codex target into ~/.codex/skills/learning-coach, preserve local profiles on upgrade, and avoid a redundant default target with --all.
- Remove the author’s private profile from the public package; retain a compatibility pointer and user template.
- Add installer and ledger regression tests.

The checker requires Python 3; the installer continues to require Node.js 16 or newer. Existing personal ledgers are not bundled or published. Legacy duplicate installations are not automatically deleted.
