export type ScreenMeta = {
  id: string
  num: string
  title: string
  desc: string
  group: "核心" | "账户与交易" | "弹窗与状态"
  device?: "desktop" | "mobile"
}

// 23 个页面 + 文档，单一数据源
export const screens: ScreenMeta[] = [
  { id: "login", num: "01", title: "登录页", desc: "左右分栏，品牌展示 + 登录表单", group: "账户与交易" },
  { id: "register", num: "02", title: "注册页", desc: "左右分栏，品牌展示 + 注册表单", group: "账户与交易" },
  { id: "home", num: "03", title: "首页", desc: "CAD Agent 第一叙事 + AI 工坊 + 分轨精选", group: "核心" },
  { id: "explore", num: "04", title: "探索页", desc: "双轨切换 + 每日热榜聚合 + 三层筛选", group: "核心" },
  { id: "studio", num: "05", title: "AI 创作工坊（激光）", desc: "设置 + 预览 + 统一 AI 助手轴", group: "核心" },
  { id: "cad-agent", num: "06", title: "CAD Agent", desc: "对话 + 3D 预览 + 可制造性验证", group: "核心" },
  { id: "community", num: "07", title: "社区页", desc: "创作挑战 + 双轨动态流 + 创作者生态", group: "核心" },
  { id: "publish", num: "08", title: "发布页", desc: "类型选择 + 文件上传 + 信息填写", group: "账户与交易" },
  { id: "model-detail", num: "09", title: "模型详情页", desc: "画廊 + 分轨参数卡 + 评论", group: "核心" },
  { id: "profile", num: "10", title: "个人中心", desc: "个人信息 + 作品 Tab + 积分入口", group: "账户与交易" },
  { id: "notifications", num: "11", title: "消息通知", desc: "分类 Tab + 通知列表", group: "账户与交易" },
  { id: "settings", num: "12", title: "账户设置", desc: "个人信息 + 隐私 + AI 统计 + 危险区域", group: "账户与交易" },
  { id: "credits", num: "13", title: "积分中心", desc: "余额 + 充值套餐 + 使用记录", group: "账户与交易" },
  { id: "nav-studio", num: "14", title: "导航 Hover：AI 工坊", desc: "4 功能卡片 + 预览 GIF", group: "弹窗与状态" },
  { id: "nav-cad", num: "15", title: "导航 Hover：CAD Agent", desc: "视频演示 + 特性 + 体验按钮", group: "弹窗与状态" },
  { id: "search", num: "16", title: "搜索框展开", desc: "输入 + 热门搜索 + 搜索历史", group: "弹窗与状态" },
  { id: "user-menu", num: "17", title: "用户菜单下拉", desc: "用户信息 + 菜单项", group: "弹窗与状态" },
  { id: "support", num: "18", title: "客服浮窗", desc: "AI / 人工 / 反馈 Tab + 对话", group: "弹窗与状态" },
  { id: "report", num: "19", title: "举报弹窗", desc: "原因选择 + 补充说明", group: "弹窗与状态" },
  { id: "onboarding", num: "20", title: "新手引导", desc: "5 步引导 + 功能演示", group: "弹窗与状态" },
  { id: "feedback", num: "21", title: "反馈弹窗", desc: "类型选择 + 描述 + 截图", group: "弹窗与状态" },
  { id: "category", num: "22", title: "探索分类下拉", desc: "All Categories 二级分类", group: "弹窗与状态" },
  { id: "ai-params", num: "23", title: "AI / CAD 参数详情弹窗", desc: "分轨参数 + 操作按钮", group: "弹窗与状态" },
]

export function getScreen(id: string) {
  return screens.find((s) => s.id === id)
}
export function getNeighbors(id: string) {
  const i = screens.findIndex((s) => s.id === id)
  return {
    prev: i > 0 ? screens[i - 1] : undefined,
    next: i < screens.length - 1 ? screens[i + 1] : undefined,
  }
}
