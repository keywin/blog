<template>
  <div class="detail detail_col">
		<h3 class="titl">{{ detailData.titl }}</h3>
		<div class="detailCont tx-c">
			<p class="mt30">关于共病文库相关内容</p>
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