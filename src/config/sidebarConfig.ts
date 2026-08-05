import type { SidebarLayoutConfig } from "../types/config";

/**
 * 侧边栏布局配置
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 是否启用侧边栏功能
	enable: true,

	// 侧边栏位置：
	// left: 仅显示左侧边栏
	// right: 仅显示右侧边栏
	// both: 双侧边栏，1280px以上同时显示左右，769-1279px根据tabletSidebar配置显示其中一侧
	// 已将原左侧边栏的全部组件移动至右侧边栏，故调整为仅右侧栏（两栏布局：内容 + 右侧栏）
	position: "right",

	// 平板端(769-1279px)显示哪侧侧边栏，仅position为both时生效
	// left: 平板端显示左侧边栏
	// right: 平板端显示右侧边栏
	tabletSidebar: "right",

	// 使用单侧栏(position为left或right)时，是否在文章详情页显示双侧边栏
	// 当position为left时开启此项，文章详情页将额外显示右侧边栏
	// 当position为right时开启此项，文章详情页将额外显示左侧边栏
	// 适用在只想用单侧栏，但在文章详情页想用对侧栏的目录等组件的场景
	// 当前为仅右侧栏且左侧已清空，故关闭此项避免文章页出现空左侧栏
	showBothSidebarsOnPostPage: false,

	// 左侧边栏组件配置列表
	// 说明：原左侧边栏的全部组件（profile/announcement/music/categories/tags/advertisement）
	// 已整体移动至 rightComponents，故此处留空，布局退化为两栏（内容 + 右侧栏）。
	leftComponents: [],

	// 右侧边栏组件配置列表
	// 已由原左侧边栏组件（profile/announcement/music/categories/tags/advertisement）
	// 与原右侧边栏组件（stats/calendar/sidebarToc/advertisement）合并而成。
	// 渲染顺序：先原左侧组件，后原右侧组件。
	rightComponents: [
		{
			// 组件类型：用户资料组件（原左侧栏）
			type: "profile",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：公告组件（原左侧栏）
			type: "announcement",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：音乐播放器（原左侧栏）
			type: "music",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：分类组件（原左侧栏）
			type: "categories",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 响应式配置
			responsive: {
				// 折叠阈值：当分类数量超过>5个时自动折叠
				collapseThreshold: 5,
			},
		},
		{
			// 组件类型：标签组件（原左侧栏）
			type: "tags",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 响应式配置
			responsive: {
				// 折叠阈值：当标签数量超过>10个时自动折叠
				collapseThreshold: 10,
			},
		},
		{
			// 组件类型：广告栏组件 1（原左侧栏，默认关闭）
			type: "advertisement",
			// 是否启用该组件
			enable: false,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 配置ID：使用第一个广告配置
			configId: "ad1",
		},
		{
			// 组件类型：站点统计组件（原右侧栏）
			type: "stats",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "top",
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：日历组件（原右侧栏）
			type: "calendar",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: false,
		},
		{
			// 组件类型：侧边栏目录组件（只在文章详情页显示，原右侧栏）
			type: "sidebarToc",
			// 是否启用该组件
			enable: true,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 是否在非文章详情页显示
			showOnNonPostPage: false,
		},
		{
			// 组件类型：广告栏组件 2（原右侧栏，默认关闭）
			type: "advertisement",
			// 是否启用该组件
			enable: false,
			// 组件位置
			position: "sticky",
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 配置ID：使用第二个广告配置
			configId: "ad2",
		},
	],

	// 移动端底部组件配置列表
	// 这些组件只在移动端(<768px)显示在页面底部，独立于左右侧边栏配置
	mobileBottomComponents: [
		{
			// 组件类型：用户资料组件
			type: "profile",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：公告组件
			type: "announcement",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：音乐播放器
			type: "music",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
		{
			// 组件类型：分类组件
			type: "categories",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 响应式配置
			responsive: {
				// 折叠阈值：当分类数量超过5个时自动折叠
				collapseThreshold: 5,
			},
		},
		{
			// 组件类型：标签组件
			type: "tags",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
			// 响应式配置
			responsive: {
				// 折叠阈值：当标签数量超过20个时自动折叠
				collapseThreshold: 20,
			},
		},
		{
			// 组件类型：站点统计组件
			type: "stats",
			// 是否启用该组件
			enable: true,
			// 是否在文章详情页显示
			showOnPostPage: true,
		},
	],
};
