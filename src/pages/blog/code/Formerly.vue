<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailTitl }}</h3>
		<div id="music-bar" @click="musicCtro">
			<i class="music-icon" :class="{'pause': is_musicPlayed}"></i>
			<span class="music-desc">{{ source.desc }}</span>
			<audio  controls autoplay class="mt30" id="audio" ref="audio" :src="source.url" type="audio/mp3" />
		</div>
		<div class="imgFoo img_titl mt30">
			<img src="http://q4ujnj8md.bkt.clouddn.com/3e8c384ad42b321f6b982221e4efd49.jpg" width="90%" height="300px" alt="">
		</div>
		<div class="detailCont tx-c">
			<p class="mt30">一直都想把过去的代码复习整理一下</p>
			<p class="mt30">结果是GitHub上创建了一堆半成品项目</p>
			<p class="mt30">每次都是兴致冲冲的整理几天</p>
			<p class="mt30">等那股劲儿过去了，就颓废了</p>
			<p class="mt30">commit记录不少</p>
			<p class="mt30">真正有用的东西却拿不出来。</p>
			<div class='imgFoo mt30'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200203155618.png" alt="">
			</div>
			<p class="mt30">虽然在有道云笔记上记录了不少东西</p>
			<p class="mt30">很多当时觉得很奇妙的代码或思想</p>
			<p class="mt30">都能让人兴奋很多天</p>
			<p class="mt30">巴不得让身边朋友都知道这个东西</p>
			<p class="mt30">回头再翻翻笔记</p>
			<p class="mt30">感觉这些东都简单到说不出口。</p>
			<p class="mt30">最终跳到掘金, 在上面学了不少东西</p>
			<p class="mt30">但发现了沸点以后, 从此一发不可收拾</p>
			<p class="mt30">花在摸鱼的时间较看文章多的不止一点点</p>
			<p class="mt30">沦为一沸鱼</p>
			<div class='imgFoo mt30'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/bngd.jpg" width="80%" alt="">
			</div>
			<p class="mt30">总之，过去以来</p>
			<p class="mt30">比较学生时代进步是有一点点</p>
			<p class="mt30">但更多的是颓废与迷茫</p>
			<p class="mt30">所以, 需要做一些改变</p>
			<p class="mt30">过去都是假的，唯有未来，才是真正。</p>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>今天 / {{ update }}</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span># 一日照片</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			is_musicPlayed: true
		}
	},
	props: ['detailTitl', 'update', 'source'],
	methods: {
		musicCtro() {
			this.is_musicPlayed = !this.is_musicPlayed
			this.is_musicPlayed ? this.$refs.audio.play() : this.$refs.audio.pause()
		}
	}
};
</script>
<style lang="scss" scoped>
@import "./art.scss";
</style>