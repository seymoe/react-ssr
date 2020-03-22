import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../router/index'
import routerList from '../router/config'
import matchRoute from '../../share/route-match'

function clientRender() {
  //初始数据
  let initialData =JSON.parse( document.getElementById('ssrTextInitData').value)
  //查找路由
  let route = matchRoute(document.location.pathname,routerList)
  //设置组件初始化数据 [关键点]
  route.initialData =initialData
  //渲染index
  ReactDom.hydrate(<Router>
    <App routeList={routerList}/>
  </Router>
  , document.getElementById('root'))
}

//渲染入口
clientRender()
