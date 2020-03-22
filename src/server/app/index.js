const Koa = require('koa')
const KoaStatic = require('koa-static')
const reactSsr = require('../middlewares/react-ssr').default
const app = new Koa()

app.use(KoaStatic('./dist/static'))

app.use(reactSsr)

app.listen(3000)

console.log('\nApp server at http://localhost:30000')
