
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
    extendMarkdown(md) {
        toc: {
            includeLevel: [2, 3, 4]
        }
        externalLinks: {
            target: '_self'
        }
    }
};
