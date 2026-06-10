import { TopNav } from "../top-nav"
import { Btn, MediaFrame, Tag } from "../kit"
import { Box, ShieldCheck, AlertTriangle, Code2, History, Send, Download } from "lucide-react"

/* CAD Agent — 产品核心。
   差异化主线：可制造性验证引擎（行业首创）贯穿预览区。
   双栏：左对话 / 右预览(3D / 代码 / 验证报告 / 历史) */
export function CadAgentScreen() {
  return (
    <div className="bg-background">
      <TopNav active="cad" />

      <div className="grid h-[calc(100vh-4rem)] grid-cols-2">
        {/* 左：对话区 */}
        <section className="flex flex-col border-r border-border">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <Box className="size-4 text-cad" />
            <span className="text-sm font-semibold">CAD Agent · 对话建模</span>
            <Tag tone="new" className="ml-auto">参数化 · 可追溯</Tag>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4 thin-scroll">
            <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-cad/15 p-3 text-sm">
              你好，描述你要建模的零件，我会生成可编辑的参数化 CAD 模型并验证可制造性。
            </div>
            <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-ai/15 p-3 text-sm">
              做一个 80×50mm 的连接支架，4mm 厚，四角各一个 M4 沉头孔。
            </div>
            <div className="max-w-[92%] space-y-2 rounded-xl rounded-tl-sm bg-secondary p-3 text-sm">
              <p className="text-muted-foreground">已生成支架模型并完成可制造性检查。代码如下：</p>
              <pre className="overflow-x-auto rounded-lg bg-background p-2.5 font-mono text-[11px] leading-relaxed text-cad">
{`bracket = startSketch('XY')
  |> rect(80, 50)
  |> extrude(4mm)
  |> holes(M4, count=4, type='countersink')`}
              </pre>
              <div className="flex items-center gap-1.5 rounded-lg bg-cad/10 px-2.5 py-1.5 text-xs text-cad">
                <ShieldCheck className="size-3.5" />可制造性评分 92 / 100 — 可量产
              </div>
            </div>
          </div>

          <div className="border-t border-border p-3">
            <div className="flex items-center gap-2 rounded-xl border border-input bg-secondary/40 px-3 py-2">
              <span className="flex-1 text-sm text-muted-foreground">继续描述修改，如「孔径改成 M5」…</span>
              <Btn tone="cad" size="sm"><Send className="size-3.5" /></Btn>
            </div>
          </div>
        </section>

        {/* 右：预览区 */}
        <section className="flex flex-col">
          <div className="flex items-center gap-1 border-b border-border px-3 py-2">
            {[{ t: "3D 预览", i: Box, on: true }, { t: "代码 KCL", i: Code2 }, { t: "可制造性", i: ShieldCheck }, { t: "历史", i: History }].map((tab) => (
              <span key={tab.t} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${tab.on ? "bg-cad/15 text-cad" : "text-muted-foreground"}`}>
                <tab.i className="size-3.5" />{tab.t}
              </span>
            ))}
            <Btn tone="cad" size="sm" className="ml-auto"><Download className="size-3.5" />导出 STEP</Btn>
          </div>

          <div className="relative flex-1 blueprint-grid">
            <div className="absolute inset-0 cad-glow" data-wf-hide />
            <MediaFrame className="absolute inset-6" label="3D 模型 · 拖拽旋转 / 滚轮缩放" />
          </div>

          {/* 参数滑块 + 验证摘要 */}
          <div className="grid grid-cols-2 gap-4 border-t border-border p-4">
            <div>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">参数调整</p>
              {[{ l: "厚度", v: "4mm", p: "40%" }, { l: "孔径", v: "M4", p: "55%" }, { l: "圆角", v: "2mm", p: "25%" }].map((s) => (
                <div key={s.l} className="mb-2.5">
                  <div className="mb-1 flex justify-between text-xs"><span className="text-muted-foreground">{s.l}</span><span className="font-medium text-cad">{s.v}</span></div>
                  <div className="h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-cad" style={{ width: s.p }} /></div>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">可制造性检查</p>
              <div className="space-y-1.5 text-xs">
                {[{ l: "壁厚", ok: true }, { l: "水密性", ok: true }, { l: "公差", ok: true }, { l: "悬垂角度", ok: false }].map((c) => (
                  <div key={c.l} className="flex items-center justify-between rounded-md bg-secondary/50 px-2.5 py-1.5">
                    <span className="text-muted-foreground">{c.l}</span>
                    {c.ok ? (
                      <span className="flex items-center gap-1 text-cad"><ShieldCheck className="size-3" />通过</span>
                    ) : (
                      <span className="flex items-center gap-1 text-credit"><AlertTriangle className="size-3" />建议优化</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
