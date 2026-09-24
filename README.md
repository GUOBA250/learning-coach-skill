<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="README_EN.md">English</a></p>
  <p><em>你的私人技术面试陪练：定计划、背八股、刷算法、读项目、模拟面试、错题复习、治拖延。</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

一个装在 IDE / Agent 里的 AI 学习教练，七件事都在对话里完成。不限前端/后端/全栈，日常学习也能用。

## 七种模式

直接说人话就能触发，也可以加 `/learning-coach` 前缀：

| 模式 | 这样说 | 它做什么 |
|---|---|---|
| 📅 定计划 | `14 天后面试，每天能学 2 小时` | 按倒计时和三围自评（八股/算法/项目）排三阶段总览 + 今天精确到半小时的任务表；求职导向会一次问齐笔试、题单、项目池等背景 |
| 📚 背八股 | `背八股，下一题` | 先给 🔴 必背清单，再四段式讲解；你脱稿讲完只收补丁，不重背 |
| 🧮 刷算法 | `刷算法，Hot100 下一题` | 卡哥风格讲题；每块先闭卷默写到期题，再刷 4 道新 medium，不盯题死想 |
| 📂 读项目 | `继续读 MiniVue，讲 parse.ts` | 任务先行：先预测再动手验证，对着页面现象 / log 讲机制，代码看懂即可、不背 |
| 🎤 模拟面试 | `模拟面试，前端岗全流程` | 一次一题、不提示，50 分钟走完自我介绍→八股→算法→项目→反问，结束打分给补丁 |
| 🔁 复习错题 | `复习，今天到期的抽我` | 错题本按 1/3/7/15 天滚动：2 分升档、1 分留档、0 分打回明天 |
| 🚀 启动学习 | `不想学，帮我开始` | PlanCoach 模式：不讲道理，一次只给一个极小动作 |

## 30 秒上手

前置：Node.js ≥ 16（仅安装时用到，Skill 本体是纯 Markdown）。

```bash
npx learning-coach-skill install
```

重启 IDE / Agent，**开一个新对话**：

```text
/learning-coach 帮我定计划，14 天后面试，每天能学 2 小时
/learning-coach 背八股，下一题
/learning-coach 刷算法，下一题
/learning-coach 继续读 MiniVue，讲 parse.ts
/learning-coach 我不想学，帮我开始
```

想缩小范围直接补充就行：章节（"背 Vue 双向绑定"）、题号（"讲 76. 最小覆盖子串"）、文件路径、代码语言（"用 Go 写"）。

## 安装到不同产品

默认装到通用 Agent 目录，按产品显式指定更稳：

| 产品 | 用户级安装命令 | 安装位置 |
|------|----------------|----------|
| 通用 Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |

其他命令：

```bash
npx learning-coach-skill install --all     # 一次装到全部全局目标
npx learning-coach-skill doctor            # 只看会装到哪里、当前装没装，不写文件
```

只让某个业务项目使用——进入项目根目录加 `--project`：

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae   # 落到 ./.trae/rules/learning-coach-skill/
npx learning-coach-skill install --project --all    # 全部项目级目标
```

> 更新不会自动生效：已安装的是拷贝，升级后用相同参数重新执行一次 install 即可。

## 和普通"AI 讲题"有什么不一样

- **打补丁，不重背**：你的口述版就是正式版，只给 ≤5 条补丁（📌 漏点 / 🔁 错句 + 原因），读一遍立刻脱稿再讲一次焊进去——绝不甩一篇 90% 相似的标准答案制造"看过=会了"。
- **分级背，不全背**：🔴 脱稿背 / 🟡 看懂能讲 / ⚪ 眼熟即可；代码不背，文件路径、错误码数字、API 拼写不背。
- **复习永远优先**：每天第一块先清到期错题（八股脱稿、算法闭卷默写、项目对物证讲因果链），清完才学新；同一点卡两次变"钉子"，拆小、换通道或放弃；连续两天入>出自动安排"止血日"。
- **项目靠动手，不靠带读**：每块一个小任务，先口头预测再动手验证，对着物证讲清因果链即过，不考空手背。
- **计划会自己调整**：晚上打卡回报完成块数/卡点/块负荷/疲劳度——完不成自动减半且不滚债，某块 🟠 次日自动降级拆小，连续 🔵 自动加量。
- **进度能接续**：环境支持持久记忆时自动带出错题本和计划状态块；不支持则手动把表贴回来。
- **治拖延有专门模式**：PlanCoach 一次只推一个小动作（放下手机、坐起来、打开笔记……），直到进入状态。

## 典型一天

1. 早上定计划，拿到今天的块表（每块 30-45 分钟，带可验收的产出标准）
2. 第一块先清到期错题，然后照表学八股 / 算法 / 项目
3. 学不动就说"不想学"，让 PlanCoach 拉一把
4. 晚上打卡，自动拿到调整后的明日计划
5. 冲刺期用"模拟面试"彩排两次（摸底 + 考前复测），丢分点自动进错题本

完整的十场景示例对话见 [示例对话.md](skill/learning-coach/references/examples/示例对话.md)。

## 目录结构

```text
learning-coach-skill/
├── skill/learning-coach/
│   ├── SKILL.md                 # 入口：触发词、分发表、通用约定
│   └── references/
│       ├── rules/               # 9 份规范：怎么讲/怎么排/怎么考/怎么不忘
│       ├── templates/           # 6 类输出模板：输出长什么样
│       └── examples/示例对话.md
├── bin/learning-coach-skill.js  # 安装 CLI
├── scripts/check-refs.js        # npm test：校验 Markdown 交叉引用
├── package.json
├── README.md / README_EN.md
└── LICENSE
```

复制 `skill/learning-coach/` 即可单独迁移，不需要 CLI。

## 常见问题

**装完没反应？** ① 重启 IDE / Agent；② 开**新**对话（老对话不注入）；③ `npx learning-coach-skill doctor --trae` 确认路径。

**install 会自动探测产品吗？** 不会，刻意只认显式参数（`--trae` / `--cursor` / `--claude-code` / `--codex`），默认装通用目录。

**写入报 EACCES？** 先修属主再重装：`sudo chown -R "$(whoami)" ~/.trae ~/.agents ~/.cursor ~/.claude 2>/dev/null`

**command not found？** npm 拉不到包时可 `npm install -g learning-coach-skill`，或 clone 后 `node bin/learning-coach-skill.js install --trae`。

**重装会动我其他文件吗？** 不会。带 `.installed-manifest.json` 的托管目录只清理本工具旧版本残留；非托管目录只合并覆盖。

## 维护约定（给修改这个 Skill 的人）

规则有意在多份文件里保留速查副本——每个模式要能只加载自己的文件就工作。改口径必须同步所有副本，否则"同一条规则两个答案"。事实源对照：

| 口径 | 唯一事实源 | 速查副本（改动必须同步） |
|---|---|---|
| L1/L2/L3 分级定义 | `rules/记忆优先级.md` | SKILL.md 通用约定 8、八股规范、算法规范、项目规范 |
| 错题本机制（1/3/7/15 天间隔、每日 8 点/3 道/3 点上限、2/1/0 评级、钉子题） | `rules/复习滚动机制.md` | SKILL.md 复习节奏、八股/算法/项目/模拟面试规范、计划规范 |
| 补丁式校正（📌/🔁、一次 ≤5 条、默认不给全文） | `rules/八股规范.md` | SKILL.md 通用约定 7、模拟面试规范、八股模板 |
| 回炉三段式（痕迹分诊闸门、回炉 15/热测 20/冷枪 10、每日至多 1 次、入库标 🟡） | `rules/八股规范.md` 末节 | SKILL.md 复习节奏、复习滚动机制第三节、复习模板、示例场景八 |
| 普通日八股块 35+10（35 分清到期+学新、10 分冷枪抽隔天/大前天主题，回炉日整块替换为 15+20+10） | `rules/八股规范.md`「普通日八股块结构」节 | SKILL.md 复习节奏 |
| 任务先行（项目唯一学法：问诊只问一次存 profile、六步流程、读码障碍四层分诊、现场词汇卡不建表） | `rules/任务先行规范.md` | SKILL.md 加载表、项目规范（分级索引）、计划规范第一步（定计划顺带问诊）、示例场景九 |
| 周末面经问答 15 分钟（真实面经题快问快答、只抓 L1 提取速度、卡壳点入库） | `rules/计划规范.md` 第六步 | 计划模板「本周剩余安排」注释 |
| 项目钉子通道工具箱（埋点追时序/改一行猜结果/画图代讲/降级提示、文件行号执行单、物证复测） | `rules/复习滚动机制.md` 第四节 | 任务先行规范第四节、复习模板钉子格式、示例场景九 |
| 计划调整规则（完成率分档、减半日、欠债只顺延一次） | `rules/计划规范.md` | 计划模板、示例对话场景 4/4B |
| 计划状态块结构（只含倒计时/完成率/负荷/错题本水位两类工件，不做耗时校准） | `rules/计划规范.md` 打卡第 3 步 | 计划模板 |
| 算法配额与新题三步（复习优先：30min 到期默写 ≤3 道、没默完不加新题；标准日 4 道新 medium、12min/道，hard 日 2 hard；新题想 3-5min → 看题解理解 → 合上默写，不盯题死想；超时顺延） | `rules/算法规范.md` 刷题流程 | SKILL.md 复习节奏、计划规范第六步自检 3、计划模板今日表、示例场景二/十 |
| 算法必背口径（🔴 只认信号/模板骨架/复杂度，思路框架只用于理解不背诵） | `rules/算法规范.md` 记忆优先级表与风格第 2 节 | 算法模板必背清单、README 算法条 |
| 算法纯默写协议（复习段只默写不问框架、函数签名→关键行两档提示、错行补丁当天再默；入库按"合书默写不出/错 2 处/复杂度报错"，看题解不入库） | `rules/算法规范.md`「纯默写协议」节 | 复习滚动机制第一节入库表/第二节评级表/第四节算法钉子、示例场景十 |
| 排每日任务四自检（时长对目标 ±30min 必补/必砍、精力曲线排序、算法先复习后 4 新题、项目块 ≤2 可观测点） | `rules/计划规范.md` 第六步 | SKILL.md 进度记录、计划模板今日表/明日表/调整规则、任务先行规范第二节、示例场景十 |
| 项目机制验收（不考脱稿口述，现象倒推法对物证讲因果链即过；讲不清换现象再倒推，连续 2 个现象才入库） | `rules/任务先行规范.md` 第二节末与第四节 | 项目规范、复习滚动机制第一节/第二节评级表、SKILL.md 复习节奏 |
| 打卡四件事与疲劳保护（🟠 次日自动降难度拆小、连续 2 天 🔵 自动加量、打卡末尾"明日 ___ 块调整为 ___"硬输出、饱和不评级移次日、25+5 番茄钟） | `rules/计划规范.md` 打卡节 | SKILL.md 进度记录、计划模板（负荷预告/状态块/止血日）、复习滚动机制第二节、示例场景 4B/十 |
| 错题本 5 列简表（点/级别/当前档/下次复习/战绩；战绩记最近评级、钉子标 🔁、回炉标"回炉"，不维护入库日/回炉日/提取次数） | `templates/复习模板.md` | 复习滚动机制第五节、示例场景 7A/八 |
| 库存水位与止血（战报水位行、连续 2 天入>出止血日、🔴 > 12 判生死盘点） | `rules/复习滚动机制.md` 第七节 | SKILL.md 复习节奏、计划模板（状态块/止血日）、复习模板战报、示例场景 7E |
| 预测先行（动手/重写/改一行/读新代码前先口头预测再对账） | SKILL.md 通用约定 9 | 任务先行规范六步第 ③ 步、复习滚动机制通道 2 |
| 持久化适配（有 memory 自动读写两类工件：错题本表+计划状态块，无 memory 回退手动带表） | SKILL.md「持久化适配」节 | 复习滚动机制第五节、计划规范打卡第 3 步 |

其它硬约定：

- 改完任何 Markdown 必须跑 `npm test`：断链零容忍，规则/模板成为孤儿会出警告。
- 文件引用一律加反引号（如 `记忆优先级.md`）或写成相对链接，裸文件名不在校验范围内。
- 新增一种模式要同步六处：rules 规范、templates 模板、examples 示例、SKILL.md（触发词＋分发表）、双语 README，并做安装实测（`doctor` ＋ 临时目录 `install`）。
- CLI 安装目录由 `.installed-manifest.json` 托管：重装时按清单清理旧版本残留文件；非本工具托管的目录只合并覆盖，绝不删除用户文件。

## License

本项目采用 **MIT License**，完整条款见 **[LICENSE](LICENSE)**。
