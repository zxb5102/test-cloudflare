const http = require('http');

const server = http.createServer((req, resp) => {
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', '*');
    resp.setHeader('Access-Control-Allow-Headers', "*");
    resp.end(JSON.stringify({
        code: 0,
        list: Array.from({ length: 10 }).map((_, dex) => {
            return {
                dex: dex
            }
        })
    }));
})

server.listen(3003);