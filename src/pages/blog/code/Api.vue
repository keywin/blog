<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailTitl }}</h3>
		<!-- 使用指令 -->
		<h3 class="heading">一、Api模块化</h3>
		<p class="lineP">1. 结构说明</p>
		<div v-highlight >
			<pre>
				<code class="js">
 ├─ src
 │   ├─ api
 │   │   ├─ apiModel
 │   │   │   ├─ model_01.js
 │   │   │   └─ model_02.js
				</code>
			</pre>
		</div>
		<p class="lineP">2. @/api/apiModel/model_01.js</p>
		<div v-highlight >
			<pre>
				<code class="js">
  // 封装的axios
  import {http_axios} from '../httpAxios'
  
  export const API_MODEL1_testData = parmas => http_axios('/testData.json').then((res) => {
    if(res.status) {
        return res.data
    }
  })
				</code>
			</pre>
		</div>
		<p class="lineP">3. 在对应页面中引入</p>
		<div v-highlight >
			<pre>
				<code class="vue">
  import {API_MODEL1_testData} from './api/apiModel/model_01.js'

  API_MODEL1_testData().then(res => {
  	console.log(res)
  })
				</code>
			</pre>
		</div>
		<h3 class="heading">二、组件自动引入</h3>
		<p class="lineP">1. main.js</p>
		<div v-highlight >
			<pre>
				<code class="vue">
  // 获取 '@/components' 中全部以 'Base' 开头的组件
  const requireComponents = require.context('./components', true, /Base[a-zA-Z]+\.vue$/)
  requireComponents.keys().forEach(fileName => {
    // 例 fileName: "./BasePagination.vue"
    // 组件实例
    const reqCom = requireComponents(fileName)
    // 截取文件名作为组件名
    let reqComName = fileName.split('.vue')[0].split('/')
    // 考虑到可能存在文件夹/文件名的情况, 取最底级的文件名作为组件名
    reqComName = reqComName[reqComName.length - 1]
    // 组件挂载
    Vue.component(reqComName, reqCom.default || reqCom)
  })
				</code>
			</pre>
		</div>
		<p class="lineP">2. 直接使用, 不需要再引入</p>
		<div v-highlight >
			<pre>
				<code class="vue">
  // 例 components下有组件, 名曰 'BaseTest.vue'
  // 在Helloworld.vue中使用
  &lt;base-test&gt;&lt;/base-test&gt;
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
				<span>code &amp;&amp; 前端 &amp;&amp; vue  &amp;&amp;  axios</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: ['detailTitl', 'update'],
};
</script>
<style lang="scss" scoped>
@import "./code.scss"
</style>