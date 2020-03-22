import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString} from 'react-dom/server'
//App 组件
import App from '../../client/router/index'
import routeList from '../../client/router/config'
import matchRoute from '../../share/route-match'

export default async (ctx,next)=>{
  //获得请求的 path
  const path = ctx.request.path

  // 根据路径查找到对应路由组件，调用 getInitialProps 方法进行数据预取
  let targetRoute = matchRoute(path, routeList)
  let fetchResult = {}
  if (targetRoute && targetRoute.component) {
    let fetchDataFn = targetRoute.component.getInitialProps
    if (fetchDataFn) {
      fetchResult = await fetchDataFn()
    }
  }

  //将预取数据在这里传递过去 组内通过props.staticContext获取
  const context = {
    initialData: fetchResult
  }

  console.log('数据预取：', context)

  //渲染组件为 html 字符串
  const html = renderToString(
    <StaticRouter location={path} context={context}>
      <App routeList={routeList}></App>
    </StaticRouter>
  )
  ctx.body=`<!DOCTYPE html>
    <html lang="zh_cn">
    <head>
      <meta charset="UTF-8">
      <title>react ssr demo</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <textarea id="ssrTextInitData" style="display:none">${JSON.stringify(fetchResult)}</textarea>
    </body>
    </html>
    <script type="text/javascript" src="index.js"></script>
    `

    return next()
}