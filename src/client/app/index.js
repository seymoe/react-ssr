import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../router/index'
import routerList from '../router/config'

//渲染 index 组件 到页面
ReactDom.hydrate(
  <Router>
    <App routeList={routerList}></App>
  </Router>,
  document.getElementById('root')
)
