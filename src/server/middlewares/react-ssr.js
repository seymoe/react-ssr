import React from 'react'
import { StaticRouter, Route } from 'react-router'
import { renderToString} from 'react-dom/server'
//App 组件
import App from '../../client/router/index'
import routeList from '../../client/router/config'

export default (ctx,next)=>{
  //获得请求的 path
  const path = ctx.request.path
  //渲染组件为 html 字符串
  const html = renderToString(
    <StaticRouter location={path}>
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
    </body>
    </html>
    <script type="text/javascript" src="index.js"></script>
    `

    return next()
}