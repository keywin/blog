<template>
  <div class="detail detail_col">
		<h3 class="titl">Vuex及模块化</h3>
		<!-- <div class="imgFoo img_titl">
			<img src="https://itukanokoto.com/wp/wp-content/uploads/2019/04/ieto19041802-534x667.jpg" alt="">
		</div>
		<div class="detailCont">
			<p>怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？</p>
			<div class='imgFoo'>
				<img src="https://itukanokoto.com/wp/wp-content/uploads/2019/05/asa19050707-768x512.jpg" alt="">
			</div>
			<p>怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？</p>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>今天 / 2020.01.18</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span># 一日照片</span>
			</p>
		</div> -->
		<!-- 使用指令 -->
		<h3 class="heading">一、简单使用(以登陆储存用户信息为例,支持刷新不丢状态)</h3>
		<p class="lineP">1. 引入及配置</p>
		<div v-highlight >
			<pre>
				<code class="js">
  //下载依赖
  npm i vuex
  //配置 main.js
  import store from './vuex/store.js'
  
  new Vue({
      el: '#app',
      router,
      store, // 将store暴露出来
      components: { App },
      template: '&lt;App/&gt;'
  })
				</code>
			</pre>
		</div>
		<p class="lineP">2. './vuex/store.js'</p>
		<div v-highlight >
			<pre>
				<code class="js">
  import Vue from 'vue'
  import Vuex from 'vuex'
  
  //定义状态值
  const state = {
      // 初次-刷新页面, 定义状态, 从缓存中读取用户信息数据
      userInfo: JSON.parse(sessionStorage.getItem('userinfo'))  
  }

  //方法用来改变状态
  const mutations = {
      //修改用户信息状态的方法, data: 传过来的值
      SAVE_USERINFO (state, data) {
          //存储新数据, 防止因刷新导致数据丢失
          sessionStorage.setItem('userinfo', JSON.stringify(data))  
          //手动修改state中, userInfo 的值
          state.userInfo = data
      }
  }

  const actions = {}

  const getters = {}

  export default new Vuex.Store({
      state,
      mutations,
      actions,
      getters
  })
				</code>
			</pre>
		</div>
		<p class="lineP">3. 登陆时提交修改</p>
		<div v-highlight >
			<pre>
				<code class="js">
  this.$axios.post('/api/login').then(res => {
      this.$store.commit('SAVE_USERINFO', res.data)  
  })
				</code>
			</pre>
		</div>
		<p class="lineP">4. 使用</p>
		<div v-highlight >
			<pre>
				<code class="vue">
  <p v-html="'  {{ $store.state.userInfo.username }}'"></p>  
				</code>
			</pre>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>更新 / 2020.01.27</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span>code &amp;&amp; 前端</span>
			</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import "./code.scss"
</style>