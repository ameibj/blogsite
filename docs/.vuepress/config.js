//const path = require("path");
// const sidebarConf = require("../../config/sidebarConf");

module.exports = {
    theme: 'reco', // 引用 https://vuepress-theme-reco.recoluan.com/ 主题
    title: '我的博客',
    description: '记录积累的点点滴滴',
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}],
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
        // ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    base: '/blogsite/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    themeConfig: {
        // 博客自定义主题设置
        type: 'blog',
        nav: [
            {text: '主页', link: '/'}, // 内部链接 以docs为根目录
            {text: 'TimeLine', link: '/timeLine/', icon: 'reco-date'},
            // 下拉列表
            {
                text: '博文',
                items: [
                    {
                        text: 'CSS相关',
                        link: '/accumulate/css/'
                    },
                    {
                        text: 'JS相关',
                        link: '/accumulate/js/'
                    },
                    {
                        text: '工具相关',
                        link: '/tools/'
                    }
                ]
            },
            {
                text:'音乐',
                link: '/music/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/ameibj'
            }
        ],
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: true, // 默认值：false
        sidebar: 'auto',
        valineConfig: {
            appId: 'kU3OFjUTaXwBXUiMqY9IwJzV-gzGzoHsz',// your appId
            appKey: 'p9mxPFMBaIBMwMW4jDlF3fky', // your appKey
            placeholder: '请说点什么吧！...',
            avatar: 'monsterid'
        },
        plugins: [
            [
                'register-components',
                {
                    name: 'MyAudio',
                    path: './components/MyAudio.vue'
                }]
        ]
    }
}
