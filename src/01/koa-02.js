// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

//ctx上下文环境，封装request，response
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
    console.log(1);
});

app.use(async (ctx, next) => {
    await next(); // 调用下一个middleware
    console.log(2); // 打印URL
});

app.use(async (ctx, next) => {
    console.log(3); // 打印URL
    await next();
    console.log(4); // 打印URL
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');