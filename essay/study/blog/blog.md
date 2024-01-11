## 亿些些问题——Vue3博客篇

#### 💡v-for动态引入图片失败（vue3+vite）

🎈实质静态资源处理问题，解决方案👇

1. ##### 将资源引入为URL（单个资源）

   服务时引入一个静态资源回返回解析后的公共路径

   ```js
   import imgUrl from './img.png'
   document.getElementById('hero-img').src = imgUrl
   ```

   🌰`imgUrl` 在开发时会是 `/img.png`，在生产构建后会是 `/assets/img.2d8efhg.png`

   - 显式URL引入

     未被包含在内部列表或 assetsInclude 中的资源，可以使用 ?url 后缀显式导入为一个 URL。这十分有用，例如，要导入 Houdini Paint Worklets 时：

     ```js
     import workletURL from 'extra-scalloped-border/worklet.js?url'
     CSS.paintWorklet.addModule(workletURL)
     ```

     

   - 将资源引入为字符串

     资源可以使用 `?raw` 后缀声明作为字符串引入

     ```js
     import shaderString from './shader.glsl?raw'
     ```

     

   - 导入脚本作为Worker

     脚本可以通过 `?worker` 或 `?sharedworker` 后缀导入为 web worker

     ```js
     // 在生产构建中将会分离出 chunk
     import Worker from './shader.js?worker'
     const worker = new Worker()
     ```

     ```js
     // sharedworker
     import SharedWorker from './shader.js?sharedworker'
     const sharedWorker = new SharedWorker()
     ```

     ```js
     // 内联为 base64 字符串
     import InlineWorker from './shader.js?worker&inline'
     ```

     

   ❗`public`目录，如果有以下👇资源：

   - 不会被源码引用（例如 `robots.txt`）
   - 必须保持原有文件名（没有经过 hash）
   - ...或者你压根不想引入该资源，只是想得到其 URL

   👆可以将资源放在指定`public`目录中，它应位于项目根目录。该目录中的资源在开发中能直接通过`/`跟路径访问到，并且打包时会被完整复制到目标目录的根目录下。默认根目录为`<root>/public`，但也可以在配置文件中进行相关配置改变根目录。

   ❗❗`public`相关注意项：

   - 引入 `public` 中的资源永远应该使用根绝对路径 —— 🌰，`public/icon.png` 应该在源码中被引用为 `/icon.png`

   - `public` 中的资源不应该被 JavaScript 文件引用

     

2. ##### new URL(url,import,meta.url) ❕❕❕解决动态引入多张图片失败

   import.meta.url 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 URL 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：

   ```js
   const imgUrl = new URL('./img.png', import.meta.url).href
   
   document.getElementById('hero-img').src = imgUrl
   ```

   这在现代浏览器中能够原生使用 - 实际上，Vite 并不需要在开发阶段处理这些代码！这个模式同样还可以通过字符串模板支持动态 URL😍：

   ```js
   function getImageUrl(name) {
     return new URL(`./dir/${name}.png`, import.meta.url).href
   }
   ```

   在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。然而，这个 URL 字符串必须是静态的，这样才好分析。否则代码将被原样保留、因而在 `build.target` 不支持 `import.meta.url` 时会导致运行时错误❗

   ```js
   // Vite 不会转换这个
   const imgUrl = new URL(imagePath, import.meta.url).href
   ```

   `import.meta.url`指向当前文件的目录

   有个疑惑❓，不知道为什么动态URL失效，显示404，所以就直接没用动态，直接写的路径🙃