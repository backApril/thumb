const router = require('koa-simple-router');
const request = require('request');
const rp = require('request-promise');
let route = router(_ => {
    _.get('/index/index/', async(ctx, next) => {
        ctx.body = await ctx.render('index.html');
    });
    _.get('/thumbup',async(ctx, next) => {
        ctx.body = await rp('http://localhost/firstweek/');
    });
});
module.exports = route;