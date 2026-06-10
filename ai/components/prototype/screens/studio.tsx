import { TopNav } from "../top-nav"
import { Tag, MediaFrame, Btn } from "../kit"
import { Sparkles, Wand2, ImageIcon, Type, ChevronDown, Download, Share2 } from "lucide-react"

/* AI 创作工坊（激光）— 修正点：
   原文档「左侧输入 AI 质量 + 右侧 AI 对话框」功能重复。
   这里合并为单一 AI 助手轴：
   - 左栏 = 结构化参数设置（风格/比例/模型质量等"表单式"控制）
   - 右栏 = AI 助手对话（自然语言微调，与左栏双向联动，不再重复"质量"输入）
   说明条明确标注两栏分工，消除重复。 */
export function StudioScreen() {
  return (
    <div className="bg-background">
      <TopNav active="studio" />

      {/* 子导航 */}
      <div className="flex items-center gap-1 border-b border-border px-5 py-2">
        {["激光雕刻 Laser", "3D Printer", "UV Printer", "AI Tools"].map((t, i) => (
          <span key={t} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${i === 0 ? "bg-destructive/15 text-destructive" : "text-muted-foreground"}`}>{t}</span>
        ))}
        <span className="ml-auto flex items-center gap-1 rounded-lg bg-credit/15 px-2.5 py-1 text-xs font-semibold text-credit">
          <span className="size-3 rounded-full bg-credit" />本次消耗 10 积分
        </span>
      </div>

      {/* 三栏布局 */}
      <div className="grid h-[calc(100vh-8rem)] grid-cols-[320px_1fr_340px]">
        {/* 左栏：结构化参数设置 */}
        <aside className="overflow-y-auto border-r border-border p-4 thin-scroll">
          <h3 className="mb-3 text-sm font-semibold text-muted-foreground">① 参数设置</h3>

          <div className="mb-4 flex gap-2">
            {[{ i: Type, t: "文生图" }, { i: ImageIcon, t: "图生图" }, { i: Wand2, t: "文生 Logo" }].map((f, idx) => (
              <span key={f.t} className={`flex flex-1 flex-col items-center gap-1 rounded-lg border p-2 text-xs ${idx === 0 ? "border-destructive/40 bg-destructive/10 text-destructive" : "border-border text-muted-foreground"}`}>
                <f.i className="size-4" />{f.t}
              </span>
            ))}
          </div>

          <p className="mb-2 text-xs font-medium text-muted-foreground">风格选择（17 种）</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <MediaFrame key={i} className="aspect-square" label="" />
            ))}
          </div>

          <label className="mb-3 block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">图像描述 Prompt</span>
            <span className="flex h-20 w-full rounded-lg border border-input bg-secondary/40 p-2.5 text-sm text-muted-foreground">一只赛博朋克风格的猫…</span>
          </label>

          <div className="mb-3 grid grid-cols-2 gap-2">
            <span className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs">比例 1:1 <ChevronDown className="size-3" /></span>
            {/* 模型质量在左栏统一控制 */}
            <span className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs">质量 Fast <ChevronDown className="size-3" /></span>
          </div>
          <Btn tone="default" size="lg" className="w-full">生成图像 · 10 积分</Btn>
        </aside>

        {/* 中栏：预览区 */}
        <main className="overflow-y-auto bg-[oklch(0.13_0.01_277)] p-6 thin-scroll">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-muted-foreground">② 生成结果</h3>
            <div className="flex gap-2">
              <Btn tone="outline" size="sm"><Download className="size-3.5" />下载</Btn>
              <Btn tone="default" size="sm"><Share2 className="size-3.5" />分享到社区</Btn>
            </div>
          </div>
          <MediaFrame className="aspect-square w-full max-w-lg" label="生成结果预览" />
          <div className="mt-4 flex gap-2">
            <Tag tone="laser">激光雕刻</Tag>
            <Tag tone="ai">3D contour</Tag>
            <Tag tone="neutral">1:1 · Fast</Tag>
          </div>
        </main>

        {/* 右栏：统一 AI 助手（自然语言微调，不重复"质量"输入） */}
        <aside className="flex flex-col border-l border-border">
          <div className="border-b border-border p-3">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold">
              <Sparkles className="size-4 text-ai" />AI 助手
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">用自然语言微调左侧参数，双向联动</p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-3 thin-scroll">
            <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-ai/15 p-2.5 text-sm">把风格换成更柔和的，比例改成 16:9</div>
            <div className="max-w-[90%] rounded-xl rounded-tl-sm bg-secondary p-2.5 text-sm text-muted-foreground">
              已为你切换到「水彩柔光」风格并将比例设为 16:9（已同步到左侧设置）。需要我同时降低对比度吗？
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["优化我的 Prompt", "推荐相似风格", "提高清晰度"].map((s) => (
                <span key={s} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>
          <div className="border-t border-border p-3">
            <span className="flex h-10 items-center rounded-lg border border-input bg-secondary/40 px-3 text-sm text-muted-foreground">和 AI 助手对话…</span>
          </div>
        </aside>
      </div>
    </div>
  )
}
