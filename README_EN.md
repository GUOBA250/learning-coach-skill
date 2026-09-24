<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="https://github.com/GUOBA250/learning-coach-skill/blob/main/README.md">简体中文</a></p>
  <p><em>Your personal AI learning coach: build a study plan, memorize interview questions, grind algorithms, read source code, and beat procrastination.</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

An AI study coach that helps you memorize interview questions, grind algorithms, and read project source code. Works for frontend, backend, and full-stack learning alike. Before an interview it builds a personalized daily study plan from your countdown, available daily hours, and self-rated level across the three areas; in the final stretch it runs realistic mock technical interviews with scoring and debrief; a spaced-repetition error book keeps forgotten points from coming back; and when you procrastinate, it switches to PlanCoach mode and pulls you into study state step by step.

## Core Capabilities

- Study plan: given the interview countdown, daily available hours, and your level in interview Q&A / algorithms / projects (plus a 3-question learning-style diagnosis in the same intake, stored to your profile and never re-asked), it produces a three-phase overview, a today-task table sliced into time blocks, and milestones — every daily table passes four self-checks (total vs target: fill if short by >30 min / trim if over by >30; hardest blocks placed at peak-energy slots and memorization late; algorithms open with 30-min review dictation followed by 4 new problems; at most 1-2 observable points per project block). Check-ins collect four things (blocks done / blockers / per-block load 🔵🟢🟠 / fatigue): one 🟠 block auto-eases or splits the next day, two straight 🔵 days auto-add load, and check-ins always end with a "tomorrow the ___ block changes to ___" line. Beyond that the plan adjusts from completion rate (sub-50% days auto-halve, debt never rolls over, a cross-day status block is maintained); blocks over 50 minutes are split 25+5 pomodoro style, saturated-state zeroes are not graded, and written-test and no-project/weak-project edge cases each have dedicated scheduling rules
- Interview questions: four-part explanations (plain-language walkthrough + text flowchart + 75-80 point core answer + follow-ups); each question opens with a 🔴 must-recite list, and after you recite it the coach only hands you a short patch list — your own version stays canonical, no full rewrite; when points draw a complete blank twice in a row, a three-phase "reforge" runs first (relearn 15 min → warm test → cold shot on later days) instead of pointless retesting
- Algorithms: Code Caprice style — "why this method" first, then "how". The 🔴 must-recite list has only three items — **problem signals, the template skeleton (closed-book writing), and complexity**; approach frameworks aid understanding but are never memorized. **Review comes first**: each block opens with 30 min of closed-book dictation of problems due yesterday / 3 days / 7 days ago (cap 3; no new problems until review is done), followed by **4 new medium problems** (2 hard on hard days); each new problem follows "think 3-5 min to identify the pattern → read the solution and understand → write it from memory", ~12 min each instead of staring blankly; leech/due review runs the dictation-only protocol (write code, no framework quiz; hints escalate function signature → key line; wrong lines get a patch and a same-session rewrite); overrun problems roll forward without cannibalizing other blocks
- Source reading: every project block runs the task-first flow — vocab cards → task brief → predict → hands-on verify → mechanism wrap-up (vocab cards are used on the spot and never stored as a separate artifact); each brief targets only 1-2 browser-observable points, mechanism points are drilled via phenomenon-backward reasoning and verified by explaining the causal chain against an artifact (note-free recitation is never required), and reading blocks are triaged into four obstacle layers (syntax/API, cross-file data flow, static-to-dynamic, framework vocabulary) with a matching channel; the learning-style diagnosis happens only once, during planning
- Priority-tagged memory: every piece of knowledge is tagged 🔴 L1 recite / 🟡 L2 understand / ⚪ L3 recognize — Q&A points are recited without notes while project mechanisms are verified through causal-chain explanation against artifacts (never note-free recitation); code itself is never memorized, mechanisms are understood; file paths, error-code numbers, and API spelling are not memorized
- Mock interview: a 15-minute single-area drill or a 50-minute full run (self-intro → Q&A → coding → project deep-dive → reverse questions); during the session it asks one question at a time like a real interviewer with no hints or lectures, then scores every item 0-2 and delivers the top 3 issues and a patch list; missed points enter the error book and get retested first next time
- Spaced-repetition review: patched points, stuck points, and failed problems all go into one lean error book (5 columns: point / level / current rung / next review / recent record) on a 1 → 3 → 7 → 15-day schedule of active recall — 2 points levels up, 1 stays, 0 resets to tomorrow. Q&A due items are cleared before new material (≤8 points/day); points failed twice become "leeches" that get split smaller, re-channeled, or dropped as low-yield — project leeches use a channel toolbox (instrumented log tracing, change-one-line prediction, diagram, demoted hints) and are retested against artifacts the learner produced (sequence diagram / log output). The daily report carries an inventory level; two consecutive days of inflow > outflow trigger a next-day "hemostasis day" (no new material, digestion only), and over 12 🔴 items trigger a keep-or-drop audit. Q&A is spoken without notes, algorithms written closed-book, and projects explained as causal chains against artifacts — same book for all three
- Get started: PlanCoach mode — no lectures, just tiny actions, one at a time
- Progress continuity: remembers where you left off and picks up next session; when the environment offers persistent memory, the error book and plan status block are read/written automatically — otherwise it falls back to you pasting the saved tables back in
- Universal learning rule: before any hands-on action (writing code, changing a line, reading a new code section, reciting), state a prediction first, then verify against reality — a wrong prediction teaches far more than peeking at the answer
- One CLI, many targets: global and project-level installs for generic Agents, Trae, Cursor, Claude Code, and Codex

## Quick Start

```bash
npx learning-coach-skill install
```

After installation, open a new chat in the project root and enter:

```text
/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时
/learning-coach 背八股，下一题
/learning-coach 刷算法，下一题
/learning-coach 继续读 MiniVue，讲 parse.ts
/learning-coach 我不想学，帮我开始
```

## Install

The default target is the user-level generic Agent directory:

```text
~/.agents/skills/learning-coach-skill/
```

If you know which editor or Agent you use, specify it explicitly:

| Target | User-level command | Install location |
|--------|--------------------|------------------|
| Generic Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --codex` | `~/.agents/skills/learning-coach-skill/` |

Install every supported target:

```bash
npx learning-coach-skill install --all
```

Preview paths without writing files:

```bash
npx learning-coach-skill doctor
```

## Project-Level Install

To install the skill only for one application repository, run the command from that repository root:

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae
```

Supported project-level targets:

| Target | Project-level command | Install location |
|--------|-----------------------|------------------|
| Trae | `npx learning-coach-skill install --project --trae` | `.trae/rules/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --project --cursor` | `.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --project --claude-code` | `.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --project --codex` | `.agents/skills/learning-coach-skill/` |

Install every project-level target at once:

```bash
npx learning-coach-skill install --project --all
```

Restart the target IDE or Agent after installation.

## Usage Guide

The full journey in five steps — no prior Agent Skill experience required.

### Prerequisites

- Node.js >= 16 (only needed to run the installer CLI; the Skill itself is plain Markdown)
- An Agent or IDE that supports skills: Trae, Cursor, Claude Code, Codex, or any tool that loads skills from `~/.agents/skills/`

### Step 1 — Preview & Install

See exactly where files will land without writing anything:

```bash
npx learning-coach-skill doctor
npx learning-coach-skill doctor --trae
```

Then install to your product (pick one):

```bash
# Generic Agents / Codex (default)
npx learning-coach-skill install

# or pick a specific product
npx learning-coach-skill install --trae          # Trae
npx learning-coach-skill install --cursor        # Cursor
npx learning-coach-skill install --claude-code   # Claude Code
npx learning-coach-skill install --codex         # Codex

# one command for all global targets
npx learning-coach-skill install --all
```

Running from a business project root with `--project` limits the install to that project only:

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae
```

### Step 2 — Verify the Install

Confirm `SKILL.md` exists under the target directory, e.g.:

```bash
ls ~/.trae/skills/learning-coach-skill/SKILL.md
```

If the path does not exist, re-run `install` — the CLI does not auto-update existing copies.

### Step 3 — Start a New Session

Restart the target IDE / Agent so it picks up the new skill, then open a **new chat** in the project root. Skills are only loaded into conversations started after installation.

### Step 4 — Invoke the Skill

Use the slash command `/learning-coach` followed by your intent, or just describe what you want in natural language. The skill matches your request to one of seven modes:

| Mode | Trigger phrases | Loads | Example request |
|------|-----------------|-------|-----------------|
| 定计划 (Study plan) | "定计划" / "学习计划" / "面试倒计时" / "每天学什么" / "打卡" | `references/rules/计划规范.md` | `/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时` |
| 背八股 (Interview Q&A) | "背八股" / "复习八股" / "下一题" / "哪些要背" / "回炉" / "全忘了" | `references/rules/八股规范.md` ＋ `记忆优先级.md` | `/learning-coach 背八股，下一题` |
| 刷算法 (Algorithms) | "刷算法" / "复习算法" / "下一题" | `references/rules/算法规范.md` | `/learning-coach 刷算法，Hot100 下一题` |
| 读项目 (Source reading) | "读项目" / "继续读" / "讲 XXX 文件" / "要不要背代码" / "读不懂" / "带着我改" | `项目规范.md` ＋ `任务先行规范.md` ＋ `记忆优先级.md` (all project reading runs task-first; 项目规范 is the level index) | `/learning-coach 继续读 MiniVue，讲 reactivity.ts` |
| 模拟面试 (Mock interview) | "模拟面试" / "模拟一下" / "面我一轮" / "考前模拟" | `references/rules/模拟面试规范.md` ＋ `记忆优先级.md` | `/learning-coach 模拟面试，前端岗，用 MiniVue 全流程` |
| 复习错题 (Review) | "复习" / "过错题" / "错题本" / "抽查我" / "背诵打卡" / "止血日" | `references/rules/复习滚动机制.md` | `/learning-coach 复习，今天到期的抽我一遍` |
| 启动学习 (Kickstart) | "启动不了" / "不想学" / "帮我开始" | `references/rules/状态教练.md` | `/learning-coach 我不想学，帮我开始` |

### Input Parameters

All parameters are optional — you can simply say what you want:

| Parameter | Applies to | Effect |
|-----------|------------|--------|
| Interview date / countdown | 定计划 | Days until the interview (or an exact date); drives phase split and total-hour math |
| Daily available hours | 定计划 | Weekdays and weekends can differ; decides how many blocks per day |
| Level in the three areas | 定计划 | Rate interview Q&A, algorithms, projects as weak/mid/strong; decides time allocation |
| Topic / chapter | 背八股, 刷算法 | Narrows questions to one area, e.g. "背 Vue 双向绑定" |
| Progress notes | All modes | Tell it where you stopped; it remembers and reminds you next session |
| Question number | 刷算法 | Targets a specific problem, e.g. "讲 76. 最小覆盖子串" |
| File path | 读项目 | Targets a file or function, e.g. "讲 src/core/parse.ts" |
| Preferred language | 刷算法 | Request code in another language, e.g. "用 Go 写" |

### Output Formats

- **定计划** — countdown dashboard → level diagnosis and time allocation (weak 3 / mid 2 / strong 1 shares) → three-phase overview (foundation/intensive/sprint at 5:3:2) → today's task table sliced into 30-45 minute blocks (each with a verifiable output standard; blocks over 50 minutes are written as 25+5 pomodoros) → rest-of-week themes → milestones → adjustment rules. Daily you report "blocks done / where stuck / per-block load / fatigue": ≥90% keeps the schedule, 50-90% skips debt collection, <50% halves tomorrow (review block + one 🔴 block only); zeroes scored while saturated are not graded and move to next morning; right after check-in you get tomorrow's table and an updated status block. Written test ahead: timed handwritten algorithms + a daily MCQ block + one full timed mock; no/weak project: first repackage and actually read an existing one, or grind one small project you can explain deeply in 2-5 days — never fabricate experience.
- **背八股** — opens with a 🔴 must-recite list (2-4 L1 items), then the four sections: plain-language explanation → text flowchart → a ~350-word core answer you can recite → expected follow-ups. After you recite, your version is treated as canonical: the coach gives at most 5 patches (📌 insertion / 🔁 replacement, with location and reason) and never a full rewrite; you read the patches once and immediately re-tell it with materials closed.
- **刷算法** — opens with a 🔴 must-recite list (problem signals / template skeleton / complexity — frameworks are not memorized), then Code Caprice style: what the problem tests → core idea → standard template code → line-by-line breakdown → example walkthrough → pitfall table (🟡 boundary details — understand, don't memorize) → complexity → one-sentence takeaway. New problems: think 3-5 min for the pattern, then read the solution if stuck, understand it, and write it from memory for review; review sessions are closed-book dictation with no framework quiz.
- **读项目** — every block runs task-first: vocab cards → task brief (file+lines, what to do, what winning looks like) → prediction → hands-on verify → mechanism wrap-up; each block targets only 1-2 observable points, mechanisms are verified by explaining the causal chain against an artifact rather than recitation — fail one explanation and a new phenomenon is tried before anything enters the error book. Code only needs to be understood (🟡 L2); vocab cards are used on the spot and never filed.
- **启动学习** — PlanCoach mode: one tiny action at a time, no lectures, until you are in study state.
- **模拟面试** — three quick confirmations up front (role / project / full-run or single-area); one question at a time, a minimal hint only after ~10s of silence (logged as "with hint"), 1-2 follow-ups per question aimed only at missed 🔴 L1 points and "why". After the session: a score table (0/1/2 per item), the top 3 issues, a patch list (same patch protocol as Q&A mode), newly added error-book points, and next actions. Two mocks in the sprint phase: baseline + pre-interview retest.
- **复习错题** — every mode shares one lean error book (5 columns: point / level / current rung / next review / recent record): Q&A spoken without notes, projects explained as causal chains against artifacts, algorithms written closed-book, on the 1→3→7→15-day schedule with an instant 2/1/0 verdict (level up / stay / reset to tomorrow). Due items are cleared before new material (Q&A ≤8 points/15 min, algorithms ≤3 / 30 min, projects ≤3); a point failed twice becomes a leech — split smaller, re-channel (diagram/analogy), or drop it if low-yield; 20% of graduated points get a weekend spot check. The report carries an inventory level (stock / 🔴 count / today's in/out): two consecutive days of inflow > outflow trigger a next-day hemostasis day (no new material), and over 12 🔴 items trigger a keep-or-drop audit.

### How correction works for interview Q&A: patches, not re-memorization

After you recite, the coach never hands you a 90%-identical "model answer" to diff against — two near-identical wordings fight in your head (retroactive interference) and create a "seen it = know it" fluency illusion. Instead:

1. **Your recited version is canonical**; everything you got right stays untouched.
2. You get a patch table (≤ 5 items): 📌 insertion for missing points / 🔁 replacement for factual errors, each with location, the exact sentence, and why. No full text by default — ask "给我全文" if you want it.
3. Read the patches **once** → close the materials → immediately **re-tell out loud** using your version plus the patches (≤ 3 minutes). That single active-recall pass welds them into memory; no re-memorizing.

All later reviews are oral recall with materials closed — never read-along sessions.

### Common Use Cases

1. **Planning before an interview** — "14 days until the interview, 2 hours on weekdays, weak at Q&A and algorithms, mid at projects" → countdown dashboard + three-phase overview + today's block table; work through the blocks and check in at night.
2. **Daily interview prep** — "背八股，从 Vue 章节开始" → review the 🔴 must-recite list → recite → receive a patch list (no full rewrite) → re-tell once with the patches from memory → next question.
3. **Algorithm practice** — "刷算法，今天 5 道新题" → think briefly for the pattern, read the solution if stuck, understand it, then write it from memory → review of the dictation, pitfalls, and complexity.
4. **Reading a real codebase** — "继续读 MiniVue，讲 reactivity.ts" → vocab cards and a task brief (1-2 observable points only) → predict then verify hands-on → wrap up by explaining the causal chain against the observed phenomenon/logs → next block only after you pass.
5. **Beating procrastination** — "我不想学，帮我开始" → the coach hands you one tiny action at a time (put the phone away, sit up, open the notes…) until you are studying.
6. **Pre-interview mock** — "模拟面试，前端岗，用 MiniVue 全流程" → 50 minutes of self-intro + Q&A + coding + project deep-dive + reverse questions → score table and top 3 issues → patches received, missed points enter the error book and open the next mock.
7. **Daily error-book review** — "复习" → due points are drilled one by one without notes (algorithms written closed-book) → 2 levels up / 1 stays / 0 resets → session report plus the updated error-book table; only then do you start new material.

See [skill/learning-coach/references/examples/示例对话.md](skill/learning-coach/references/examples/示例对话.md) for full sample conversations covering all seven modes.

## Repository Structure

```text
learning-coach-skill/
├── skill/
│   └── learning-coach/
│       ├── SKILL.md
│       ├── references/
│       │   ├── rules/
│       │   │   ├── 八股规范.md
│       │   │   ├── 算法规范.md
│       │   │   ├── 项目规范.md
│       │   │   ├── 任务先行规范.md
│       │   │   ├── 计划规范.md
│       │   │   ├── 模拟面试规范.md
│       │   │   ├── 复习滚动机制.md
│       │   │   ├── 记忆优先级.md
│       │   │   └── 状态教练.md
│       │   ├── templates/
│       │   │   ├── 八股模板.md
│       │   │   ├── 算法模板.md
│       │   │   ├── 项目模板.md
│       │   │   ├── 计划模板.md
│       │   │   ├── 模拟面试模板.md
│       │   │   └── 复习模板.md
│       │   └── examples/
│       │       └── 示例对话.md
│       └── scripts/
├── bin/
│   └── learning-coach-skill.js
├── scripts/
│   └── check-refs.js        # npm test: validates Markdown cross-references (pure Node, not published)
├── package.json
├── README.md
├── README_EN.md
├── LICENSE
└── .gitignore
```

## Core Files

| File / Directory | Purpose |
|------|------|
| `skill/learning-coach/SKILL.md` | Skill entry: declares when to activate, which reference to load per request, output conventions across all scenarios, progress tracking and error-book review cadence |
| `skill/learning-coach/references/rules/` | Nine rule sets: interview-question four-part structure with patch-based oral correction plus the three-phase reforge, Code Caprice algorithm style (with L1/L2/L3 levels, the 4-new-problem quota, read-understand-dictate flow and the dictation-only review protocol), the task-first project spec plus its level index (diagnosis asked once and stored, four-layer reading-obstacle triage, 1-2 observable points per block, artifact-based causal-chain acceptance), interview-countdown study planning (four daily-table self-checks, four-field check-in with next-day load linkage, pomodoro/fatigue protection; incl. written-test and no-project edge cases), mock-interview flow with scoring and debrief, spaced-repetition error book (1/3/7/15-day, with the project-leech channel toolbox, artifact-based retest, inventory level and hemostasis rule), L1/L2/L3 memory priority (shared by Q&A, algorithms, source reading, and mocks), and PlanCoach kickstart — decide "how to teach / plan / examine / retain / what to memorize" |
| `skill/learning-coach/references/templates/` | Six output templates for interview questions (with 🔴 must-recite list and patch table), algorithms (with must-recite list), projects (task-first block: vocab cards / task brief / prediction / artifact wrap-up), study plans (with cross-day status block, half-load/hemostasis days, load/fatigue lines), mock interviews (opening / score table / debrief), and error-book review (lean 5-column table, intake / daily drill / report, inventory-level line, and a leech-channel action order) — decide "what it looks like" |

The Skill is portable on its own: copy `skill/learning-coach/` — `bin/` and `package.json` are not required. The CLI also builds installed targets from this directory only.

## FAQ

### Why does the default install target `.agents/skills`?

It is the least surprising user-level default and avoids guessing which product you use. Pass an explicit flag for Trae, Cursor, Claude Code, or Codex.

### Does `install` auto-detect products?

No. The behavior is intentionally narrow: the default installs only to `.agents/skills`, product-specific installs require `--trae`, `--cursor`, `--claude-code`, or `--codex`. `doctor` only prints paths and the current install state; it writes nothing.

### Do updates apply automatically?

No. Installed skill folders are copied artifacts. Re-run the install command:

```bash
npx learning-coach-skill install --trae
```

### How do I limit the skill to one project?

Run the command from that project root with `--project` plus a target flag, e.g. `npx learning-coach-skill install --project --trae`, and the skill lands in `./.trae/rules/learning-coach-skill/`.

## Troubleshooting

### `npx learning-coach-skill` says "command not found"

The package isn't published yet, or npm cannot fetch it. Options:

```bash
# once it's published to npm, install it as a global package
npm install -g learning-coach-skill

# if you cloned the repo, run the CLI directly
node bin/learning-coach-skill.js install --trae

# during local development, link the repo
cd learning-coach-skill && npm link && npx learning-coach-skill doctor
```

### EACCES permission errors when writing to the target directory

The CLI writes into directories under your home folder (e.g. `~/.trae/skills/...`). Fix ownership, then re-run:

```bash
sudo chown -R "$(whoami)" ~/.trae ~/.agents ~/.cursor ~/.claude 2>/dev/null
npx learning-coach-skill install --trae
```

### The skill does not respond after installation

1. Restart the IDE / Agent — new skills are only picked up at startup.
2. Start a **new** conversation; skills are not injected into chats that were already open.
3. Run `npx learning-coach-skill doctor --trae` and confirm the printed path matches what your IDE expects.
4. If you installed with `--project`, make sure you're chatting from that project root.

### Installed files are stale after an update

Installs are copies; nothing syncs automatically. Re-run the install command with the same flags to refresh. Directories managed by this tool (marked with `.installed-manifest.json`) are also pruned of files that existed in the old version but no longer exist in the new one; unmanaged directories are only merged into, never touched otherwise.

### What is the `scripts/` folder for

- `skill/learning-coach/scripts/` is a reserved slot shipped with the skill (currently empty); the CLI copies it as-is.
- The repo-root `scripts/check-refs.js` is a development self-check (not published): it verifies that every Markdown reference in SKILL.md, the rule files, and the READMEs points to a real file. After editing skill content, run:

```bash
npm test
```

Zero dependencies, pure Node, runs on Windows / macOS / Linux. A broken link fails with a non-zero exit code; rule/template files never referenced only produce a warning.

## Maintenance Notes (for anyone editing this Skill)

Rules are intentionally duplicated as quick-reference copies across files, so each mode works when only its own files are loaded. When changing a rule's wording, sync every copy below, or the same rule will have two answers. Single source of truth:

| Rule | Source of truth | Quick-reference copies (must be kept in sync) |
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
- Always wrap file references in backticks (e.g. `记忆优先级.md`) or use relative links; bare filenames are not checked.
- Adding a new mode requires six updates: a rule file, a template, sample dialogue entries, SKILL.md (triggers + dispatch table), both READMEs, plus an install smoke test (`doctor` + `install` into a temp directory).
- CLI-managed install directories carry `.installed-manifest.json`; re-installing prunes stale files from older versions per the manifest. Unmanaged directories are only merged into — user files are never deleted.

## License

Licensed under the **[MIT License](LICENSE)**. The file includes the English legal text plus an unofficial Chinese translation for convenience; if they disagree, the English section controls.