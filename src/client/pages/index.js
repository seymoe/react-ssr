import React from "react";

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  handlerClick() {
    alert("一起来玩 react ssr 呀。");
  }

  componentDidMount() {
    console.log('Did Mount!')
  }

  render() {
    return <h1 onClick={this.handlerClick}>一起来玩 react ssr 呀。</h1>
  }
}
