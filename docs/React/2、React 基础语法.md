# React 基础语法

## jsx 最基本的写法

```jsx
// 动态style
const style = {
  fontSize: 1 + 1 + 40 + 'px',
  color: '#' + (333 + 111)
}
// 时间
const handleClickApp = (e) => {
  console.log('onClick', e);
}
// 列表
const list = ['llh', 'dandan'];

// 声明式组件
const app = (
  <div
    className="container"
    style={style}
    onClick={handleClickApp}
  >
    {/* 注释的写法 */}
    APP
    <ul>
      {
        list.map((item, index) => {
          return (
            <li key={index}>
              {item}
            </li>
          )
        })
      }
    </ul>
  </div>
)

ReactDOM.render(app, document.getElementById('app'));
```

## 组件，组件件通信，插槽

```jsx
// React 组件必须以首字母大写，即大驼峰方式命名！！！！
const ComponentOne = (props) => {
  console.log('ComponentOne props',props);
  return <div>component one, this 'num' = {props.num}</div>
}

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        component two
        <button 
          onClick={(e) => this.handleAddNumber(e)} // 既有event，又有this
          onMouseDown={this.handleMouseDown} // 有event，没this【undefined】
        >
          Add Number {this.state.count}
        </button>
        {/* 插槽 0 */}
        <div>Title: {this.props.children[0]}</div>
        {/* 插槽 1 */}
        <div>Content: {this.props.children[1]}</div>
      </div>
    )
  }
  handleAddNumber(e) {
    console.log('handleAddNumber',e, this);
    this.setState({
      count: this.state.count + 1
    });
  }
  handleMouseDown(e) {
    console.log('handleMouseDown',e, this);
  }
}



class ComponentThree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={()=>this.handleClick()}>
        组件三：我要改变组件四的数字
      </button>
    )
  }
  handleClick() {
    // 组件自定义事件传参
    this.props.onChange('e');
  }
}

class ComponentFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:888
    }
  }
  render() {
    return (
      <div>
        我是组件四，我的数字是：{this.state.num}
        <div>
          <ComponentThree onChange={(e) => {this.handleChange(e)}}></ComponentThree>
        </div>
      </div>
    )
  }
  handleChange(e) {
    console.log(e);
    this.setState({
      num: this.state.num * 2
    });
  }
}

ReactDOM.render((
  <div>
    <ComponentOne num={666}></ComponentOne>
    <ComponentTwo>
      <div>
        {/* 作为该组件的props.children[0] */}
        this is title of ComponentTwo 
      </div>
      <div>
        {/* 作为该组件的props.children[1] */}
        this is content of ComponentTwo 
      </div>
    </ComponentTwo>
    <ComponentFour></ComponentFour>
  </div>
), document.getElementById('app'));
```

