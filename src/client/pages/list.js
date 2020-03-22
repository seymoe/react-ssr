import React from "react"

const tempData = [
  {
    "title": "深入浅出TypeScript：从基础知识到类型编程",
    "desc": "Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。",
    "img": "https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
  }, {
    "title": "SVG 动画开发实战手册",
    "desc": "从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。",
    "img": "https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
  }, {
    "title": "预售JavaScript 设计模式核⼼原理与应⽤实践",
    "desc": "通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。",
    "img": "https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
  }
]

//组件
export default class List extends React.Component {
  constructor(props) {
    super(props)
    let initialData = {}
    if (props.staticContext) {
      initialData = props.staticContext
    } else if (props.initialData) {
      initialData = props.initialData
    }
    this.state = initialData
  }

  // 规定的数据预取方法
  static async getInitialProps() {
    //模拟数据请求方法
    const fetchData = () => {
      return new Promise(resolve=>{
        setTimeout(() => {
          resolve({
              code:0,
              data: tempData
          })
        }, 100)
      })
    }
    let res = await fetchData()
    return res
  }

  handlerClick() {
    alert("一起来玩 react ssr 呀。")
  }

  componentDidMount() {
    console.log('Did Mount!')
  }

  render() {
    const {data}=this.state

    return <div>
      <h1 onClick={this.handlerClick}>列表页</h1>
      <div className="list">
        {
          Array.isArray(data) ? data.map((item,index) => {
            return <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          }) : <div>暂无数据</div>
        }
      </div>
    </div>
  }
}
