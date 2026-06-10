import { Search, Bell, MessageCircle, Plus, Sparkles, Box } from "lucide-react"
import { Tag } from "./kit"
import { cn } from "@/lib/utils"

export function TopNav({ active }: { active?: string }) {
  const items = [
    { key: "home", label: "首页" },
    { key: "explore", label: "探索" },
    { key: "community", label: "社区" },
  ]
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/80 px-5 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-ai to-cad text-white">
          <Box className="size-4" />
        </div>
        <span className="text-base font-semibold tracking-tight">MakeBetter</span>
      </div>

      {/* 主导航 */}
      <nav className="ml-2 hidden items-center gap-1 md:flex">
        {items.map((it) => (
          <span
            key={it.key}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition",
              active === it.key ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {it.label}
          </span>
        ))}

        {/* CAD Agent — 产品核心，蓝色高亮 + NEW */}
        <span
          className={cn(
            "relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition",
            active === "cad" ? "bg-cad/15 text-cad" : "text-cad hover:bg-cad/10",
          )}
        >
          <Box className="size-3.5" />
          CAD Agent
          <Tag tone="new" className="ml-0.5 px-1 py-0">
            NEW
          </Tag>
        </span>

        {/* AI 创作工坊 — 紫色渐变 */}
        <span
          className={cn(
            "relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition",
            active === "studio" ? "bg-ai/15 text-ai" : "ai-gradient-text hover:bg-ai/10",
          )}
        >
          <Sparkles className="size-3.5 text-ai" />
          AI 创作工坊
        </span>
      </nav>

      {/* 搜索框 */}
      <div className="ml-auto hidden min-w-0 flex-1 items-center md:flex md:max-w-xs">
        <div className="flex h-9 w-full items-center gap-2 rounded-lg border border-input bg-secondary/40 px-3 text-sm text-muted-foreground">
          <Search className="size-4 shrink-0" />
          <span className="truncate">搜索模型、风格、创作者、Prompt…</span>
        </div>
      </div>

      {/* 右侧功能区 */}
      <div className="flex items-center gap-2">
        {/* 积分 */}
        <span className="hidden items-center gap-1 rounded-lg bg-credit/15 px-2.5 py-1.5 text-xs font-semibold text-credit sm:flex">
          <span className="inline-block size-3.5 rounded-full bg-credit" />
          162
        </span>
        {/* 充值 */}
        <span className="hidden rounded-lg bg-credit px-3 py-1.5 text-xs font-semibold text-credit-foreground sm:inline">
          充值
        </span>
        {/* 客服 */}
        <span className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-accent">
          <MessageCircle className="size-4" />
        </span>
        {/* 通知 */}
        <span className="relative grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-accent">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-destructive" />
        </span>
        {/* 发布 */}
        <span className="hidden items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background sm:flex">
          <Plus className="size-3.5" />
          发布
        </span>
        {/* 反馈 */}
        <span className="hidden rounded-lg px-2 py-1.5 text-xs text-muted-foreground hover:bg-accent lg:inline">
          反馈
        </span>
        {/* 头像 */}
        <span className="size-9 rounded-full bg-gradient-to-br from-ai/60 to-cad/60" />
      </div>
    </header>
  )
}
