import type React from "react"
import { cn } from "@/lib/utils"

/* ============ 媒体占位框（灰模下自动变虚线占位） ============ */
export function MediaFrame({
  className,
  label,
  children,
}: {
  className?: string
  label?: string
  children?: React.ReactNode
}) {
  return (
    <div
      data-media-frame
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-muted",
        className,
      )}
    >
      {children ?? (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
          {label ?? "预览"}
        </div>
      )}
    </div>
  )
}

/* ============ 标签 ============ */
export function Tag({
  tone = "neutral",
  children,
  className,
}: {
  tone?: "ai" | "cad" | "credit" | "laser" | "uv" | "neutral" | "hot" | "new"
  children: React.ReactNode
  className?: string
}) {
  const tones: Record<string, string> = {
    ai: "bg-ai/15 text-ai border border-ai/30",
    cad: "bg-cad/15 text-cad border border-cad/30",
    credit: "bg-credit/15 text-credit border border-credit/30",
    laser: "bg-destructive/15 text-destructive border border-destructive/30",
    uv: "bg-ai/15 text-ai border border-ai/30",
    neutral: "bg-muted text-muted-foreground border border-border",
    hot: "bg-destructive/20 text-destructive border border-destructive/40",
    new: "bg-cad/20 text-cad border border-cad/40",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ============ 区块标题 ============ */
export function SectionTitle({
  title,
  desc,
  action,
}: {
  title: string
  desc?: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        {desc ? <p className="mt-1 text-sm text-muted-foreground">{desc}</p> : null}
      </div>
      {action}
    </div>
  )
}

/* ============ 通用按钮（演示用，无跳转） ============ */
export function Btn({
  tone = "default",
  size = "md",
  children,
  className,
}: {
  tone?: "default" | "ai" | "cad" | "credit" | "ghost" | "outline" | "danger"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}) {
  const tones: Record<string, string> = {
    default: "bg-foreground text-background hover:opacity-90",
    ai: "bg-ai text-ai-foreground hover:opacity-90",
    cad: "bg-cad text-cad-foreground hover:opacity-90",
    credit: "bg-credit text-credit-foreground hover:opacity-90",
    ghost: "bg-transparent text-foreground hover:bg-accent",
    outline: "border border-border bg-transparent text-foreground hover:bg-accent",
    danger: "bg-destructive text-white hover:opacity-90",
  }
  const sizes: Record<string, string> = {
    sm: "h-8 px-3 text-xs",
    md: "h-9 px-4 text-sm",
    lg: "h-11 px-6 text-sm",
  }
  return (
    <span
      className={cn(
        "inline-flex select-none items-center justify-center gap-1.5 rounded-lg font-medium transition",
        tones[tone],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* ============ 输入框占位 ============ */
export function Field({
  label,
  placeholder,
  className,
}: {
  label?: string
  placeholder?: string
  className?: string
}) {
  return (
    <label className={cn("block", className)}>
      {label ? (
        <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      ) : null}
      <span className="flex h-10 w-full items-center rounded-lg border border-input bg-secondary/40 px-3 text-sm text-muted-foreground">
        {placeholder}
      </span>
    </label>
  )
}

/* ============ 开关占位 ============ */
export function Toggle({ on = false }: { on?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-5 w-9 items-center rounded-full p-0.5 transition",
        on ? "bg-ai" : "bg-muted",
      )}
    >
      <span className={cn("size-4 rounded-full bg-white transition", on ? "translate-x-4" : "")} />
    </span>
  )
}
