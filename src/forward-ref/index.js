import React,{Component} from 'react';

const TargetComponent  = React.forwardRef((props,ref) => {
  return (
    <input type="text" ref={ref} />
  )
});

export default class Comp extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.current.value = 'get currents ref'  // 页面挂载之后赋值
  }

  render() {
    return (
      <TargetComponent  ref={this.ref} />
    )
  }

}
