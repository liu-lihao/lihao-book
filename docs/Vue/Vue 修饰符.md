# Vue 修饰符（都很简单，只做汇总）

## 事件修饰符

为 `v-on` or `@` 提供的修饰符：

* `.stop`

* `.prevent`

* `.capture`

* `.self`

* `.once`

* `.passive`

  `.passive` 修饰符能够提升移动端的性能。其让元素的 **直接执行其默认行为** ，和元素事件，而省去先通过元素事件判断是否阻止默认行为的判断逻辑。注：`.passive` 和 `.prevent` 冲突。

## 按键修饰符

为 `v-on` 在监听键盘事件时添加按键修饰符：

* `.enter`

* `.tab`

* `.delete`

  (捕获“删除 `delet`”和“退格 `←`”键)

* `.esc`

* `.space`

* `.up`

* `.down`

* `.left`

* `.right`

不建议直接使用`keyCode`，因为浏览器兼容问题，同样的 `keyCode` 在不同浏览器（如：IE9）可能代表不同按键。但是也可以自己处理不同 `keyCode` 的情况：

```js
// 在全局配置
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用（驼峰不可用）
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来（用全小写和减号间隔）
  "media-play-pause": 179,
  up: [38, 87]
}
```

```html
<input type="text" @keyup.media-play-pause="method">
```

## 系统修饰键

可以用如下修饰符来实现 **仅在按下相应按键时** 才触发鼠标或键盘事件的监听器。

* `.ctrl`

* `.alt`

* `.shift`

* `.meta`

  注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

* `.exact`

  `.exact` 的作用是精确判断系统修饰符的组合

  ```vue
  <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
  <button v-on:click.ctrl="onClick">A</button>
  
  <!-- 有且只有 Ctrl 被按下的时候才触发 -->
  <!-- 若同时按住 Alt 或 Shift 等其他修饰键，则不会触发 -->
  <button v-on:click.ctrl.exact="onCtrlClick">A</button>
  
  <!-- 没有任何系统修饰符被按下的时候才触发 -->
  <button v-on:click.exact="onClick">A</button>
  ```

## 鼠标按钮修饰符

这些修饰符会限制处理函数仅响应特定的鼠标按钮。

* `.left`
* `.right`
* `.middle`

## `.sync`修饰符

组件双向绑定神器，以弹框为例：

使用前：

```vue
//父组件
<pop :show="showFlag" @close="showFlag = false"></pop>
// pop 组件
<sctipt>
{
    methods: {
        handleClose() {
            this.$emit('close');
        }
    }
}
</sctipt>
```

使用后：

```vue
// 父组件
<pop :show.sync="showFlag"></pop>
// pop 组件
<sctipt>
{
    methods: {
        handleClose() {
            this.$emit('update:show', false);
        }
    }
}
</sctipt>
```

## 表单修饰符

* `.lazy`

  将 `v-model`的时时双向绑定，变为 `change` 事件之后同步。

* `.number`

* `.trim`
