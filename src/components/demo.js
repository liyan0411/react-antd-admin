import React,{Component} from "react"

class Example extends Component {
    // 静态属性
    static defaultProps = {}

    // 构造函数
    constructor(props) {
        super(props);
        this.state={}
    }

    // 声明周期钩子函数
    // 按照它们执行的顺序
    // 1. componentWillMount
    // 2. componentWillReceiveProps
    // 3. shouldComponentUpdate
    // 4. componentDidMount
    // 5. componentDidUpdate
    // 6. componentWillUnmount
    componentDidMount() {  }

    // 事件函数/普通函数
    handleClick = (e) => {  }

    // 最后，render 方法
    render() {
      return (
        <div>
          组件的代码顺序
        </div>
      )
    }
}
export default Example;
