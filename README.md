<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="https://github.com/GUOBA250/learning-coach-skill/blob/main/README_EN.md">English</a></p>
  <p><em>你的私人学习教练：定计划、背八股、刷算法、读项目源码、模拟面试、错题滚动复习、启动学习，一条龙陪练。</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

一个专门用来学八股、刷算法、读项目的 AI 助教 Skill。不限定方向，前端、后端、全栈都适用；也不只是"讲题"——面试前还能根据倒计时、每日可学时长和三围基础给你定制每日学习计划，在你拖延的时候用 PlanCoach 模式把你一步步拉进学习状态。

## 核心能力

- 定计划：输入面试倒计时、每日可学时长、八股/算法/项目三围基础，输出三阶段总览 + 精确到块的今日任务表 + 里程碑；每天打卡按完成率动态调整（<50% 自动减半、欠债不滚利、输出跨天状态块），有笔试和没项目/项目水两种边界都有专门排法
- 背八股：四段式讲解（通俗讲解 + 文字流程图 + 75-80 分核心答案 + 追问），开头先给「🔴 必背清单」；口述后只给补丁清单（位置＋补丁＋为什么），你的原版不动、不给全文重写
- 刷算法：卡哥风格讲解，先讲"为什么用这个方法"再讲"怎么做"，强调框架、易错点和复杂度；题型信号/思路框架/模板骨架/复杂度是 🔴 必背（闭卷默写），边界细节和变种是 🟡 看懂能改即可
- 读项目源码：先列带级别的「函数地图」，再从底往上逐行讲解，每块给 🔴 L1 必背清单和复习题
- 分级记忆：按 🔴 L1 背（脱稿说）/ 🟡 L2 懂（看代码讲思路）/ ⚪ L3 认（眼熟即可）给知识分级——代码不用背、机制要背；文件路径、错误码数字、API 拼写不要求记，有条理地背而不是全背
- 模拟面试：15 分钟单科加练或 50 分钟全流程彩排（自我介绍→八股→算法→项目深挖→反问），面试中按真实节奏一次一题、不提示不讲课，结束后按环节 0-2 分评分、给 3 个核心问题和补丁清单，丢分点进错题本下次先抽
- 错题滚动复习：补丁点/卡壳点/写错的题统一进错题本，按 1→3→7→15 天间隔主动回忆，2 分升档、1 分留档、0 分打回明天；八股每天学新前先清到期（≤8 点），钉子题两次记不住就拆小/换通道/判放弃；算法闭卷重写、项目脱稿讲机制，共用一本
- 启动学习：PlanCoach 模式，不讲大道理，给极小动作，完成一步再给下一步
- 进度连贯：记住你的学习进度，下次对话接着提醒
- 全平台安装：一条 CLI 支持通用 Agent、Trae、Cursor、Claude Code、Codex 的全局与项目级安装

## 快速开始

```bash
npx learning-coach-skill install
```

安装完成后，在项目根目录开启新对话，输入：

```text
/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时
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

## 使用指南

五步走完整个流程，零 skill 使用经验也能上手。

### 前提条件

- Node.js >= 16（仅安装 CLI 需要；Skill 本体是纯 Markdown）
- 支持 skill 的 IDE / Agent：Trae、Cursor、Claude Code、Codex，或任何从 `~/.agents/skills/` 加载技能的工具

### 第 1 步：预览并安装

先用 doctor 看看文件会落到哪里（不写任何文件）：

```bash
npx learning-coach-skill doctor
npx learning-coach-skill doctor --trae
```

再选择目标安装（任选其一）：

```bash
# 通用 Agent / Codex（默认）
npx learning-coach-skill install

# 或明确指定产品
npx learning-coach-skill install --trae          # Trae
npx learning-coach-skill install --cursor        # Cursor
npx learning-coach-skill install --claude-code   # Claude Code
npx learning-coach-skill install --codex         # Codex

# 一条命令装到全部全局目标
npx learning-coach-skill install --all
```

只想让某个业务项目使用，进入该项目根目录加 `--project`：

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae
```

### 第 2 步：验证安装

确认目标目录下存在 `SKILL.md`，例如：

```bash
ls ~/.trae/skills/learning-coach-skill/SKILL.md
```

路径不存在就重新执行 `install`——CLI 不会自动刷新已有拷贝。

### 第 3 步：开启新会话

重启对应的 IDE / Agent 让它加载新 skill，然后在项目根目录开一个**新对话**。skill 只会注入到安装之后新建的对话里。

### 第 4 步：调用 skill

用斜杠命令 `/learning-coach` 加意图，或者直接用自然语言描述需求。skill 会把请求匹配到七种模式之一：

| 模式 | 触发词 | 加载文件 | 示例请求 |
|------|--------|----------|----------|
| 定计划 | "定计划" / "学习计划" / "面试倒计时" / "每天学什么" | `references/rules/计划规范.md` | `/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时` |
| 背八股 | "背八股" / "复习八股" / "下一题" / "哪些要背" | `references/rules/八股规范.md` ＋ `记忆优先级.md` | `/learning-coach 背八股，下一题` |
| 刷算法 | "刷算法" / "复习算法" / "下一题" | `references/rules/算法规范.md` | `/learning-coach 刷算法，Hot100 下一题` |
| 读项目 | "读项目" / "继续读" / "讲 XXX 文件" / "代码要不要背" | `references/rules/项目规范.md` ＋ `记忆优先级.md` | `/learning-coach 继续读 MiniVue，讲 parse.ts` |
| 模拟面试 | "模拟面试" / "模拟一下" / "面我一轮" / "考前模拟" | `references/rules/模拟面试规范.md` ＋ `记忆优先级.md` | `/learning-coach 模拟面试，前端岗，用 MiniVue 全流程` |
| 复习错题 | "复习" / "过错题" / "错题本" / "抽查我" / "背诵打卡" | `references/rules/复习滚动机制.md` | `/learning-coach 复习，今天到期的抽我一遍` |
| 启动学习 | "启动不了" / "不想学" / "帮我开始" | `references/rules/状态教练.md` | `/learning-coach 我不想学，帮我开始` |

### 可选输入参数

所有参数都可选，直接说需求就行：

| 参数 | 适用模式 | 作用 |
|------|----------|------|
| 面试日期 / 倒计时 | 定计划 | 距面试还有几天，或具体日期，用于切阶段、算总账 |
| 每日可学时长 | 定计划 | 工作日/周末可分开给，决定每天排几个学习块 |
| 三围基础 | 定计划 | 八股、算法、项目各自评弱/中/强，决定时间配比 |
| 主题 / 章节 | 背八股、刷算法 | 缩小范围，如"背 Vue 双向绑定" |
| 进度信息 | 全部模式 | 告诉它上次学到哪，下次对话会提醒 |
| 题号 | 刷算法 | 指定题目，如"讲 76. 最小覆盖子串" |
| 文件路径 | 读项目 | 指定文件或函数，如"讲 src/core/parse.ts" |
| 语言偏好 | 刷算法 | 指定代码语言，如"用 Go 写" |

### 输出格式

- **定计划** — 倒计时看板 → 三围诊断与时间配比（弱 3 份/中 2 份/强 1 份）→ 三阶段总览（打底/强化/冲刺 5:3:2）→ 精确到 30-45 分钟块的今日任务表（每块带可验收的产出标准）→ 本周安排 → 里程碑 → 调整规则。每天回报"完成几块、卡在哪"：≥90% 正常排、50-90% 不补债、<50% 次日减半（只保复习块 + 一个 🔴 块），打卡后直接给明天任务表和跨天状态块。有笔试：算法限时手写 + 每日选择题块 + 考前限时套卷；没项目/项目水：先把现有项目读懂包装，或 2-5 天突击一个能讲透的迷你项目，不编经历。
- **背八股** — 开头先给「🔴 必背清单」（2-4 条 L1），再走四段式：通俗讲解 → 文字流程图 → 约 350 字可直接背诵的核心答案 → 面试官追问。你口述后，教练把你的版本当正式版，只给不超过 5 条补丁（📌 漏点补充 / 🔁 错句替换，标明位置和原因），不给全文重写；你读一遍补丁立刻脱稿再讲一次完成加固。
- **刷算法** — 先给「🔴 必背清单」（题型信号/框架/模板骨架/复杂度），再走卡哥风格：考什么 → 核心思路 → 标准模板代码 → 逐行拆解 → 例子跑一遍 → 易错点表（🟡 边界细节，看懂能改即可）→ 复杂度 → 一句话总结。你先自己写代码，教练只批改不直接给答案。
- **读项目** — 先出带 🔴/🟡/⚪ 级别的「函数地图」，再从底往上逐行讲解；每块给「本节 🔴 L1 清单」和复习题（只考 L1/L2），代码看懂即可、机制要求脱稿讲。
- **启动学习** — PlanCoach 模式：一次只给一个极小动作，不讲大道理，直到你进入学习状态。
- **模拟面试** — 开面三句话确认岗位/项目/全流程还是单科；面试中一次一题、卡住 10 秒才给一次最小提示（记"经提示"）、每题追问 1-2 轮只追漏的 🔴 L1 和"为什么"；结束后给评分表（每题 0/1/2 分）、最大的 3 个问题、补丁清单（复用八股补丁协议）、新入错题本的点和下一步动作。冲刺期安排 2 次：摸底 + 考前复测。
- **复习错题** — 所有模式的丢分点共用一本错题本：八股/项目脱稿口述、算法闭卷重写，按 1→3→7→15 天间隔滚动，当场报 2/1/0 分并调度（升档/留档/打回明天）。每天学新前先清到期点（八股 ≤8 个/15 分钟，算法 ≤3 道，项目 ≤3 个）；同一点 2 次 0 分变钉子题，拆小、换通道（画图/类比）或判定低频放弃；周末抽 20% 出库题回测。

### 背八股怎么校正：打补丁，不重背

口述之后，教练**不会**甩一篇 90% 相似的"标准答案"让你逐句找差异——新旧两套措辞会在脑子里打架（倒摄干扰），还会产生"看过 = 会了"的错觉。流程是：

1. **你的口述版就是正式版**，说对的部分一个字不动。
2. 只给一张补丁表（一次 ≤ 5 条）：📌 漏点补充 / 🔁 事实错句替换，每条标明「拧在哪、补什么、为什么」；默认不给全文，需要时说"给我全文"。
3. 你把补丁**只读一遍** → 合上材料，用自己的版本加补丁**立刻脱稿再讲一次**（≤ 3 分钟）。这一遍主动回忆就把补丁焊进已有记忆，不需要重背。

之后的复习检测一律脱稿口述，不安排看着稿子读。

### 常见用例

1. **面试前定计划** — "14 天后面试，工作日每天 2 小时，八股弱算法弱项目中" → 倒计时看板 + 三阶段总览 + 今天的任务表，照着一块块做，晚上回来打卡。
2. **每日背八股** — "背八股，从 Vue 章节开始" → 先看 🔴 必背清单 → 口述 → 收补丁清单（不给全文）→ 加补丁脱稿再讲一遍 → 下一题。
3. **算法日常刷题** — "刷算法，今天 5 道新题" → 你先写代码 → 批改 bug、逻辑、风格 → 修正版 + 易错点 + 复杂度。
4. **读真实项目源码** — "继续读 MiniVue，讲 reactivity.ts" → 带级别的函数地图 → 逐行讲解（代码 L2 看懂、机制 L1 脱稿）→ L1 清单 + 复习题 → 你确认后才进下一块。
5. **拖延启动** — "我不想学，帮我开始" → 一次一个极小动作（放下手机、坐起来、打开笔记……），直到进入学习状态。
6. **考前模拟** — "模拟面试，前端岗，用 MiniVue 全流程" → 自我介绍+八股+算法+项目+反问走 50 分钟 → 评分表和 3 个核心问题 → 收补丁、丢分点进错题本，下次模拟先抽。
7. **每日过错题** — "复习" → 今天到期的点逐个脱稿抽背（算法闭卷写）→ 2 分升档/1 分留档/0 分打回 → 战报 + 更新后的错题本表，清完再开新内容。

七种模式的完整示例对话见 [skill/learning-coach/references/examples/示例对话.md](skill/learning-coach/references/examples/示例对话.md)。

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
│   └── check-refs.js        # npm test：校验 Markdown 交叉引用（纯 Node，不随包发布）
├── package.json
├── README.md
├── README_EN.md
├── LICENSE
└── .gitignore
```

## 核心文件说明

| 文件 / 目录 | 作用 |
|------|------|
| `skill/learning-coach/SKILL.md` | Skill 入口：声明何时使用、按用户请求加载对应 reference、所有场景通用的输出约定、进度记录与错题本复习节奏 |
| `skill/learning-coach/references/rules/` | 八份规范：八股四段式与补丁式口述校正、算法卡哥风格（含 L1/L2/L3 分级）、项目逐行讲解、面试倒计时定计划（含笔试/项目弱边界）、模拟面试流程与评分复盘、错题本 1/3/7/15 天滚动复习、L1/L2/L3 记忆优先级（八股、算法、项目、模拟面试共用）、PlanCoach 启动学习，决定"怎么讲/怎么排/怎么考/怎么不忘/背什么" |
| `skill/learning-coach/references/templates/` | 六类输出模板：八股（含 🔴 必背清单与补丁式校正表）、算法（含必背清单）、项目（含级别函数地图和 L1 清单）、学习计划（含跨天状态块与减半日表）、模拟面试（开场/评分表/复盘）、错题本复习（入库/每日抽背/战报表）的完整输出格式，决定"长什么样" |

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

## 故障排查

### `npx learning-coach-skill` 提示 command not found

包还没发布，或 npm 拉取不到。可选方案：

```bash
# 包发布到 npm 后，可全局安装
npm install -g learning-coach-skill

# clone 了仓库的话，直接跑 CLI
node bin/learning-coach-skill.js install --trae

# 本地开发时，用 npm link 调试
cd learning-coach-skill && npm link && npx learning-coach-skill doctor
```

### 写入目标目录时报 EACCES 权限错误

CLI 会写入用户主目录下的路径（如 `~/.trae/skills/...`）。先修正属主再重跑：

```bash
sudo chown -R "$(whoami)" ~/.trae ~/.agents ~/.cursor ~/.claude 2>/dev/null
npx learning-coach-skill install --trae
```

### 安装后 skill 没反应

1. 重启 IDE / Agent——新的 skill 只在启动时加载。
2. 开一个**新**对话：已经开着的对话不会注入新 skill。
3. 跑 `npx learning-coach-skill doctor --trae`，确认打印的路径与你的 IDE 期望一致。
4. 用了 `--project` 安装的话，确认你在该项目根目录下的对话里使用。

### 更新后已安装的文件还是旧的

安装产物是纯拷贝，不会自动同步。用相同的参数重新执行 install 即可刷新。

### `scripts/` 目录是干什么的

- `skill/learning-coach/scripts/` 是随 skill 一起安装的预留目录（当前为空），CLI 会原样复制。
- 仓库根的 `scripts/check-refs.js` 是开发自检工具（不随包发布）：校验 SKILL.md、各规范、README 里所有 Markdown 引用指向真实文件。改完 skill 内容后跑：

```bash
npm test
```

零依赖、纯 Node 实现，Windows / macOS / Linux 都可运行；发现断链会以非零退出码失败，未被引用的规则/模板只给警告。

## License

本项目采用 **MIT License**，完整条款见 **[LICENSE](LICENSE)**。