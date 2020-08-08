# Vue 进阶

## Vue 父子组件生命周期

父组件在触发 `beforeMount` 后，再开始 *创建 -> 挂载* 子组件。

父组建： `beforeCreate` -> `created` -> `beforeMount`
子组件： -> `beforeCreate` -> `created` -> `beforeMount` -> `mounted`
父组件： -> `mounted`
总结：**从外到内，再从内到外**

## Vue 组件之间通信

* `props` / `$emit`
* `$attr` / `$listeners`
* `$parent` / `$children/ref`
* `provide` / `inject`
* Bus
* Vuex / `storage`