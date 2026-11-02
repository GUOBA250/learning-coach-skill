<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="README.md">中文</a></p>
  <p><em>Your personal tech-interview coach: planning, Q&A drills, algorithms, source reading, mock interviews, spaced review, anti-procrastination.</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

An AI learning coach that lives in your IDE / Agent — all seven workflows happen in conversation. Not limited to frontend/backend/full-stack; works for everyday learning too.

## Seven Modes

Just say it in plain words, optionally with a `/learning-coach` prefix:

| Mode | Say | What it does |
|---|---|---|
| 📅 Planning | `Interview in 14 days, 2 hours a day` | Stage overview + block-level task table from countdown and self-rated baseline; cross-day sessions start with a recovery card, lapsed debts are re-split with caps |
| 📚 Q&A drills | `Next question` | Must-memorize list first, then explanations; you recite, the coach only patches — never re-teaches |
| 🧮 Algorithms | `Next Hot100 problem` | Problem → approach → full code → complexity, four steps and stop; paired with a write-from-memory loop until you pass |
| 📂 Source reading | `Continue reading xxx.ts` | Task-first: predict, then verify hands-on; explain mechanisms against observable behavior, code is understood not memorized |
| 🎤 Mock interview | `Mock interview, frontend full loop` | One question at a time, no hints; self-intro → Q&A → algorithm → project → reverse questions, scored with patches |
| 🔁 Review | `Quiz me on what's due` | Error notebook on a 1/3/7/15-day schedule: 2 upgrades, 1 stays, 0 goes back to tomorrow |
| 🚀 Get started | `I can't focus, help me start` | PlanCoach mode: no lectures, one tiny action at a time |

## Quick Start

Requires Node.js ≥ 16 (installer only; the skill itself is pure Markdown).

```bash
npx learning-coach-skill install
```

Restart your IDE / Agent and **open a new conversation**:

```text
/learning-coach Plan my prep, interview in 14 days, 2 hours a day
/learning-coach Next question
/learning-coach Next algorithm problem
/learning-coach I can't focus, help me start
```

## Install per Product

| Product | Command | Location |
|------|----------------|----------|
| Generic Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |

```bash
npx learning-coach-skill install --all     # all global targets at once
npx learning-coach-skill doctor            # dry-run: show targets only
```

For a single project, run with `--project` from the project root. Updates don't auto-apply: installs are copies — re-run install to upgrade.

## Design Principles

- **Patch, don't re-teach**: your own wording is the official version; the coach gives ≤5 patches (missed points / wrong phrases + why) — never dumps a near-identical model answer to fake "read it = know it".
- **Graded memorization**: 🔴 recite / 🟡 explain / ⚪ recognize; code, file paths and API spellings are never memorized.
- **Review always wins**: due cards first, review never yields to new material.
- **Projects are hands-on**: predict, verify, explain the causal chain against evidence.
- **Plans self-adjust**: evening check-in reconciles plan vs actual; under-completion auto-halves, early finish requires make-up work; lapses never snowball.
- **Anti-procrastination mode**: PlanCoach pushes one tiny action at a time until you're in flow.

## Layout

```text
learning-coach-skill/
├── skill/learning-coach/
│   ├── SKILL.md                 # entry: triggers, dispatch table, conventions
│   ├── profiles/                # user config layer: TEMPLATE.md + example
│   └── references/
│       ├── rules/               # how to teach / schedule / quiz / retain
│       ├── templates/           # output templates
│       └── examples/            # full example dialogue
├── bin/learning-coach-skill.js  # install CLI
├── scripts/check-refs.js        # npm test: verifies Markdown cross-references
├── package.json / README.md / README_EN.md / LICENSE
```

**Personalization (Profile)**: rule files ship generic defaults; your target role, available hours and learning style go in one file — copy `profiles/TEMPLATE.md` and fill it in. Explicit profile values override the defaults.

## FAQ

**No reaction after install?** ① Restart the IDE / Agent; ② open a **new** conversation; ③ run `npx learning-coach-skill doctor` to verify paths.

**Does install auto-detect the product?** No — only explicit flags (`--trae` / `--cursor` / `--claude-code` / `--codex`); default installs to the generic directory.

**command not found?** Try `npm install -g learning-coach-skill`, or clone and run `node bin/learning-coach-skill.js install`.

**Will reinstalling touch my other files?** No. Managed directories (with `.installed-manifest.json`) only clean up this tool's old files; unmanaged ones are merge-overwrite only.

## Maintenance

Rules keep lookup copies in several files — any wording change must sync all copies (each rule file's header names its source of truth); run `npm test` to verify cross-references. The CLI install directory is managed via `.installed-manifest.json`: reinstalls only remove this tool's stale files.

## License

MIT. See [LICENSE](LICENSE).
