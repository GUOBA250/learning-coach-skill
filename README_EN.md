<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="README.md">中文</a></p>
  <p><em>Your personal technical-interview coach: study plans, Q&amp;A prep, algorithms, source reading, mock interviews, spaced review, and beating procrastination.</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

An AI study coach that lives inside your IDE / Agent and handles seven interview-prep jobs in plain conversation. Works for frontend, backend, and full-stack; handy for everyday learning too.

## The seven modes

Just say it in natural language (or add the `/learning-coach` prefix):

| Mode | Say this | What it does |
|---|---|---|
| 📅 Study plan | `Interview in 14 days, 2 hours a day` | Builds a three-phase overview plus today's half-hour-block table from your countdown and self-rated level; job-hunters get a one-shot intake (written tests, problem lists, project pool, etc.) |
| 📚 Interview Q&A | `Quiz me on interview questions, next one` | Gives a 🔴 must-recite list and a four-part explanation; after you recite, patches only — never a full rewrite |
| 🧮 Algorithms | `Grind algorithms, next Hot100 problem` | Code Caprice style; each block opens with closed-book review dictation, then 4 new medium problems — no blank staring |
| 📂 Source reading | `Continue reading MiniVue, explain parse.ts` | Task-first: predict, then verify hands-on; explain mechanisms against page behavior / logs. Code is understood, never memorized |
| 🎤 Mock interview | `Mock interview, frontend role, full run` | One question at a time, no hints; 50 minutes covering intro → Q&A → coding → project deep-dive → reverse questions, then scoring and patches |
| 🔁 Error-book review | `Review — quiz me on what's due` | One error book on a 1/3/7/15-day schedule: 2 levels up, 1 stays, 0 resets to tomorrow |
| 🚀 Kickstart | `I don't feel like studying, get me started` | PlanCoach mode: no lectures, one tiny action at a time |

## Up and running in 30 seconds

Requires Node.js ≥ 16 (only for installation; the Skill itself is pure Markdown).

```bash
npx learning-coach-skill install
```

Restart your IDE / Agent and **start a new conversation**:

```text
/learning-coach Plan my prep: interview in 14 days, 2 hours a day
/learning-coach Quiz me on interview questions, next one
/learning-coach Grind algorithms, next one
/learning-coach Continue reading MiniVue, explain parse.ts
/learning-coach I don't feel like studying, get me started
```

Narrow the scope any way you like: chapter ("Vue two-way binding"), problem number ("problem 76. Minimum Window Substring"), file path, or language ("in Go").

## Install targets

Default goes to the generic Agent directory; explicit flags are recommended:

| Product | User-level install | Location |
|---------|--------------------|----------|
| Generic Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |

Other commands:

```bash
npx learning-coach-skill install --all     # every global target at once
npx learning-coach-skill doctor            # dry run: show paths and current status
```

Project-level install — run from the project root with `--project`:

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae   # -> ./.trae/rules/learning-coach-skill/
npx learning-coach-skill install --project --all    # every project-level target
```

> Updates are not automatic: installs are copies. Re-run install with the same flags to upgrade.

## Not just another "AI explainer"

- **Patches, not re-memorization**: your own recitation is canonical. You get at most 5 patches (📌 missing point / 🔁 wrong claim, with the why), read them once, then immediately re-tell — never a 90%-similar "model answer" that creates a "seen it = know it" illusion.
- **Priority tagging, not brute memorization**: 🔴 recite / 🟡 explain with code visible / ⚪ recognize. Code itself, file paths, error-code numbers, and API spelling are never memorized.
- **Review always comes first**: the first daily block clears due items (Q&A spoken without notes, algorithms written closed-book, projects explained against artifacts) before any new material. A point failed twice becomes a leech — split it, switch channels, or drop it; two straight days of inflow > outflow trigger a no-new-material "hemostasis day".
- **Projects are read by doing, not by line-by-line lectures**: each block is one small task — predict first, verify hands-on, then explain the causal chain against an artifact. No note-free recitation.
- **The plan adjusts itself**: evening check-in reports completion / blockers / per-block load / fatigue — sub-50% days auto-halve with no debt rollover, one 🟠 block eases the next day, two straight 🔵 days add load.
- **Progress carries over**: with persistent memory, the error book and plan status are loaded automatically; otherwise you paste the saved tables back.
- **Procrastination gets its own mode**: PlanCoach pushes one tiny action at a time (put the phone away, sit up, open the notes…) until you are studying.

## A typical day

1. Morning: get the plan — today's 30-45 minute blocks, each with a verifiable output standard
2. First block clears due review items, then Q&A / algorithms / project work per the table
3. Stuck on startup? Say "I don't feel like it" and let PlanCoach pull you in
4. Evening: check in and get tomorrow's adjusted table automatically
5. Sprint phase: two mock interviews (baseline + pre-interview retest); missed points auto-enter the error book

Ten full worked scenarios: [示例对话.md](skill/learning-coach/references/examples/示例对话.md).

## Directory layout

```text
learning-coach-skill/
├── skill/learning-coach/
│   ├── SKILL.md                 # entry: triggers, routing table, conventions
│   └── references/
│       ├── rules/               # 9 rule sets: how to teach / plan / test / retain
│       ├── templates/           # 6 output templates: what output looks like
│       └── examples/示例对话.md
├── bin/learning-coach-skill.js  # install CLI
├── scripts/check-refs.js        # npm test: validates Markdown cross-references
├── package.json
├── README.md / README_EN.md
└── LICENSE
```

The `skill/learning-coach/` directory is portable on its own — the CLI is not required.

## FAQ

**Installed but nothing happens?** ① Restart the IDE / Agent; ② start a **new** conversation (old ones don't load new skills); ③ run `npx learning-coach-skill doctor --trae` to verify paths.

**Does install auto-detect the product?** No — detection is deliberately explicit via `--trae` / `--cursor` / `--claude-code` / `--codex`; the default is the generic directory.

**EACCES on write?** Fix ownership first: `sudo chown -R "$(whoami)" ~/.trae ~/.agents ~/.cursor ~/.claude 2>/dev/null`

**command not found?** Try `npm install -g learning-coach-skill`, or clone and run `node bin/learning-coach-skill.js install --trae`.

**Can reinstalling touch my other files?** No. Managed directories (with `.installed-manifest.json`) only prune this tool's own old leftovers; unmanaged directories are merge-overwrite only.

## Maintainer notes

Rules deliberately keep quick-reference copies across multiple files — each mode must work loading only its own files. When changing a rule, sync every copy or you get "one rule, two answers". Fact-source map:

| Rule | Single source of truth | Quick-reference copies (must sync) |
|---|---|---|
| L1/L2/L3 priority levels | `rules/记忆优先级.md` | SKILL.md convention 8, 八股规范, 算法规范, 项目规范 |
| Mistake-book mechanism (1/3/7/15-day intervals, daily caps 8/3/3, 2/1/0 grading, leech handling) | `rules/复习滚动机制.md` | SKILL.md review cadence, 八股/算法/项目/模拟面试规范, 计划规范 |
| Patch protocol (📌/🔁, max 5 per turn, no full rewrite by default) | `rules/八股规范.md` | SKILL.md convention 7, 模拟面试规范, 八股模板 |
| Three-phase reforge (trace triage gate, relearn 15 / warm test 20 / cold shot 10, at most once daily, enters book as 🟡) | `rules/八股规范.md` last section | SKILL.md review cadence, 复习滚动机制 section 3, 复习模板, sample scenario 8 |
| Normal-day Q&A block 35+10 (35 min due items + new material, 10 min cold shot on day-before-yesterday/3-days-ago topics; reforge days replace the whole block with 15+20+10) | `rules/八股规范.md` normal-day structure section | SKILL.md review cadence |
| Task-first (the single project learning method: diagnosis asked once and stored in profile, six-step flow, four-layer obstacle triage, on-the-spot vocab cards with no table) | `rules/任务先行规范.md` | SKILL.md load table, 项目规范 (level index), 计划规范 step 1 (diagnosis during planning), sample scenario 9 |
| Weekend interview-experience Q&A 15 min (rapid-fire real interview questions, L1 retrieval speed only, stuck points enter the error book) | `rules/计划规范.md` step 6 | 计划模板 "rest of week" note |
| Project-leech channel toolbox (instrumented tracing / change-one-line prediction / diagram / demoted hints, file+line action order, artifact-based retest) | `rules/复习滚动机制.md` section 4 | 任务先行规范 section 4, 复习模板 leech format, sample scenario 9 |
| Plan adjustment rules (completion-rate tiers, half-load day, roll-over at most once) | `rules/计划规范.md` | 计划模板, sample scenarios 4/4B |
| Plan status block format (two artifact types only — countdown/completion/load and error-book level; no time-spent calibration) | `rules/计划规范.md` check-in step 3 | 计划模板 |
| Algorithm quota and new-problem 3-step (review-first: 30-min due dictation ≤3 problems, no new problems until done; 4 new medium at ~12 min each on standard days, 2 hard on hard days; think 3-5 min → read solution → write from memory instead of staring blankly; overrun rolls forward) | `rules/算法规范.md` drill flow | SKILL.md review cadence, 计划规范 step 6 check 3, 计划模板 today table, sample scenarios 2/10 |
| Algorithm must-recite scope (🔴 only signals / template skeleton / complexity; approach frameworks aid understanding but are never memorized) | `rules/算法规范.md` priority table and style section 2 | 算法模板 must-recite list, README algorithm line |
| Algorithm dictation-only protocol (review sessions write code with no framework quiz, two-tier hints signature → key line, wrong-line patch plus same-session rewrite; error-book entry on cannot-write-from-memory / 2+ wrong spots / wrong complexity — reading the solution is normal and not an entry) | `rules/算法规范.md` dictation protocol section | 复习滚动机制 section 1 entry table / section 2 rating table / section 4 algorithm leech, sample scenario 10 |
| Four daily-table self-checks (total vs target ±30 min fill/trim, peak-energy ordering, algorithms review-first then 4 new problems, project block ≤2 observable points) | `rules/计划规范.md` step 6 | SKILL.md progress section, 计划模板 today/tomorrow tables and adjustment rules, 任务先行规范 section 2, sample scenario 10 |
| Project mechanism acceptance (no note-free recitation: phenomenon-backward reasoning with causal chain against an artifact passes; one failed explanation retries with a new phenomenon, enters error book only after 2 phenomena fail) | `rules/任务先行规范.md` end of section 2 and section 4 | 项目规范, 复习滚动机制 section 1 / section 2 rating table, SKILL.md review cadence |
| Four-field check-in and fatigue protection (one 🟠 auto-eases/splits next day, two straight 🔵 auto-add load, mandatory "tomorrow ___ block changes to ___" closer, saturated zeroes move to next morning, 25+5 pomodoro) | `rules/计划规范.md` check-in section | SKILL.md progress section, 计划模板 (load trailer / status block / hemostasis day), 复习滚动机制 section 2, sample scenarios 4B/10 |
| Lean 5-column error book (point / level / current rung / next review / recent record; recent record holds the latest grade, 🔁 marks a leech, "reforge" marks a reforge entry — no intake-date / reforge-date / recall-count columns) | `templates/复习模板.md` | 复习滚动机制 section 5, sample scenarios 7A/8 |
| Inventory level and hemostasis (report level line, 2 consecutive inflow>outflow days → hemostasis day, 🔴 > 12 → keep-or-drop audit) | `rules/复习滚动机制.md` section 7 | SKILL.md review cadence, 计划模板 (status / hemostasis day), 复习模板 report, sample scenario 7E |
| Prediction-first (state a prediction before coding/rewriting/changing a line/reading new code, then reconcile) | SKILL.md convention 9 | 任务先行规范 six steps step ③, 复习滚动机制 channel 2 |
| Persistence adapter (with memory: auto read/write of the two state artifacts — error book plus plan status block; without: fall back to manual table handoff) | SKILL.md persistence section | 复习滚动机制 section 5, 计划规范 check-in step 3 |

Other hard rules:

- Run `npm test` after editing any Markdown: broken links are not tolerated; orphaned rules/templates produce a warning.
- File references must use backticks (e.g. `记忆优先级.md`) or relative links; bare filenames are not checked.
- Adding a mode requires syncing six places: rules, templates, examples, SKILL.md (triggers + routing table), both READMEs, plus a real install test (`doctor` + `install` into a temp HOME).
- Installed directories are managed via `.installed-manifest.json`: reinstalls prune old-version leftovers per the manifest; unmanaged directories are merge-overwrite only — user files are never deleted.

## License

This project is licensed under the **MIT License** — see **[LICENSE](LICENSE)** for the full text.
