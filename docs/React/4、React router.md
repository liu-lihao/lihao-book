# React router

一个单页应用一般只需要一个顶层的Router组件即可.

```jsx
import React, { Component } from 'react';
import {
  BrowserRouter as Router,  //使用as相当于重命名，如果需要从浏览器路由改成HasRouter只需要在这里把BrowserRouter改成HasRouter就可以了，其他地方还是使用Router包着不需要改变
  Switch,  //和js里面的switch语法差不多，这个是用来判断路由地址
  Route,  //用来路由的
  Redirect,  //重定向，用来判断用户输入的地址是否满足条件，不满足就重定向到xxx页面
} from "react-router-dom";
export default class RouteComponent extends Component {
  render() {
    return (
      <Router>
        <Switch>  //Switch包在Route的外面，作用是只匹配一个路由
          <Route
            path="/admin"  //只要匹配到的路由包含此path就会走进来
            render={(appProps) => {  //Route渲染组件可以使用也可以使用component，根据实际状况使用
              if (this.props.hasLogin === true) { //如果是已登录的那就返回App组件
                return <App {...appProps} />
              } else {  //如果没有登录就重定向到login页面
                return <Redirect to='/login' />
              }
            }}
          />
          <Route
            path='/login'
            component={Login} //在上方需要引入该组件
          />
          <Route
            path='/404'
            component={NotFound}
          />
          <Redirect to='/admin' from='/' exact /> {/* exact代表绝对匹配，只有绝对匹配from里面的地址的时候才会重定向到to的页面,使用场景：一般俩个Route组件的path有包含关系的时候，就会在短的这个path上加exact。*/}
          <Redirect to='/404' />  {/*如果上面的都不符合就重定向到404页面*/}
        </Switch>
      </Router>
    )
  }
}
```

* 不应该在同一个route上同时使用component和render渲染，component的优先级要高于render，如果同时使用，render会被忽略

* Link组件

```jsx
< Link to="/home">Home</Link>
```

* NavLink组件

```jsx
<NavLink activeClassName="">Active</NavLink>
```

Link和NavLink的区别就是一个点击的时候进行跳转，另一个点击之后还会额外加一个类名，可以控制样式。
如果要更改class名的话就用activeClassName=“xxx”
