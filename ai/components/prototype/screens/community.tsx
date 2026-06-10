import { TopNav } from "../top-nav"
import { Tag, MediaFrame, Btn } from "../kit"
import { Heart, MessageSquare, Share2, Flag, Trophy, ShieldCheck } from "lucide-react"

/* 社区页 — 修正点：动态流按内容来源分轨标注(CAD/AI)，
   挑战驱动 + 创作者生态。CAD 与 AI 内容视觉区分。 */
export function CommunityScreen() {
  return (
    <div className="bg-background">
      <TopNav active="community" />
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-6 lg:grid-cols-[1fr_320px]">
        {/* 主内容 */}
        <main>
          {/* 发布框 */}
          <div className="mb-5 rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <span className="size-9 rounded-full bg-gradient-to-br from-ai/60 to-cad/60" />
              <span className="flex-1 rounded-lg border border-input bg-secondary/40 px-3 py-2 text-sm text-muted-foreground">分享你的创作或发起话题…</span>
            </div>
            <div className="mt-3 flex gap-2">
              {["图片", "AI 作品", "CAD 模型", "话题"].map((t, i) => (
                <span key={t} className={`rounded-lg px-3 py-1.5 text-xs ${i === 2 ? "bg-cad/15 text-cad" : i === 1 ? "bg-ai/15 text-ai" : "border border-border text-muted-foreground"}`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Tab */}
          <div className="mb-4 flex gap-1 border-b border-border">
            {["热门动态", "创作挑战", "创作者", "话题广场"].map((t, i) => (
              <span key={t} className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium ${i === 0 ? "border-ai text-foreground" : "border-transparent text-muted-foreground"}`}>{t}</span>
            ))}
          </div>

          {/* 动态流 — 分轨标注 */}
          <div className="space-y-4">
            {[
              { ai: false, label: "CAD 模型", tone: "cad" as const, extra: "可制造 94" },
              { ai: true, label: "AI 生成", tone: "ai" as const, extra: "激光雕刻" },
              { ai: false, label: "CAD 模型", tone: "cad" as const, extra: "可制造 90" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="size-9 rounded-full bg-gradient-to-br from-ai/60 to-cad/60" />
                  <div>
                    <p className="text-sm font-medium">创作者 {i + 1}</p>
                    <p className="text-xs text-muted-foreground">2 小时前</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <Tag tone={p.tone}>{p.label}</Tag>
                    {p.ai ? null : <span className="flex items-center gap-1 text-xs text-cad"><ShieldCheck className="size-3" />{p.extra}</span>}
                  </div>
                </div>
                <p className="mb-3 text-sm">{p.ai ? "用 AI 工坊把照片转成了激光雕刻图案，效果不错！" : "用 CAD Agent 做的参数化零件，已通过可制造性验证，可直接量产。"}</p>
                <MediaFrame className="mb-3 aspect-[2/1]" label={p.ai ? "AI 作品" : "工程模型"} />
                <div className="flex items-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Heart className="size-3.5" />128</span>
                  <span className="flex items-center gap-1"><MessageSquare className="size-3.5" />24</span>
                  <span className="flex items-center gap-1"><Share2 className="size-3.5" />分享</span>
                  <span className="ml-auto flex items-center gap-1"><Flag className="size-3.5" />举报</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 侧栏 */}
        <aside className="space-y-5">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 flex items-center gap-1.5 text-sm font-semibold"><Trophy className="size-4 text-credit" />创作挑战</h3>
            <div className="space-y-3">
              {[{ t: "CAD 建模马拉松", n: "1.2k 参与", tag: "hot" as const }, { t: "母亲节 AI 创作大赛", n: "860 参与", tag: "new" as const }, { t: "春季激光雕刻挑战", n: "540 参与", tag: "hot" as const }].map((c) => (
                <div key={c.t} className="flex items-center gap-2">
                  <MediaFrame className="size-10 shrink-0" label="" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{c.t}</p>
                    <p className="text-xs text-muted-foreground">{c.n} · 5 天后截止</p>
                  </div>
                  <Tag tone={c.tag}>{c.tag === "hot" ? "HOT" : "NEW"}</Tag>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">推荐创作者</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="size-9 rounded-full bg-gradient-to-br from-ai/50 to-cad/50" />
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">设计师 {i}</p><p className="text-xs text-muted-foreground">@designer{i}</p></div>
                  <Btn tone="outline" size="sm">关注</Btn>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">热门话题</h3>
            <div className="flex flex-wrap gap-2">
              {["#参数化建模", "#可制造性", "#激光雕刻", "#3D打印", "#家居设计", "#礼品定制"].map((t) => (
                <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
