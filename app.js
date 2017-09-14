const koa = require('koa');
const path = require('path');
const render = require('koa-swig');
const server = require('koa-static');
const logger = require('koa-morgan');
const router = require('koa-simple-router');
const co = require('co');
let  indexrouter = require('./router/index');
let app = new koa();
app.use(logger('dev'));
app.use(server(path.join(__dirname ,'./public/')));
app.use(server(path.join(__dirname ,'./node_modules/')));
app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    wirteody: false
}));
app.use(indexrouter);
app.listen(3000, () => {
    console.log('server start...');
});
module.exports = app;