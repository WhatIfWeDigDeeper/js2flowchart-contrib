require('babel-register');
const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'Koa says hi';
});

const port = process.env.PORT || (process.argv[2] || 3000);
if (!module.parent) {
  app.listen(port);
  console.log(`app listening on port ${port}`);
}

module.exports.app = app;
