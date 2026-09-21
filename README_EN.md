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

An AI study coach that helps you memorize interview questions, grind algorithms, and read project source code. Works for frontend, backend, and full-stack learning alike. Before an interview it builds a personalized daily study plan from your countdown, available daily hours, and self-rated level across the three areas; and when you procrastinate, it switches to PlanCoach mode and pulls you into study state step by step.

## Core Capabilities

- Study plan: given the interview countdown, daily available hours, and your level in interview Q&A / algorithms / projects, it produces a three-phase overview, a today-task table sliced into time blocks, and milestones — then adjusts daily based on your check-ins
- Interview questions: four-part explanations (plain-language walkthrough + text flowchart + 75-80 point core answer + follow-ups), with line-by-line correction after you restate it
- Algorithms: Code Caprice style — "why this method" first, then "how", emphasizing frameworks, common pitfalls, and complexity
- Source reading: function map up front, bottom-up line-by-line walkthrough, review questions and self-check list per block
- Get started: PlanCoach mode — no lectures, just tiny actions, one at a time
- Progress continuity: remembers where you left off and picks up next session
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

Use the slash command `/learning-coach` followed by your intent, or just describe what you want in natural language. The skill matches your request to one of five modes:

| Mode | Trigger phrases | Loads | Example request |
|------|-----------------|-------|-----------------|
| 定计划 (Study plan) | "定计划" / "学习计划" / "面试倒计时" / "每天学什么" | `references/rules/计划规范.md` | `/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时` |
| 背八股 (Interview Q&A) | "背八股" / "复习八股" / "下一题" | `references/rules/八股规范.md` | `/learning-coach 背八股，下一题` |
| 刷算法 (Algorithms) | "刷算法" / "复习算法" / "下一题" | `references/rules/算法规范.md` | `/learning-coach 刷算法，Hot100 下一题` |
| 读项目 (Source reading) | "读项目" / "继续读" / "讲 XXX 文件" | `references/rules/项目规范.md` | `/learning-coach 继续读 MiniVue，讲 parse.ts` |
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

- **定计划** — countdown dashboard → level diagnosis and time allocation (weak 3 / mid 2 / strong 1 shares) → three-phase overview (foundation/intensive/sprint at 5:3:2) → today's task table sliced into 30-45 minute blocks (each with a verifiable output standard) → rest-of-week themes → milestones → adjustment rules. Check in daily and the plan adapts to what you actually completed.
- **背八股** — four sections: plain-language explanation → text flowchart → a ~350-word core answer you can recite → expected follow-up questions with spoken answers. Afterwards, you restate it in your own words and the coach corrects you line by line.
- **刷算法** — Code Caprice style: what the problem tests → core idea → standard template code → line-by-line breakdown → example walkthrough → pitfall table → complexity → one-sentence takeaway. You write your own code first; the coach reviews it instead of giving away the answer.
- **读项目** — a function map table first, then a bottom-up line-by-line walkthrough. Each block ends with ~8 review questions (question + answer) and a self-check checklist.
- **启动学习** — PlanCoach mode: one tiny action at a time, no lectures, until you are in study state.

### Common Use Cases

1. **Planning before an interview** — "14 days until the interview, 2 hours on weekdays, weak at Q&A and algorithms, mid at projects" → countdown dashboard + three-phase overview + today's block table; work through the blocks and check in at night.
2. **Daily interview prep** — "背八股，从 Vue 章节开始" → recital → line-by-line correction → next question.
3. **Algorithm practice** — "刷算法，今天 5 道新题" → you write code → review of bugs, logic, style → corrected version plus pitfalls and complexity.
4. **Reading a real codebase** — "继续读 MiniVue，讲 reactivity.ts" → function map → line-by-line teaching → review questions → move on only after you confirm.
5. **Beating procrastination** — "我不想学，帮我开始" → the coach hands you one tiny action at a time (put the phone away, sit up, open the notes…) until you are studying.

See [skill/learning-coach/references/examples/示例对话.md](skill/learning-coach/references/examples/示例对话.md) for full sample conversations covering all five modes.

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
│       │   │   ├── 计划规范.md
│       │   │   └── 状态教练.md
│       │   ├── templates/
│       │   │   ├── 八股模板.md
│       │   │   ├── 算法模板.md
│       │   │   ├── 项目模板.md
│       │   │   └── 计划模板.md
│       │   └── examples/
│       │       └── 示例对话.md
│       └── scripts/
├── bin/
│   └── learning-coach-skill.js
├── package.json
├── README.md
├── README_EN.md
├── LICENSE
└── .gitignore
```

## Core Files

| File / Directory | Purpose |
|------|------|
| `skill/learning-coach/SKILL.md` | Skill entry: declares when to activate, which reference to load per request, output conventions across all scenarios, progress tracking and review advice |
| `skill/learning-coach/references/rules/` | Five rule sets: interview-question four-part structure, Code Caprice algorithm style, line-by-line source reading, interview-countdown study planning, and PlanCoach kickstart — decide "how to teach / how to plan" |
| `skill/learning-coach/references/templates/` | Four output templates for interview questions, algorithms, source files, and study plans — decide "what it looks like" |

The Skill is portable on its own: copy `skill/learning-coach/` — `bin/` and `package.json` are not required. The CLI also builds installed targets from this directory only.

## FAQ

### Why does the default install target `.agents/skills`?

It is the least surprising user-level default and avoids guessing which product you use. Pass an explicit flag for Trae, Cursor, Claude Code, or Codex.

### Does `install` auto-detect products?

No. The behavior is intentionally narrow: the default installs only to `.agents/skills`, product-specific installs require `--trae`, `--cursor`, `--claude-code`, or `--codex`. `doctor` only prints paths.

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

Installs are plain copies; nothing syncs automatically. Re-run the install command with the same flags to refresh.

### The `scripts/` folder is empty

`scripts/` is a reserved slot for future helper scripts. Nothing needs to be configured there; the CLI copies it as-is.

## License

Licensed under the **[MIT License](LICENSE)**. The file includes the English legal text plus an unofficial Chinese translation for convenience; if they disagree, the English section controls.