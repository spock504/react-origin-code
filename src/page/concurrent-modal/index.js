import React,{ Component, ConcurrentMode } from 'react';
import { flushSync } from 'react-dom'
import '../../App.css'
export default class Comp extends Component {
  state = {
    async: true,
    num:1,
    length:1000,
  }
  componentDidMount() {
    this.interval = setInterval(()=>{
      this.updateNum()
    },200)
  }
  componentWillUnmount() {
    if(this.interval) {
      clearInterval(this.interval)
    }
  }

  updateNum() {
    const { num, async } = this.state
    const newNum = num === 3 ? 0 : num + 1;
    if (async) {
    //   异步
      this.setState({
        num: newNum,
      })
    } else {
      flushSync(() => {
        this.setState({
          num: newNum,
        })
      })
    }
  }

  changeInput(event) {
    this.setState({
      newContent:event.target.value
    })
  }

  render() {
    const {newContent} = this.state;
    return (
      <div>
        <input value={newContent} onChange={(event)=>{this.changeInput(event)}} />
        <h2>更新</h2>
        <Child />
      </div>
    )
  }

}

function Child (){
  return (
    <div>
      <ConcurrentMode>
        {(value) =>{return (<p>父组件传递下来的值:{value}</p>)}}
      </ConcurrentMode>
    </div>
  )
}
