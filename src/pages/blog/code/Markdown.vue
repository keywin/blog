<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<!-- 使用指令 -->
		<!-- <h3 class="heading">一、简单使用(以登陆储存用户信息为例,支持刷新不丢状态)</h3> -->
		<p class="lineP">1. 引入及配置</p>
		<div v-highlight >
			<pre>
				<code class="js">
  
				</code>
			</pre>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>更新 / {{ detailData.update }}</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span>{{ detailData.type }} &amp;&amp; {{ detailData.fooTitl }}</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: ['detailData']
};
</script>
<style lang="scss" scoped>
@import "./code.scss"
</style>