addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
    if (request.cf.country === 'CN') {
        return Response.redirect('openblockcc.gitee.io/wiki/zh', 302)
    } else {
        return Response.redirect('openblockcc.github.io/wiki/en', 302)
    }
}