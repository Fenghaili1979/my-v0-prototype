"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Layers, Sparkles, Monitor, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScreenViewer({
  id,
  title,
  subtitle,
  device = "desktop",
  prev,
  next,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  device?: "desktop" | "mobile"
  prev?: { id: string; title: string }
  next?: { id: string; title: string }
  children: React.ReactNode
}) {
  const [hifi, setHifi] = useState(true)

  return (
    <div className="min-h-screen bg-[oklch(0.12_0.01_277)]">
      {/* 顶部工具条 */}
      <div className="sticky top-0 z-50 flex h-14 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          原型导航
        </Link>

        <div className="hidden min-w-0 items-center gap-2 md:flex">
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">{id}</span>
          <span className="truncate text-sm font-medium text-foreground">{title}</span>
          {subtitle ? (
            <span className="hidden truncate text-xs text-muted-foreground lg:inline">· {subtitle}</span>
          ) : null}
        </div>

        {/* 保真度切换 */}
        <div className="ml-auto flex items-center gap-1 rounded-xl border border-border bg-secondary/50 p-1">
          <button
            onClick={() => setHifi(false)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",
              !hifi ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Layers className="size-3.5" />
            低保真灰模
          </button>
          <button
            onClick={() => setHifi(true)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition",
              hifi ? "bg-ai text-ai-foreground shadow" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Sparkles className="size-3.5" />
            高保真
          </button>
        </div>
      </div>

      {/* 画布 */}
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          {device === "desktop" ? <Monitor className="size-3.5" /> : <Smartphone className="size-3.5" />}
          <span>{device === "desktop" ? "桌面端 · 1280px 视口示意" : "移动端 · 390px 视口示意"}</span>
          <span className="ml-2 rounded bg-muted px-1.5 py-0.5">
            当前：{hifi ? "高保真原型" : "低保真灰模（结构 / 信息层级）"}
          </span>
        </div>

        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-border bg-background shadow-2xl",
            !hifi && "wireframe",
            device === "mobile" && "mx-auto max-w-[420px]",
          )}
        >
          {children}
        </div>
      </div>

      {/* 上一页 / 下一页 */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 pb-12">
        {prev ? (
          <Link
            href={`/screen/${prev.id}`}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:bg-accent"
          >
            <ArrowLeft className="size-4 text-muted-foreground" />
            <span className="text-left">
              <span className="block text-xs text-muted-foreground">上一页 · {prev.id}</span>
              <span className="font-medium">{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/screen/${next.id}`}
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm transition hover:bg-accent"
          >
            <span className="text-right">
              <span className="block text-xs text-muted-foreground">下一页 · {next.id}</span>
              <span className="font-medium">{next.title}</span>
            </span>
            <ArrowLeft className="size-4 rotate-180 text-muted-foreground" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
