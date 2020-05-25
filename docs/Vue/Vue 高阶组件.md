# Vue 高阶组件

## Vue 无节点高阶组件(组件型)

### 何为高阶组件

高阶组件是对组件强化的一种方法（组件写法，但是我更愿意理解为是一种方法，return 出被强化后的组件），基本原则是：不破坏组件（若万不得已需要魔改，则建立普通组件一顿魔改。不建议高阶组件对原组件魔改）

### Vue 如何实现无节点组件

 ```js
export default {
    name:"define",
    render(h) {
        const vDom = this.$scopedSlots.default(this.$attrs);
        return vDom;
    },
}
 ```

### 使用案例：权限组件 `<auth>`

```vue
<template>
    <!-- 控制某按钮、图表等功能区块，仅对特定权限的人显示 -->
    <auth roleName="管理员">
        <div>
          管理员专用
        </div>
    </auth>
</template>
```

组件源码：

```js
export default {
  name: 'define',
  props: {
    menuId: {
      type: [String, Array],
      default: ''
    },
    roleId: {
      type: [String, Array],
      default: ''
    },
    roleName: {
      type: [String, Array],
      default: ''
    },
    type: {
      type: String,
      default: 'or' // or / and
    },
    reverse: { // 是否逆向权限判断（如果不包含传入的权限）
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loginState: login.state, // { menuTable: { [menuId]: 1 }, roleIdTable, roleNameTable }
      checkType: [
        {
          table: 'menuTable',
          prop: 'menuId'
        },
        {
          table: 'roleIdTable',
          prop: 'roleId'
        },
        {
          table: 'roleNameTable',
          prop: 'roleName'
        }
      ]
    };
  },
  computed: {
    hasAuthByOr() {
      if (this.type !== 'or') return false;
      let noneNum = 0; // 未配置权限的类型数量
      // 只要有任意一个配置了的权限符合 flag 就是 true
      const flag = this.checkType.some(item => {
        if (this[item.prop]) {
          // 如果配置了
          return this.hasItemByObjectKey(this[item.prop], this.loginState[item.table]);
        } else {
          noneNum += 1;
          return false;
        }
      });
      // 如果未匹配到权限，或 因为没有配置，则为true；
      return flag || (noneNum === this.checkType.length);
    },
    hasAuthByAnd() {
      // 只要每一个配置了的权限符合 flag 就是 true
      if (this.type !== 'and') return false;
      const flag = this.checkType.every(item => {
        if (this[item.prop]) {
          // 如果配置了
          return this.hasItemByObjectKey(this[item.prop], this.loginState[item.table]);
        }
        // 因为没有配置，则为 true
        return true;
      });
      // 如果未匹配到权限，或 因为没有配置，则为true；
      return flag;
    }
  },
  methods: {
    hasItemByObjectKey(arrOrStr, obj) {
      if (typeof arrOrStr === 'string') {
        arrOrStr = [arrOrStr];
      }
      return arrOrStr.some(str => obj[str]);
    }
  },
  render(h) {
    const vDom = this.$scopedSlots.default(this.$attrs);
    if (this.hasAuthByOr || this.hasAuthByAnd) {
      return this.reverse ? '' : vDom;
    }
    return this.reverse ? vDom : '';
  }
};
```

## Vue 无节点高阶组件(函数型)

> 参考：[Vue高阶组件](https://blog.csdn.net/z609373067/article/details/81258966)

```js
function Console (Base) {
  return {
    mounted () {
      console.log('haha')
    },
    props: Base.props,
    render (h) {
    // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        // 手动更正 context
        .map(vnode => {
          vnode.context = this._self //绑定到高阶组件上(默认 子组件找的是父组件)
          return vnode
        })

      return h(WrappedComponent, {
        on: this.$listeners,
        props: this.$props,
        attrs: this.$attrs
      }, slots)
    }
  }
}
```

使用：

```vue
<template>
  <div>
    <Base>
      <h2 slot="slot1">BaseComponent slot</h2>
      <p>default slot</p>
    </Base>
    <wrapBase>
      <h2 slot="slot1">EnhancedComponent slot</h2>
      <p>default slot</p>
    </wrapBase>
  </div>
</template>

<script>
  import Base from './Base.vue'
  import hoc from './Console.js'

  const wrapBase = Console(Base)

  export default {
    components: {
      Base,
      wrapBase
    }
  }
</script>
```
