## Layout布局

#### 组件

1. `Layout`：布局容器，可嵌套`Header` `Sider` `Content` `Footer` `Layout`本身，也可以放在其他父容器中
2. `Header`：顶部布局，自带默认样式，可嵌套任何元素，但只能放在`Layout`中
3. `Sider`：侧边栏，自带默认样式和基本功能，可嵌套任何元素，但只能放在`Layout`中
4. `Content`：内容部分，自带默认样式，可嵌套任何元素，但只能放在 `Layout` 中。
5. `Footer`：底部分局，自带默认延时，可嵌套任何元素，但只能放在 `Layout` 中



#### 标签

`<a-layout>` `<a-layout-header>` `<a-layout-content>` `<a-layout-sider>`  `a-layout-footer`

❗❗`<a-layout-header>` `<a-layout-content>` `<a-layout-sider>`  `a-layout-footer` 都必须嵌套在`<a-layout>`使用

<img src="C:\0_my\my_blog\public\essay\study\qianduan\Layout布局.assets\image-20240126093610787.png" alt="image-20240126093610787" style="zoom:50%;" />



#### API

| 参数                 | 说明                                            | 类型                                         | 默认值 |
| -------------------- | ----------------------------------------------- | -------------------------------------------- | ------ |
| `breakpoint`         | 触发响应式布局的断点                            | Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' } | -      |
| `class`              | 容器class                                       | string                                       | -      |
| `collapsed(v-model)` | 当前收起状态                                    | boolean                                      | -      |
| `collapsedWidth`     | 收缩宽度，设置为0回出现特殊trigger              | number                                       | 80     |
| `collapsible`        | 是否可收起                                      | boolean                                      | false  |
| `defaultCollapsed`   | 是否默认可收起                                  | boolean                                      | false  |
| `reverseArrow`       | 翻转折叠提示箭头的方向，党Sider在右边时可以使用 | boolean                                      | false  |
| `style`              | 指定样式                                        | object                                       | string |
| `theme`              | 主题颜色                                        | string: light dark                           | dark   |
| `trigger`            | 自定义trigger，设置为null时隐藏rigger           | string                                       | slot   |
| `width`              | 宽度                                            | number                                       | string |

**事件**

| 事件名称         | 说明                                                         | 回调参数                  |
| ---------------- | ------------------------------------------------------------ | ------------------------- |
| `collapse`       | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | `(collapsed, type) => {}` |
| `breakpoint`     | 触发响应式布局断点时的回调                                   | `(broken) => {}`          |
| breakpoint width |                                                              |                           |



```vue
<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data(){
    return {
      collapsed: false,
    }
  },
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
```















