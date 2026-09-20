<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="https://github.com/GUOBA250/learning-coach-skill/blob/main/README_EN.md">English</a></p>
  <p><em>你的私人学习教练：背八股、刷算法、读项目源码、启动学习，一条龙陪练。</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

一个专门用来学八股、刷算法、读项目的 AI 助教 Skill。不限定方向，前端、后端、全栈都适用；也不只是"讲题"，还会在你拖延的时候用 PlanCoach 模式把你一步步拉进学习状态。

## 核心能力

- 背八股：四段式讲解（通俗讲解 + 文字流程图 + 75-80 分核心答案 + 追问），口述之后逐条校正
- 刷算法：卡哥风格讲解，先讲"为什么用这个方法"再讲"怎么做"，强调框架、易错点和复杂度
- 读项目源码：先列「函数地图」，再从底往上逐行讲解，每块结尾配复习题和自查清单
- 启动学习：PlanCoach 模式，不讲大道理，给极小动作，完成一步再给下一步
- 进度连贯：记住你的学习进度，下次对话接着提醒
- 全平台安装：一条 CLI 支持通用 Agent、Trae、Cursor、Claude Code、Codex 的全局与项目级安装

## 快速开始

```bash
npx learning-coach-skill install
```

安装完成后，在项目根目录开启新对话，输入：

```text
/learning-coach 背八股，下一题
/learning-coach 刷算法，下一题
/learning-coach 继续读 MiniVue，讲 parse.ts
/learning-coach 我不想学，帮我开始
```

## 安装方式

默认安装到用户级通用 Agent 目录：

```text
~/.agents/skills/learning-coach-skill/
```

如果你明确使用某个编辑器或 Agent，建议显式指定产品：

| 目标 | 用户级安装 | 安装位置 |
|------|------------|----------|
| 通用 Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --codex` | `~/.agents/skills/learning-coach-skill/` |

也可以一次安装到全部支持目标：

```bash
npx learning-coach-skill install --all
```

只查看会安装到哪里，不写入文件：

```bash
npx learning-coach-skill doctor
```

## 项目级安装

如果你只想让某个业务项目使用这个 skill，进入业务项目根目录后执行：

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae
```

支持的项目级目标：

| 目标 | 项目级安装 | 安装位置 |
|------|------------|----------|
| Trae | `npx learning-coach-skill install --project --trae` | `.trae/rules/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --project --cursor` | `.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --project --claude-code` | `.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --project --codex` | `.agents/skills/learning-coach-skill/` |

一键安装到全部项目级目标：

```bash
npx learning-coach-skill install --project --all
```

安装完成后，重启对应 IDE / Agent，开启新对话。

## 目录结构

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
│       │   │   └── 状态教练.md
│       │   ├── templates/
│       │   │   ├── 八股模板.md
│       │   │   ├── 算法模板.md
│       │   │   └── 项目模板.md
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

## 核心文件说明

| 文件 / 目录 | 作用 |
|------|------|
| `skill/learning-coach/SKILL.md` | Skill 入口：声明何时使用、按用户请求加载对应 reference、所有场景通用的输出约定、进度记录与复习建议 |
| `skill/learning-coach/references/rules/` | 四份规范：八股四段式、算法卡哥风格、项目逐行讲解、PlanCoach 启动学习，决定"怎么讲" |
| `skill/learning-coach/references/templates/` | 三类输出模板：八股、算法、项目的完整输出格式，决定"长什么样" |

Skill 可独立迁移：复制 `skill/learning-coach/` 目录即可，不需要 `bin/`、`package.json`。CLI 安装时也只从这个目录生成目标 Skill。

## 常见问题

### 为什么默认安装到 `.agents/skills`？

这是最稳的用户级默认值，不依赖猜测用户正在使用哪个产品。如果你明确使用 Trae、Cursor、Claude Code 或 Codex，使用对应参数即可。

### `install` 会自动探测产品吗？

不会。当前设计刻意收敛：默认只装到通用 `.agents/skills`，分产品安装必须显式指定 `--trae`、`--cursor`、`--claude-code` 或 `--codex`。`doctor` 只展示路径，不安装。

### 更新后会自动生效吗？

不会。已安装目录是拷贝产物，需要重新执行安装命令：

```bash
npx learning-coach-skill install --trae
```

### 只想装到某个业务项目怎么办？

进入该业务项目根目录，执行 `--project` 加目标参数即可，例如 `npx learning-coach-skill install --project --trae`，Skill 会被安装到 `./.trae/rules/learning-coach-skill/`。

## License

本项目采用 **MIT License**，完整条款见 **[LICENSE](LICENSE)**。