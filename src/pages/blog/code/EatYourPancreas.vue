<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class="detailCont tx-c">
			<p class="mt30">电影《我想吃掉你的胰脏》由住野夜的畅销小说改编，讲述了“我”（北村匠海饰）因为偶然间捡到了同班同学山内樱良（滨边美波饰）的共病文库，而发现了她身患胰脏绝症的秘密，性格天差地别的两人也因此走近，发生了一系列感人的故事。在影片中，小栗旬饰演12年后的“我”，北川景子则饰演樱良好友恭子的成年时期。</p>
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