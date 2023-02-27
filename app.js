// app.js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();
router.post('/yf/data', async (ctx, next) => {
	let postData = "";                    // 用于存储post的数据
	ctx.req.on('data', function (data) {
		postData += data;                     // 将数据拼接起来
	})
	ctx.req.on('end', function () {        // 获取数据
		ctx.res.end('')
	})
	await next();
  console.log(postData + ' arrival time: ' + new Date());
	ctx.body = 'success'
})
app.use(router.routes());

module.exports = app;
