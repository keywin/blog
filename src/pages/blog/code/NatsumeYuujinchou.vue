<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class="detailCont tx-c">
			<p class="mt30">《夏目友人帐》是漫画家绿川幸著作的漫画。故事讲述了夏目贵志从外祖母夏目玲子的遗物中得到了那些由契约书所做成的“友人帐”，他决定将友人帐中妖怪们的名字一一归还。在夏目身边，开始聚集起各种各样的妖怪们。</p>
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