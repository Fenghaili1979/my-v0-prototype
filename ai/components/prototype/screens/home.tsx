import { TopNav } from "../top-nav"
import { Tag, Btn, MediaFrame, SectionTitle } from "../kit"
import { Box, Sparkles, Play, ShieldCheck, GitBranch, Layers, ArrowRight, Heart } from "lucide-react"

/* 首页 — 修正点：
   1. 产品核心 CAD Agent 作为第一叙事（Hero 即 CAD Agent）
   2. "官网/产品介绍"并入结构化区块，而非散落入口
   3. 精选作品分为两轨：CAD Agent 工程产出 vs AI 工具产出（明确标注、卡片形态区分） */
export function HomeScreen() {
  return (
    <div className="bg-background">
      <TopNav active="home" />

      {/* Hero：以 CAD Agent 为核心 */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 cad-glow" data-wf-hide />
        <div className="absolute inset-0 blueprint-grid opacity-40" data-wf-hide />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Tag tone="new">产品核心</Tag>
              <Tag tone="cad">Engineering CAD Agent</Tag>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              用自然语言，生成<span className="text-cad">可制造</span>的工程模型
            </h1>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              MakeBetter 以 CAD Agent 为核心：对话式参数化建模，并通过行业首创的「可制造性验证引擎」自动检查壁厚、公差、水密性，输出可制造性评分。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn tone="cad" size="lg">
                <Box className="size-4" />
                立即体验 CAD Agent
              </Btn>
              <Btn tone="outline" size="lg">了解产品能力</Btn>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-cad" />可制造性验证</span>
              <span className="flex items-center gap-1.5"><GitBranch className="size-3.5 text-cad" />全链可追溯历史</span>
              <span className="flex items-center gap-1.5"><Layers className="size-3.5 text-cad" />STEP / STL / G 代码交付</span>
            </div>
          </div>

          {/* 代码 + 3D 预览（模拟 IDE） */}
          <div className="overflow-hidden rounded-2xl border border-cad/30 bg-card">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-3 py-2">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-credit/70" />
              <span className="size-2.5 rounded-full bg-cad/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">bracket.kcl</span>
              <Btn tone="cad" size="sm" className="ml-auto"><Play className="size-3" />运行</Btn>
            </div>
            <div className="grid grid-cols-2">
              <pre className="border-r border-border p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
{`// 参数化支架
thickness = 4mm
holes = 4
plate = startSketch()
  |> rect(80, 50)
  |> extrude(thickness)
  |> fillet(2mm)`}
              </pre>
              <MediaFrame className="aspect-auto min-h-[180px]" label="3D 模型预览" />
            </div>
            <div className="flex items-center justify-between border-t border-border bg-cad/10 px-3 py-2 text-xs">
              <span className="flex items-center gap-1.5 text-cad"><ShieldCheck className="size-3.5" />可制造性评分</span>
              <span className="font-semibold text-cad">92 / 100 · 可量产</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI 创作工坊入口（次级，明确区分于 CAD） */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <SectionTitle
          title="AI 创作工坊"
          desc="轻量级生成与图像处理工具 — 与工程级 CAD Agent 互补，而非同一维度"
          action={<Btn tone="ghost" size="sm">全部工具 <ArrowRight className="size-3.5" /></Btn>}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "激光雕刻 · 文生图", d: "17 种艺术风格", tone: "laser" as const, c: "border-destructive/30" },
            { t: "3D 风格化", d: "Lego / Clay / 低多边形等 7 种", tone: "cad" as const, c: "border-cad/30" },
            { t: "UV 打印 · 图案", d: "15 种 UV 风格", tone: "uv" as const, c: "border-ai/30" },
            { t: "AI Tools 工具集", d: "去背景 / 矢量化 / 放大等 10 种", tone: "ai" as const, c: "border-ai/30" },
          ].map((it) => (
            <div key={it.t} className={`rounded-xl border ${it.c} bg-card p-4`}>
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-ai/15 text-ai">
                <Sparkles className="size-4" />
              </div>
              <h4 className="text-sm font-semibold">{it.t}</h4>
              <p className="mt-1 text-xs text-muted-foreground">{it.d}</p>
              <Tag tone={it.tone} className="mt-3">AI 工具产出</Tag>
            </div>
          ))}
        </div>
      </section>

      {/* 精选作品 — 双轨明确区分 */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        {/* 轨道 A：CAD 工程作品 */}
        <SectionTitle
          title="精选工程作品 · CAD Agent 产出"
          desc="带可制造性评分与导出格式的参数化模型"
          action={<Tag tone="cad">工程级 · 可制造</Tag>}
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <CadWorkCard key={i} score={88 + i} />
          ))}
        </div>

        <div className="h-10" />

        {/* 轨道 B：AI 工具作品 */}
        <SectionTitle
          title="热门 AI 作品 · 创作工坊产出"
          desc="风格转换、去背景、图案生成等轻量产出"
          action={<Tag tone="ai">AI 生成 · 视觉创作</Tag>}
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <AiWorkCard key={i} />
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border px-6 py-10 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <span className="font-semibold text-foreground">MakeBetter</span>
          <div className="flex flex-wrap gap-6">
            <span>产品</span><span>CAD Agent</span><span>AI 工坊</span><span>社区</span><span>定价</span><span>关于我们</span>
          </div>
          <span>© 2026 MakeBetter</span>
        </div>
      </footer>
    </div>
  )
}

// CAD 工程卡片：横向、含评分条、工程信息密集
function CadWorkCard({ score }: { score: number }) {
  return (
    <div className="overflow-hidden rounded-xl border border-cad/25 bg-card">
      <MediaFrame className="aspect-[4/3]" label="工程模型" />
      <div className="p-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <Tag tone="cad">CAD</Tag>
          <Tag tone="neutral">STEP</Tag>
        </div>
        <p className="truncate text-sm font-medium">参数化连接支架 v{score - 80}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1 text-cad"><ShieldCheck className="size-3" />可制造 {score}</span>
          <span>在 CAD Agent 打开</span>
        </div>
      </div>
    </div>
  )
}

// AI 工具卡片：方形、轻量、强调视觉
function AiWorkCard() {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card">
      <MediaFrame className="aspect-square" label="AI 作品" />
      <div className="p-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <Tag tone="ai">AI 生成</Tag>
          <Tag tone="laser">激光雕刻</Tag>
        </div>
        <p className="truncate text-sm font-medium">3D contour 风格徽章</p>
        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>@creator</span>
          <span className="flex items-center gap-1"><Heart className="size-3" />1.2k</span>
        </div>
      </div>
    </div>
  )
}
