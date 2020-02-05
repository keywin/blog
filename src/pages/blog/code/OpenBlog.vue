<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class='imgFoo mt30 tx-c'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/riben.png" width="80%" alt="">
			</div>
		<div class="detailCont">
			<p class="mt30 lh-max wp70" style="padding: 0 15%">看到朋友在写自己的博客，兴致突发，以前买的域名和服务器，得好好利用一下。前期准备是最艰难的，因为一直找不到自己喜欢的模板，花了几天就一直在找别人做好的网站，但都不是自己喜欢的风格。无意间，在swiper官网底部，看到日本网站链接（此处请勿想歪）！一下子柳暗花明，豁然开朗</p>
			<div class='imgFoo mt30 tx-c'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/wylp.png" alt="">
			</div>
			<p class="mt30 lh-max wp70" style="padding: 0 15%">简约却不简单，交互及体验极度舒适，其中可以看出这部分日本人，是极其注重内心感受的，人与人在情感上，是不分国界的。</p>
			<p class="mt30 lh-max wp70" style="padding: 0 15%">在查看了，这里有网站之后，选了两个网站作为模板，不是直接扒，而是参考着写，期间也参考了其他博客，总之，做出来的东西，交互及过渡效果不是很满意，但风格是很满意的。两个色值的背景，三个色值的文字颜色，就是这么简约</p>
			<div class='imgFoo mt30 tx-c'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/sjbz.png" width="50%" alt="">
			</div>
			<p class="mt30 lh-max wp70" style="padding: 0 15%">不到一个月的时间，整体工作已经没了。剩下的，详情页样式已经做好，就差cv内容了。</p>
			<p class="mt30 lh-max wp70" style="padding: 0 15%">PC和M站都适配了，期间还花一天时间对网站做了性能优化，加载速度提升了至少80%。</p>
			<div class='imgFoo mt30 tx-c'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/yhjl_02.png" width="50%" alt="">
			</div>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>今天 / {{ detailData.update }}</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span>{{ detailData.type }} # {{ detailData.fooTitl }}</span>
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
@import "./art.scss"
</style>