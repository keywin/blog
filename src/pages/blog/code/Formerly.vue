<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class="music-bar" @click="musicCtro">
			<i class="music-icon" :class="{'pause': is_musicPlayed}"></i>
			<span class="music-desc">{{ detailData.source.desc }}</span>
			<audio  controls autoplay class="mt30" id="audio" ref="audio" :src="detailData.source.url" type="audio/mp3" />
		</div>
		<div class="imgFoo img_titl mt30">
			<img src="http://q4ujnj8md.bkt.clouddn.com/3e8c384ad42b321f6b982221e4efd49.jpg" width="90%" height="300px" alt="">
		</div>
		<div class="detailCont tx-c">
			<p class="mt30">一直都想把过去的代码复习整理一下</p>
			<p class="mt30">以前在GitHub上创建了一堆半成品</p>
			<p class="mt30">每次都是兴致冲冲的整理几天</p>
			<p class="mt30">等那股劲儿过去了，就颓废了</p>
			<p class="mt30">虽然commit不少, 都拿不出手</p>
			<div class='imgFoo mt30'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200203155618.png" alt="">
			</div>
			<p class="mt30">虽然在有道云笔记上记录了不少东西</p>
			<p class="mt30">很多当时觉得很奇妙的代码或思想</p>
			<p class="mt30">让人兴奋很久</p>
			<p class="mt30">但回头再翻翻笔记</p>
			<p class="mt30">都是些简单到说不出口的东西。</p>
			<p class="mt30">在掘金上面学了不少东西</p>
			<p class="mt30">直到后来发现沸点[尬!]</p>
			<div class='imgFoo mt30'>
				<img src="http://q4ujnj8md.bkt.clouddn.com/bngdv1.jpg" width="80%" alt="">
			</div>
			<p class="mt30">过去以来</p>
			<p class="mt30">比较学生时代是有一点点进步</p>
			<p class="mt30">但更多的是颓废与迷茫</p>
			<p class="mt30">所以要做一些改变</p>
			<p class="mt30">毕竟过去都是假的~</p>
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
	data() {
		return {
			is_musicPlayed: true
		}
	},
	props: ['detailData'],
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