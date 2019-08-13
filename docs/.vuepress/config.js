
module.exports = {
    base: "/dashboard/",
    port: 8081,
    title: 'jSparrow Dashboard',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-144352955-2'
            }
        ],
        'mathjax'
    ],
    extendMarkdown(md) {
        toc: {
            includeLevel: [2, 3, 4]
        }
        externalLinks: {
            target: '_self'
        }
    }
};
