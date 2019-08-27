import React,{Component} from 'react';
import '../../App.css'
const {Provider, Consumer}  = React.createContext('default');
// content 的提供方和订阅方

export default class Comp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newContent: 'abc'
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
        <h2>提供方</h2>
        <input value={newContent} onChange={(event)=>{this.changeInput(event)}} />
        {/*
            Provider 需要包裹 子组件中使用Consumer
        */}
        <Provider value={newContent}>
          <h2>订阅方</h2>
          <Child />
        </Provider>
      </div>
    )
  }

}

function Child (){
    return (
      <div>
        <Consumer>
          {(value) =>{return (<p>父组件传递下来的值:{value}</p>)}}
        </Consumer>
      </div>
    )
}
