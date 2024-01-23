## 基于Vue开发的markdown编辑器组件 v-md-editor

（该markdown编辑器组件也可用于渲染html文件）

#### 官网

[介绍 | v-md-editor (code-farmer-i.github.io)](https://code-farmer-i.github.io/vue-markdown-editor/zh/)

#### 未引入编辑器

渲染markdown文档，只需要引入preview来渲染组件

```javascript
// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});
const app = createApp(App)
app.use(VMdPreview);
```

文本内容在data中

```vue
<template>
  <v-md-preview :text="markdown"></v-md-preview>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### 标题',
    };
  },
};
</script>
```

文本内容为外部文件

```vue
<template>
  <v-md-preview :text="article1"></v-md-preview>
</template>

<script setup>
import article1 from "@public/essay/study/qianduan/路径动态引入失败vite版.md?raw"
</script>
```



#### 引入编辑器

直接使用编辑器的预览模式来渲染

```vue
<template>
  <!-- vue2 -->
  <v-md-editor :value="markdown" mode="preview"></v-md-editor>
  <!-- vue3 -->
  <v-md-editor :model-value="markdown" mode="preview"></v-md-editor>
</template>

<script>
export default {
  data() {
    return {
      markdown: '### 标题',
    };
  },
};
</script>
```

```vue
<template>
  <div>前端篇</div>
  <v-md-editor v-model="text" height="200px"></v-md-editor>
</template>

<script setup>
import { ref } from "vue";
import article1 from "@public/essay/study/qianduan/路径动态引入失败vite版.md?raw"
const text = ref('')
</script>

<style>

</style>
```

`main.js`文件

```js
// 预览组件以及样式
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// VuePress主题以及样式（这里也可以选择github主题）
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
// Prism
import Prism from 'prismjs';
// 代码高亮
import 'prismjs/components/prism-json';
// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)
app.use(VMdPreview);
VueMarkdownEditor.use(vuepressTheme);
app.use(VueMarkdownEditor);
```



#### 解决vite报错（使用vite但似乎没遇到？）

没遇到，但官网写了解决方法还是记录下
解决方法：在`vite.config.js`中添加代码

```js
export default {
  optimizeDeps: {
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],
  },
};
```

----------补充-----------

不引入编辑器（或不引入外部文件）不会报错，引入编辑器+外部文件需要在配置项中添加👆



md文件外部引入，md文档内图片显示问题❓

