module.exports = [
	{
		text: "主页",
		link: "/",
	},
	{
		text: "网址导航",
		link: "/guide/links/",
	},
	{
		text: "学习笔记",
		children: [
			{
				text: "工具",
				children: [
					{ text: "Git", link: "/note/Git" },
				],
			},
			{
				text: "前端",
				children: [
					{ text: "Sass", link: "/note/Sass" },
					{ text: "VuePress2", link: "/note/VuePress" },
					{ text: "Vue@next", link: "/note/Vue@next" },
					{ text: "React", link: "/note/React" },
					{ text: "Electron", link: "/note/Electron" },
				],
			},
			{
				text: "后端",
				children: [
					{ text: "Node", link: "/note/Node" },
					{ text: "MongoDB", link: "/note/MongoDB" },
				],
			},
			{
				text: "实用插件",
				children: [
					{ text: "Moment", link: "/tools/Moment" },
					{ text: "Vue Doc Preview", link: "/tools/VueDocPreview" },
					{ text: "Ace Editor", link: "/tools/AceEditor" },
				],
			},
		],
	},
	{
		text: "使用教程",
		children: [
			{
				text: "在线工具",
				children: [
					{ text: "微信对话生成", link: "/tools/Vue3WechatTool" },
				],
			},
		],
	},
	{
		text: "技术分享",
		children: [
			{
				text: "Javascript",
				children: [
					{ text: "开发技巧", link: "/share/javascript/JavascriptSkill" },
					{ text: "数据处理", link: "/share/javascript/JavascriptProcess" },
					{ text: "工具函数", link: "/share/javascript/JavascriptTool" },
				],
			},
			{
				text: "Css",
				children: [
					{ text: "样式Cool", link: "/share/css/generate" },
				],
			},
		],
	},
	{ text: "关于我", link: "https://ele-cat.gitee.io/home/" },
]