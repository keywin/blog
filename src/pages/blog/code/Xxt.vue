<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class="music-bar" @click="musicCtro">
			<i class="music-icon" :class="{'pause': is_musicPlayed}"></i>
			<span class="music-desc">{{ detailData.source.desc }}</span>
			<audio  controls autoplay class="mt30" id="audio" ref="audio" :src="detailData.source.url" type="audio/mp3" />
		</div>
		<div class="imgFoo img_titl mt30" style="max-height: fit-content;">
			<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_08.png" width="100%" height="100%" alt="">
		</div>
		<div class="detailCont">
			<p class="mt30">一直对老房子老物件感兴趣</p>
			<p class="mt30">自从几年前在山间发现这件老学堂</p>
			<p class="mt30">一直念念不忘想去看看</p>
			<p class="mt30">再次拜访这破败的老房子</p>
			<p class="mt30">看这一草一木, 依然记得很清晰</p>
			<p class="mt30">正如老友相见让人心情愉快</p>
			<div class='imgFoo mt30' style="max-height: fit-content;">
				<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_10.jpg" alt="">
			</div>
			<p class="mt30 tx-r">几年前黑板上的字迹清晰可见</p>
			<p class="mt30 tx-r">由此追溯几十年前</p>
			<p class="mt30 tx-r">当年学堂里面的小主人们</p>
			<p class="mt30 tx-r">是怀着怎样的心情念完这最后一课</p>
			<div class='imgFoo mt30' style="max-height: fit-content;">
				<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_09.jpg" width="80%" alt="">
			</div>
			<p class="mt30">也许, 在最后一刻</p>
			<p class="mt30">你就在这窗前</p>
			<p class="mt30">凝视黑板的字眼, 不忍离去</p>
			<p class="mt30">而他在旁静静欣赏你那张深爱的脸, 不忍离去</p>
			<p class="mt30">啊哈, 瞎想的~</p>
			<div class='imgFoo mt30' style="max-height: fit-content;">
				<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_04.jpg" width="80%" alt="">
			</div>
			<p class="mt30">也许, 你们也曾在这磨盘上嬉戏打闹</p>
			<p class="mt30">谈天看地数星星</p>
			<p class="mt30">规划着属于你们的未来</p>
			<p class="mt30">黑板上刻画的就是你们的情书</p>
			<p class="mt30">可能你们还有约定</p>
			<p class="mt30">多少年后, 还要回到这里</p>
			<p class="mt30">在某个夜深人静的夜晚</p>
			<p class="mt30">在这磨盘上...</p>
			<div class='imgFoo mt30 tx-r' style="max-height: fit-content;">
				<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_03.jpg" width="80%" alt="">
			</div>
			<p class="mt30" style="display: inline-block;">过去了的, 就想这老房子</p>
			<p class="mt30" style="display: inline-block;">总有风化的那天</p>
			<p class="mt30" style="display: inline-block;">就让那些誓言</p>
			<p class="mt30" style="display: inline-block;">深埋在心底深处吧</p>
			<p class="mt30" style="display: inline-block;">回忆有痛苦,但总是甜的</p>
			<p class="mt30" style="display: inline-block;">时光不会因为你的喜好而停止</p>
			<p class="mt30" style="display: inline-block;">所以, 人总是应该不断调整自己</p>
			<p class="mt30" style="display: inline-block;">失去就失去吧</p>
			<p class="mt30" style="display: inline-block;">步履不停, 一半刚好</p>
			<div class='imgFoo mt30 tx-c' style="max-height: fit-content;">
				<img src="http://q4ujnj8md.bkt.clouddn.com/xxt_06.jpg" width="80%" alt="">
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