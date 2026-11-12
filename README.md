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
| 📅 定计划 | `14 天后面试，每天能学 2 小时` | 按倒计时和基础自评（八股/算法/项目）排阶段总览 + 精确到块的任务表；跨天/新会话先出恢复卡片再排表，断档回归旧债按上限截断重排 |
| 📚 背八股 | `背八股，下一题` | 先给必背清单再讲解；你脱稿讲完只收补丁，不重背 |
| 🧮 刷算法 | `刷算法，Hot100 下一题` | 题目 → 思路要点 → 完整代码 → 复杂度分析，四步给完即止不发问；配默写循环——默错记下错处、回看题解再默，今天默的明天必排复默，直到你亲口说"我闭卷默出来了"才出队；时间不够砍新题、不砍复习 |
| 📂 读项目 | `继续读项目，讲 xxx.ts` | 任务先行：先预测再动手验证，对着页面现象 / log 讲机制，代码看懂即可、不背；给你的文件路径先核实再开口，探索用的临时文件验收时清干净 |
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
/learning-coach 我不想学，帮我开始
```

想缩小范围直接补充就行：章节（"背 Vue 双向绑定"）、题号（"讲 76. 最小覆盖子串"）、文件路径、代码语言（"用 Go 写"）。

## 安装到不同产品

| 产品 | 安装命令 | 安装位置 |
|------|----------------|----------|
| 通用 Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |

```bash
npx learning-coach-skill install --all     # 一次装到全部全局目标
npx learning-coach-skill doctor            # 只看会装到哪里，不写文件
```

只让某个项目使用——进入项目根目录加 `--project`：

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae   # 落到 ./.trae/rules/learning-coach-skill/
```

> 升级不会自动生效：已安装的是拷贝，重新执行一次 install 即可。

## 设计原则

- **打补丁，不重背**：你的口述版就是正式版，只给 ≤5 条补丁（漏点/错句 + 原因），绝不甩标准答案制造"看过=会了"。
- **分级背，不全背**：🔴 脱稿背 / 🟡 看懂能讲 / ⚪ 眼熟即可；代码、文件路径、API 拼写不背。
- **复习永远优先**：错题到期先清、复习不占新学时间；时间不够砍新学、不砍复习；连续两天入>出自动安排"止血日"。
- **项目靠动手**：每块一个小任务，先预测再验证，对着现象讲清因果链即过。
- **计划会自己调整**：晚上打卡回报完成情况与每块实际用时，每块"计划/实际/差值"当场对账——提前完成必须补量，完不成自动减半且不滚债；某块连续吃力次日自动降级拆小。
- **断档回来不压垮**：跨天未打卡回归先出恢复卡片，旧债按每日上限截断均摊，断档日不计完成率；连学 7 天主动提醒安排纯复盘日。
- **进度能接续**：环境支持持久记忆时自动带出错题本和计划状态；不支持则手动把表贴回来。
- **治拖延有专门模式**：PlanCoach 一次只推一个小动作，直到进入状态。

## 典型一天

1. 早上定计划，拿到今天的块表（热身复习 → 项目 → 八股复习/新学 → 算法 → 打卡，每块带可验收的产出标准）
2. 按块推进：到期错题在复习块清完才学新内容
3. 学不动就说"不想学"，让 PlanCoach 拉一把
4. 晚上打卡，自动拿到调整后的明日计划
5. 冲刺期用"模拟面试"彩排两次（摸底 + 考前复测），丢分点自动进错题本

## 目录结构

```text
learning-coach-skill/
├── skill/learning-coach/
│   ├── SKILL.md                 # 入口：触发词、分发表、通用约定
│   ├── profiles/                # 用户配置层：TEMPLATE.md 空白模板 + 示例
│   └── references/
│       ├── rules/               # 各模式规范：怎么讲/怎么排/怎么考/怎么不忘
│       ├── templates/           # 输出模板：任务表、复习战报、任务书长什么样
│       └── examples/示例对话.md  # 完整示例对话（十六个场景）
├── bin/learning-coach-skill.js  # 安装 CLI
├── scripts/check-refs.js        # npm test：校验 Markdown 交叉引用
├── package.json / README.md / README_EN.md / LICENSE
```

复制 `skill/learning-coach/` 即可单独迁移，不需要 CLI。

**个性化（Profile）**：规则文件是通用默认值（时间盒、复习间隔、教学格式）；你的目标岗位、可学时长、学习风格等个人参数，复制 `profiles/TEMPLATE.md` 填一份即可。教练启动时读 profile，profile 里明确写出的值覆盖规则默认，没写的走默认。

## 常见问题

**装完没反应？** ① 重启 IDE / Agent；② 开**新**对话（老对话不注入）；③ `npx learning-coach-skill doctor` 确认路径。

**install 会自动探测产品吗？** 不会，只认显式参数（`--trae` / `--cursor` / `--claude-code` / `--codex`），默认装通用目录。

**写入报 EACCES？** 先修属主再重装：`sudo chown -R "$(whoami)" ~/.trae ~/.agents ~/.cursor ~/.claude 2>/dev/null`

**command not found？** 可 `npm install -g learning-coach-skill`，或 clone 后 `node bin/learning-coach-skill.js install`。

**重装会动我其他文件吗？** 不会。带 `.installed-manifest.json` 的托管目录只清理本工具旧版本残留；非托管目录只合并覆盖。

## 维护约定

规则在多份文件里有速查副本（每个模式只加载自己的文件就能工作），改口径必须同步所有副本，各规范文件头部标注了事实源；改完跑 `npm test` 校验交叉引用（断链零容忍）；新增模式要同步规范、模板、示例、SKILL.md 和双语 README；CLI 安装目录由 `.installed-manifest.json` 托管，重装只清旧版本残留、绝不删用户文件。

## License

MIT，完整条款见 [LICENSE](LICENSE)。

## v0.10.0：本地续接与规则清理

- 入口只保留当前规则，旧变更记录移入不默认加载的历史文件。
- 正式学习、查询、展示、休息、规则维护分开；停止不再触发催学。
- 项目以画像指定的简历问题地图为主，节点表+STAR，验证按需。
- `--codex` 安装到 `~/.codex/skills/learning-coach/`；旧版 Agents 安装不会被自动删除，先备份再保留一个有效发现入口。`--all` 不额外安装通用默认副本。
- 升级保留已有个人画像；公开包不再附带作者私人画像。新用户从模板创建自己的配置。
- 可用 Python 3 运行 `scripts/check_progress.py --workspace <学习工作区> --date YYYY-MM-DD`，只读核对三线台账的当前状态表，不自动评分或修改进度。格式见进度与环境规范。
- 浏览器和外部服务是否可用按实际连接核实，不声称未做过的验证成功。
