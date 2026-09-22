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

- 定计划：输入面试倒计时、每日可学时长、八股/算法/项目三围基础，输出三阶段总览 + 精确到块的今日任务表 + 里程碑；每天打卡收四件事（完成块数/卡点/块负荷 🔵🟢🟠/疲劳度），按完成率动态调整（<50% 自动减半、欠债不滚利、输出跨天状态块），并在打卡后收集实际耗时，差异超 25% 时按题型系数校准后续排期（实际不到预估 60% 单日即预警，可关闭、可手动否决），超 50 分钟的块按 25+5 番茄钟切开、饱和时不评级，每周还附一次"懂了的瞬间"教学法复盘；有笔试和没项目/项目水两种边界都有专门排法
- 背八股：四段式讲解（通俗讲解 + 文字流程图 + 75-80 分核心答案 + 追问），开头先给「🔴 必背清单」；口述后只给补丁清单（位置＋补丁＋为什么），你的原版不动、不给全文重写；遇到"完全没印象、连续不会"的点先走回炉三段式（回炉重学→热测→隔天冷枪）再入库，不做无效重测
- 刷算法：卡哥风格讲解，先讲"为什么用这个方法"再讲"怎么做"，强调框架、易错点和复杂度；题型信号/思路框架/模板骨架/复杂度是 🔴 必背（闭卷默写），边界细节和变种是 🟡 看懂能改即可；配额按状态弹性浮动（默认 1 新 + 1 复习、熟题 15 分钟/道、hard 日新题 1 道封顶、超时顺延不占别的块）
- 读项目源码：先问诊学习风格分两轨——听讲型走带级别的「函数地图」从底往上逐行讲解；构造型走任务先行（词汇卡→任务书→先预测→动手验证→机制收口→词汇归档），读码卡住按四层障碍分诊（语法/跨文件数据流/静态演动态/框架词汇）对症开通道，每块同样给 🔴 L1 必背清单和复习题
- 分级记忆：按 🔴 L1 背（脱稿说）/ 🟡 L2 懂（看代码讲思路）/ ⚪ L3 认（眼熟即可）给知识分级——代码不用背、机制要背；文件路径、错误码数字、API 拼写不要求记，有条理地背而不是全背
- 模拟面试：15 分钟单科加练或 50 分钟全流程彩排（自我介绍→八股→算法→项目深挖→反问），面试中按真实节奏一次一题、不提示不讲课，结束后按环节 0-2 分评分、给 3 个核心问题和补丁清单，丢分点进错题本下次先抽
- 错题滚动复习：补丁点/卡壳点/写错的题统一进错题本，按 1→3→7→15 天间隔主动回忆，2 分升档、1 分留档、0 分打回明天；八股每天学新前先清到期（≤8 点），钉子题两次记不住就拆小/换通道/判放弃（项目钉子走埋点追时序等通道工具箱，对着自己产出的时序图/log 物证复测）；战报带库存水位，连续 2 天入>出次日止血停学新、🔴 超 12 个做判生死盘点；算法闭卷重写、项目脱稿讲机制，共用一本
- 启动学习：PlanCoach 模式，不讲大道理，给极小动作，完成一步再给下一步
- 进度连贯：记住你的学习进度，下次对话接着提醒；环境支持持久化记忆（memory）时自动带出错题本表、计划状态、校准系数和个人词汇表，不支持则回退为手动带表
- 通用学习原则：所有动手环节（写代码/改一行/读新代码段/口述）先口头预测再验证对账，预测错比直接看答案更涨记性
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
| 定计划 | "定计划" / "学习计划" / "面试倒计时" / "每天学什么" / "打卡" | `references/rules/计划规范.md` | `/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时` |
| 背八股 | "背八股" / "复习八股" / "下一题" / "哪些要背" / "回炉" / "全忘了" | `references/rules/八股规范.md` ＋ `记忆优先级.md` | `/learning-coach 背八股，下一题` |
| 刷算法 | "刷算法" / "复习算法" / "下一题" | `references/rules/算法规范.md` | `/learning-coach 刷算法，Hot100 下一题` |
| 读项目 | "读项目" / "继续读" / "讲 XXX 文件" / "代码要不要背" / "读不懂" / "带着我改" | `references/rules/项目规范.md` ＋ `记忆优先级.md`（构造型/读码卡住时加 `任务先行规范.md`） | `/learning-coach 继续读 MiniVue，讲 parse.ts` |
| 模拟面试 | "模拟面试" / "模拟一下" / "面我一轮" / "考前模拟" | `references/rules/模拟面试规范.md` ＋ `记忆优先级.md` | `/learning-coach 模拟面试，前端岗，用 MiniVue 全流程` |
| 复习错题 | "复习" / "过错题" / "错题本" / "抽查我" / "背诵打卡" / "止血日" | `references/rules/复习滚动机制.md` | `/learning-coach 复习，今天到期的抽我一遍` |
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

- **定计划** — 倒计时看板 → 三围诊断与时间配比（弱 3 份/中 2 份/强 1 份）→ 三阶段总览（打底/强化/冲刺 5:3:2）→ 精确到 30-45 分钟块的今日任务表（每块带可验收的产出标准，超 50 分钟的块按 25+5 切开）→ 本周安排 → 里程碑 → 调整规则。每天回报"完成几块、卡在哪、块负荷、疲劳度"：≥90% 正常排、50-90% 不补债、<50% 次日减半（只保复习块 + 一个 🔴 块），疲劳饱和时的 0 分不评级、移次日早晨；打卡后直接给明天任务表和跨天状态块。有笔试：算法限时手写 + 每日选择题块 + 考前限时套卷；没项目/项目水：先把现有项目读懂包装，或 2-5 天突击一个能讲透的迷你项目，不编经历。
- **背八股** — 开头先给「🔴 必背清单」（2-4 条 L1），再走四段式：通俗讲解 → 文字流程图 → 约 350 字可直接背诵的核心答案 → 面试官追问。你口述后，教练把你的版本当正式版，只给不超过 5 条补丁（📌 漏点补充 / 🔁 错句替换，标明位置和原因），不给全文重写；你读一遍补丁立刻脱稿再讲一次完成加固。
- **刷算法** — 先给「🔴 必背清单」（题型信号/框架/模板骨架/复杂度），再走卡哥风格：考什么 → 核心思路 → 标准模板代码 → 逐行拆解 → 例子跑一遍 → 易错点表（🟡 边界细节，看懂能改即可）→ 复杂度 → 一句话总结。你先自己写代码，教练只批改不直接给答案。
- **读项目** — 先出带 🔴/🟡/⚪ 级别的「函数地图」，再从底往上逐行讲解；每块给「本节 🔴 L1 清单」和复习题（只考 L1/L2），代码看懂即可、机制要求脱稿讲。
- **启动学习** — PlanCoach 模式：一次只给一个极小动作，不讲大道理，直到你进入学习状态。
- **模拟面试** — 开面三句话确认岗位/项目/全流程还是单科；面试中一次一题、卡住 10 秒才给一次最小提示（记"经提示"）、每题追问 1-2 轮只追漏的 🔴 L1 和"为什么"；结束后给评分表（每题 0/1/2 分）、最大的 3 个问题、补丁清单（复用八股补丁协议）、新入错题本的点和下一步动作。冲刺期安排 2 次：摸底 + 考前复测。
- **复习错题** — 所有模式的丢分点共用一本错题本：八股/项目脱稿口述、算法闭卷重写，按 1→3→7→15 天间隔滚动，当场报 2/1/0 分并调度（升档/留档/打回明天）。每天学新前先清到期点（八股 ≤8 个/15 分钟，算法 ≤3 道，项目 ≤3 个）；同一点 2 次 0 分变钉子题，拆小、换通道（画图/类比）或判定低频放弃；周末抽 20% 出库题回测。战报带库存水位（库存/🔴 数/今日入出），连续 2 天入>出触发次日止血日（停学新只消化），🔴 超 12 安排判生死盘点。

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
| `skill/learning-coach/references/rules/` | 九份规范：八股四段式、补丁式口述校正与回炉三段式、算法卡哥风格（含 L1/L2/L3 分级与弹性配额）、项目听讲型逐行讲解与构造型「任务先行」（学习风格问诊、读码障碍四层分诊、词汇表）、面试倒计时定计划（打卡四件事、耗时校准与 60% 预警、番茄钟/疲劳保护、每周教学法一问，含笔试/项目弱边界）、模拟面试流程与评分复盘、错题本 1/3/7/15 天滚动复习（含项目钉子通道工具箱、物证复测与库存水位止血）、L1/L2/L3 记忆优先级（八股、算法、项目、模拟面试共用）、PlanCoach 启动学习，决定"怎么讲/怎么排/怎么考/怎么不忘/背什么" |
| `skill/learning-coach/references/templates/` | 六类输出模板：八股（含 🔴 必背清单与补丁式校正表）、算法（含必背清单）、项目（含级别函数地图和 L1 清单）、学习计划（含跨天状态块、减半/止血日、耗时反馈块、负荷疲劳行与准确性报告）、模拟面试（开场/评分表/复盘）、错题本复习（入库/每日抽背/战报表，含回炉日/提取次数列、库存水位行与钉子通道执行单）的完整输出格式，决定"长什么样" |

Skill 可独立迁移：复制 `skill/learning-coach/` 目录即可，不需要 `bin/`、`package.json`。CLI 安装时也只从这个目录生成目标 Skill。

## 常见问题

### 为什么默认安装到 `.agents/skills`？

这是最稳的用户级默认值，不依赖猜测用户正在使用哪个产品。如果你明确使用 Trae、Cursor、Claude Code 或 Codex，使用对应参数即可。

### `install` 会自动探测产品吗？

不会。当前设计刻意收敛：默认只装到通用 `.agents/skills`，分产品安装必须显式指定 `--trae`、`--cursor`、`--claude-code` 或 `--codex`。`doctor` 只展示路径与当前安装状态，不写入文件。

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

安装产物是拷贝，不会自动同步。用相同的参数重新执行 install 即可刷新；本工具托管的目录（带 `.installed-manifest.json`）重装时会自动清理旧版本有、新版本已删除的残留文件，非托管目录只合并覆盖、不删任何文件。

### `scripts/` 目录是干什么的

- `skill/learning-coach/scripts/` 是随 skill 一起安装的预留目录（当前为空），CLI 会原样复制。
- 仓库根的 `scripts/check-refs.js` 是开发自检工具（不随包发布）：校验 SKILL.md、各规范、README 里所有 Markdown 引用指向真实文件。改完 skill 内容后跑：

```bash
npm test
```

零依赖、纯 Node 实现，Windows / macOS / Linux 都可运行；发现断链会以非零退出码失败，未被引用的规则/模板只给警告。

## 维护约定（给修改这个 Skill 的人）

规则有意在多份文件里保留速查副本——每个模式要能只加载自己的文件就工作。因此改口径时必须同步所有副本，否则会出现"同一条规则两个答案"。事实源对照：

| 口径 | 唯一事实源 | 速查副本（改动必须同步） |
|---|---|---|
| L1/L2/L3 分级定义 | `rules/记忆优先级.md` | SKILL.md 通用约定 8、八股规范、算法规范、项目规范 |
| 错题本机制（1/3/7/15 天间隔、每日 8 点/3 道/3 点上限、2/1/0 评级、钉子题） | `rules/复习滚动机制.md` | SKILL.md 复习节奏、八股/算法/项目/模拟面试规范、计划规范 |
| 补丁式校正（📌/🔁、一次 ≤5 条、默认不给全文） | `rules/八股规范.md` | SKILL.md 通用约定 7、模拟面试规范、八股模板 |
| 回炉三段式（痕迹分诊闸门、回炉 15/热测 20/冷枪 10、每日至多 1 次、入库标 🟡） | `rules/八股规范.md` 末节 | SKILL.md 复习节奏、复习滚动机制第三节、复习模板、示例场景九 |
| 普通日八股块 35+10（35 分清到期+学新、10 分冷枪抽隔天/大前天主题，回炉日整块替换为 15+20+10） | `rules/八股规范.md`「普通日八股块结构」节 | SKILL.md 复习节奏 |
| 任务先行轨道（学习风格问诊、六步流程、读码障碍四层分诊、个人词汇表） | `rules/任务先行规范.md` | SKILL.md 加载表、项目规范（轨道选择）、计划规范第一步（定计划顺带问诊）、示例场景十 |
| 周末面经问答 15 分钟（真实面经题快问快答、只抓 L1 提取速度、卡壳点入库） | `rules/计划规范.md` 第六步 | 计划模板「本周剩余安排」注释 |
| 项目钉子通道工具箱（埋点追时序/改一行猜结果/画图代讲/降级地图、文件行号执行单、物证复测） | `rules/复习滚动机制.md` 第四节 | 任务先行规范第五节、复习模板钉子格式、示例场景十 |
| 计划调整规则（完成率分档、减半日、欠债只顺延一次） | `rules/计划规范.md` | 计划模板、示例对话场景 5/5B |
| 耗时校准（25% 阈值、±20% 调量上限、3 天样本、四类系数、双信号融合表、开关） | `rules/计划规范.md` 第 3 节 | 计划模板（反馈块/校准结论/记录表/报告）、示例对话场景 5B/5C |
| 计划状态块结构 | `rules/计划规范.md` | 计划模板 |
| 打卡四件事与疲劳保护（块负荷 🔵🟢🟠 联动、饱和不评级移次日、25+5 番茄钟、60% 虚高预警、每周教学法一问） | `rules/计划规范.md` 打卡节与第 3 节 | SKILL.md 进度记录、计划模板（反馈块/状态块/报告/止血日）、复习滚动机制第二节、示例场景 5C |
| 库存水位与止血（战报水位行、连续 2 天入>出止血日、🔴 > 12 判生死盘点） | `rules/复习滚动机制.md` 第七节 | SKILL.md 复习节奏、计划模板（状态块/止血日）、复习模板战报、示例场景 8E |
| 算法弹性配额（默认 1 新+1 复习、熟题 15 分钟/道、hard 日 1 道封顶、超时顺延） | `rules/算法规范.md` 刷题流程 | 计划规范（番茄钟）、计划模板反馈块注、示例场景二 |
| 预测先行（动手/重写/改一行/读新代码前先口头预测再对账） | SKILL.md 通用约定 9 | 任务先行规范六步第 ③ 步、复习滚动机制通道 2 |
| 持久化适配（有 memory 自动读写四类工件，无 memory 回退手动带表） | SKILL.md「持久化适配」节 | 复习滚动机制第五节、计划规范第 4 步 |

其它硬约定：

- 改完任何 Markdown 必须跑 `npm test`：断链零容忍，规则/模板成为孤儿会出警告。
- 文件引用一律加反引号（如 `记忆优先级.md`）或写成相对链接，裸文件名不在校验范围内。
- 新增一种模式要同步六处：rules 规范、templates 模板、examples 示例、SKILL.md（触发词＋分发表）、双语 README，并做安装实测（`doctor` ＋ 临时目录 `install`）。
- CLI 安装目录由 `.installed-manifest.json` 托管：重装时按清单清理旧版本残留文件；非本工具托管的目录只合并覆盖，绝不删除用户文件。

## License

本项目采用 **MIT License**，完整条款见 **[LICENSE](LICENSE)**。