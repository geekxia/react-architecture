import React from 'react'

class Child extends React.Component {

  clickHandle() {
    // 通过自定义事件，向父组件传值
    this.props.hello('hello test-props')
  }

  render() {
    console.log('child props', this.props)
    return (
      <div>
        <h3>子组件</h3>
        <h3 onClick={this.clickHandle.bind(this)}>{this.props.msg}</h3>
      </div>
    )
  }
}

export default Child
