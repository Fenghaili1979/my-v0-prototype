import { TopNav } from "../top-nav"
import { Tag, MediaFrame, Btn } from "../kit"
import { ChevronDown, Flame, ShieldCheck, Heart, Download, TrendingUp } from "lucide-react"

/* 探索页 — 修正点：
   1. "今日精选"改为「每日热榜聚合」：多个榜单模块（CAD 工程榜 / AI 创作榜 / 新锐创作者 / 主题飙升），
      而非单一编辑推荐，覆盖大量热门作品而非小范围
   2. 双轨切换：工程作品(CAD) / 视觉作品(AI) 顶层分流，避免不同维度混排
   3. 保留三层筛选 */
export function ExploreScreen() {
  return (
    <div className="bg-background">
      <TopNav active="explore" />

      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* 顶层双轨切换 */}
        <div className="mb-6 inline-flex rounded-xl border border-border bg-card p-1">
          <span className="flex items-center gap-1.5 rounded-lg bg-cad px-4 py-2 text-sm font-semibold text-cad-foreground">
            <ShieldCheck className="size-4" />工程作品 · CAD
          </span>
          <span className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground">
            视觉作品 · AI 生成
          </span>
        </div>

        {/* 每日热榜聚合（多模块） */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <Flame className="size-5 text-destructive" />
            <h2 className="text-xl font-bold tracking-tight">每日热榜</h2>
            <span className="text-sm text-muted-foreground">· 基于过去 24h 浏览 / 下载 / 点赞综合排序</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "CAD 工程榜", d: "可制造性评分 ≥ 90", icon: ShieldCheck, tone: "cad" as const },
              { t: "AI 创作榜", d: "今日最受欢迎视觉作品", icon: TrendingUp, tone: "ai" as const },
              { t: "主题飙升榜", d: "母亲节 · 家居装饰飙升", icon: Flame, tone: "credit" as const },
            ].map((m) => (
              <div key={m.t} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                    <m.icon className="size-4 text-credit" />{m.t}
                  </span>
                  <Tag tone={m.tone}>TOP 10</Tag>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((r) => (
                    <div key={r} className="flex items-center gap-2.5">
                      <span className="w-4 text-center font-mono text-xs font-bold text-credit">{r}</span>
                      <MediaFrame className="size-10 shrink-0" label="" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium">热门作品标题 {r}</p>
                        <p className="truncate text-[11px] text-muted-foreground">@creator · 1.{r}k 互动</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 主题专区 横向滚动 */}
        <div className="mb-6">
          <h3 className="mb-3 text-base font-semibold">主题专区</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 thin-scroll">
            {["母亲节", "父亲节", "复活节", "圣诞节", "情人节", "春季", "动物自然", "家居装饰"].map((t) => (
              <div key={t} className="w-40 shrink-0 overflow-hidden rounded-xl border border-border bg-card">
                <MediaFrame className="aspect-[3/2]" label={t} />
                <div className="p-2.5">
                  <p className="text-sm font-medium">{t}</p>
                  <p className="text-xs text-muted-foreground">128 个模型</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 三层筛选 */}
        <div className="mb-5 flex flex-wrap items-center gap-3 border-y border-border py-3">
          <div className="flex gap-1">
            {["Hot", "Latest", "Downloads", "Likes"].map((s, i) => (
              <span key={s} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${i === 0 ? "bg-accent text-foreground" : "text-muted-foreground"}`}>{s}</span>
            ))}
          </div>
          <span className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs">
            All Categories <ChevronDown className="size-3" />
          </span>
          <div className="ml-auto flex gap-1">
            {["全部", "AI 生成", "CAD 模型", "激光雕刻", "3D 打印", "UV 打印"].map((s, i) => (
              <span key={s} className={`rounded-lg px-2.5 py-1.5 text-xs ${i === 0 ? "bg-accent text-foreground" : "text-muted-foreground"}`}>{s}</span>
            ))}
          </div>
        </div>

        {/* 作品网格（当前轨：CAD 工程作品） */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-cad/25 bg-card">
              <MediaFrame className="aspect-[4/3]" label="工程模型" />
              <div className="p-3">
                <div className="mb-1.5 flex items-center gap-1.5">
                  <Tag tone="cad">CAD</Tag>
                  <Tag tone="neutral">{["STEP", "STL", "OBJ"][i % 3]}</Tag>
                </div>
                <p className="truncate text-sm font-medium">工程模型作品 #{i + 1}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 text-cad"><ShieldCheck className="size-3" />{90 + (i % 8)}</span>
                  <span className="flex items-center gap-2">
                    <span className="flex items-center gap-0.5"><Heart className="size-3" />{i + 2}k</span>
                    <span className="flex items-center gap-0.5"><Download className="size-3" />{i}00</span>
                  </span>
                </div>
                <Btn tone="cad" size="sm" className="mt-2 w-full">在 CAD Agent 中打开</Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
