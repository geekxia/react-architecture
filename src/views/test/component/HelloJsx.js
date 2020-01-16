import React from 'react'

export default class HelloJsx extends React.Component {
  click() {
    console.log('子组件')
    this.props.click()
  }
  render() {
    let { title } = this.props
    return(
      <div>
        <h3 onClick={this.click.bind(this)} title={title}>hello jsx</h3>

      </div>
    )
  }
}
