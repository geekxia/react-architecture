import React from 'react'

export default class TestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '初始值'
    }
  }
  // 获取非受控表单的值
  getFormValue() {
    console.log('dom-get-vulue',document.getElementById('input').value)
    console.log('ref-get-value',this.refs.aaa.value)
  }

  // 获取受控表单的值
  getInputValue() {
    console.log('username', this.state.username)
  }
  // react表单数据都是单向绑定，即其值由state赋予，但是当表单发生变化时不能够更新到state中去。
  // 工作中，一定要使用受控表单，除了文件上传
  inputChnage(e) {
    console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>react 表单</h1>
        {/* 非受控表单：其value不受组件的state控制 */}
        {/* 在react开发中，尽量避免使用非受控表单 */}
        <input type="text" id='input' ref='aaa'/>
        <button onClick={this.getFormValue.bind(this)}>获取非受控表单的值</button>
        <hr/>
        {/* 文件上传表单，是仅有一种可被接受的非受控表单 */}
        <input type="file"/>

        <hr/>

        {/*受控表单：其value由组件的state来控制*/}
        <input type="text" value={this.state.username} onChange={this.inputChnage.bind(this)} />
        <button onClick={this.getInputValue.bind(this)}>获取受控表单的值</button>
      </div>
    )
  }
}
