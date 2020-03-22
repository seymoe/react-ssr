// 根据 path， 匹配路由
import { matchPath } from 'react-router'

export default (path, routeList) => {
  let route
  for (var item of routeList) {
    if (matchPath(path, item)) {
      route = item //查找到第一个路由后停止查找
      break
    }
  }
  return route
}
