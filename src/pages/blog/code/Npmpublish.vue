<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailTitl }}</h3>
		<!-- 使用指令 -->
		<p class="lineP">1. 结构说明</p>
		<div v-highlight >
			<pre>
				<code class="js">
 ├─ node_modules
 ├─ src
 │   ├─ components
 │   │   ├─ demo123456789.vue  !!!演示组件
 │   │   └─ index.js           !!!将该组件作为 Vue 插件
 ├─ package.json               !!!npm包配置文件,依赖包信息
 └─ webpack.config.js	       	 !!!配置文件
				</code>
			</pre>
		</div>
		<p class="lineP">2. 组件demo `demo123456789.vue`</p>
		<div v-highlight>
			<pre>
				<code class="vue">
  &lt;template&gt;
    &lt;div&gt;
      &lt;button @click="clickBtn()" v-html="text"&gt;&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
    export default({
        name:'demo123456789',
        props:['text'],
        methods:{
          clickBtn() {
            alert(this.text)
          }
        }
    })
  &lt;/script&gt;
				</code>
			</pre>
		</div>
		<p class="lineP">3. 抛出组件 `components/index.js`</p>
		<div v-highlight >
			<pre>
				<code class="js">
  import demo123456789 from './demo123456789'
  
  demo123456789.install = Vue => Vue.component(demo123456789.name, demo123456789)
  
  export default demo123456789
				</code>
			</pre>
		</div>
		<p class="lineP">4. package.json</p>
		<div v-highlight >
			<pre>
				<code class="json">
  {
    "name": "demo123456789", // 将来要npm i demo123456789
    "description": "A Vue.js project",
    "version": "1.0.0",
    "author": "keywin",
    "license": "MIT",
    "private": false, // 必须设置为false, 非私有
    "main": "dist/demo123456789.js", // 主文件
  }
				</code>
			</pre>
		</div>
		<p class="lineP">5. webpack.config.js</p>
		<div v-highlight >
			<pre>
				<code class="js">
  /** dist是打包以后生成的, 如果你按顺序执行本示例, 暂时还看不到dist文件夹, 可在打包后查看dist及详细 */
  var path = require('path')
  var webpack = require('webpack')
  
  const NODE_ENV = process.env.NODE_ENV
  
  module.exports = {
    entry: NODE_ENV == 'development' ? './src/main.js' : './src/components/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'demo123456789.js',
      library: 'demo123456789', // 指定的就是你使用require时的模块名
      libraryTarget: 'umd', // 指定输出格式
      umdNamedDefine: true
    },
    ...... // 下面的没做修改, 不做粘贴
  }
				</code>
			</pre>
		</div>
		<p class="lineP">6. npm发布</p>
		<div v-highlight >
			<pre>
				<code class="js">
  npm login
  
  // 输入账号-Username, 回车
  // 输入密码-Password, 回车, 密码没有显示区,
  // 输入邮箱-Email: (this IS public), 回车
  
  提示: Logged in as ***** on https://registry.npmjs.org/. 即正确
				</code>
			</pre>
		</div>
		<p class="lineP">7. 上传</p>
		<div v-highlight >
			<pre>
				<code class="js">
  npm publish
				</code>
			</pre>
		</div>
		<p class="lineP">8. 使用</p>
		<div v-highlight >
			<pre>
				<code class="js">
  npm i demo123456789

  // main.js
  import demo123456789 from 'demo123456789'
  Vue.use(demo123456789)

  // App.vue(任意组件都可使用)
  &lt;template&gt;
      &lt;demo123456789 :text="msg"&gt;&lt;/demo123456789&gt;
  &lt;/template&gt;
  &lt;script&gt;
  export default {
    data () {
      return {
        msg: 'asdsad'
      }
    }
  }
  &lt;/script&gt;
				</code>
			</pre>
		</div>
		<p class="lineP">7. 上传</p>
		<div v-highlight >
			<pre>
				<code class="js">
  npm publish
				</code>
			</pre>
		</div>
		<p class="lineP">9. 遇到的报错及原因</p>
		<div v-highlight >
			<pre>
				<code class="js">
  no_perms Private mode enable, only admin can publish this module
  // 镜像设置成淘宝镜像了，设置回来即可
  npm config set registry http://registry.npmjs.org
  
  npm publish failed put 500 unexpected status code 401
  // 一般是没有登录，重新登录一下 npm login 即可
  
  npm ERR! you do not have permission to publish “your module name”. Are you logged in as the correct user?
  // 包名被占用，改个包名即可。最好在官网查一下是否有包名被占用，之后再重命名
  
  you must verify your email before publishing a new package
  // 邮箱未验证，去官网验证邮箱
				</code>
			</pre>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>更新 / {{ update }}</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span>code &amp;&amp; 前端</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			aaa: 123
		}
	},
	props: ['detailTitl', 'update']
};
</script>
<style lang="scss" scoped>
@import "./code.scss"
</style>