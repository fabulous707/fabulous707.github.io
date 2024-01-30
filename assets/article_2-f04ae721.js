import{A as e,b as n,c as t,i,f as m,F as s,e as o}from"./index-5bb2f0da.js";const p=`## 基于Vue开发的markdown编辑器组件 v-md-editor\r
\r
（该markdown编辑器组件也可用于渲染html文件）\r
\r
#### 官网\r
\r
[介绍 | v-md-editor (code-farmer-i.github.io)](https://code-farmer-i.github.io/vue-markdown-editor/zh/)\r
\r
#### 未引入编辑器\r
\r
渲染markdown文档，只需要引入preview来渲染组件\r
\r
\`\`\`javascript\r
// 预览组件以及样式\r
import VMdPreview from '@kangc/v-md-editor/lib/preview';\r
import '@kangc/v-md-editor/lib/style/preview.css';\r
// VuePress主题以及样式（这里也可以选择github主题）\r
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';\r
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';\r
\r
// Prism\r
import Prism from 'prismjs';\r
// 代码高亮\r
import 'prismjs/components/prism-json';\r
// 选择使用主题\r
VMdPreview.use(vuepressTheme, {\r
  Prism,\r
});\r
const app = createApp(App)\r
app.use(VMdPreview);\r
\`\`\`\r
\r
文本内容在data中\r
\r
\`\`\`vue\r
<template>\r
  <v-md-preview :text="markdown"></v-md-preview>\r
</template>\r
\r
<script>\r
export default {\r
  data() {\r
    return {\r
      markdown: '### 标题',\r
    };\r
  },\r
};\r
<\/script>\r
\`\`\`\r
\r
文本内容为外部文件\r
\r
\`\`\`vue\r
<template>\r
  <v-md-preview :text="article1"></v-md-preview>\r
</template>\r
\r
<script setup>\r
import article1 from "@public/essay/study/qianduan/路径动态引入失败vite版.md?raw"\r
<\/script>\r
\`\`\`\r
\r
\r
\r
#### 引入编辑器\r
\r
直接使用编辑器的预览模式来渲染\r
\r
\`\`\`vue\r
<template>\r
  <!-- vue2 -->\r
  <v-md-editor :value="markdown" mode="preview"></v-md-editor>\r
  <!-- vue3 -->\r
  <v-md-editor :model-value="markdown" mode="preview"></v-md-editor>\r
</template>\r
\r
<script>\r
export default {\r
  data() {\r
    return {\r
      markdown: '### 标题',\r
    };\r
  },\r
};\r
<\/script>\r
\`\`\`\r
\r
\`\`\`vue\r
<template>\r
  <div>前端篇</div>\r
  <v-md-editor v-model="text" height="200px"></v-md-editor>\r
</template>\r
\r
<script setup>\r
import { ref } from "vue";\r
import article1 from "@public/essay/study/qianduan/路径动态引入失败vite版.md?raw"\r
const text = ref('')\r
<\/script>\r
\r
<style>\r
\r
</style>\r
\`\`\`\r
\r
\`main.js\`文件\r
\r
\`\`\`js\r
// 预览组件以及样式\r
import VMdPreview from '@kangc/v-md-editor/lib/preview';\r
import '@kangc/v-md-editor/lib/style/preview.css';\r
// VuePress主题以及样式（这里也可以选择github主题）\r
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';\r
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';\r
// md编辑器\r
import VueMarkdownEditor from '@kangc/v-md-editor';\r
import '@kangc/v-md-editor/lib/style/base-editor.css';\r
// Prism\r
import Prism from 'prismjs';\r
// 代码高亮\r
import 'prismjs/components/prism-json';\r
// 选择使用主题\r
VMdPreview.use(vuepressTheme, {\r
  Prism,\r
});\r
\r
const app = createApp(App)\r
app.use(VMdPreview);\r
VueMarkdownEditor.use(vuepressTheme);\r
app.use(VueMarkdownEditor);\r
\`\`\`\r
\r
\r
\r
#### 解决vite报错（使用vite但似乎没遇到？）\r
\r
没遇到，但官网写了解决方法还是记录下\r
解决方法：在\`vite.config.js\`中添加代码\r
\r
\`\`\`js\r
export default {\r
  optimizeDeps: {\r
    include: ['@kangc/v-md-editor/lib/theme/vuepress.js'],\r
  },\r
};\r
\`\`\`\r
\r
----------补充-----------\r
\r
不引入编辑器（或不引入外部文件）不会报错，引入编辑器+外部文件需要在配置项中添加👆\r
\r
\r
\r
md文件外部引入，md文档内图片显示问题❓\r
\r
`,d=o("div",null,"前端篇",-1),l={__name:"article_2",setup(a){return(v,c)=>{const r=e("v-md-preview");return n(),t(s,null,[d,i(r,{text:m(p)},null,8,["text"])],64)}}};export{l as default};
