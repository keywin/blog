<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 17:50:45
-- @script: com-header
-->
<template>
  <div class="header">
		<p class="search"></p>
		<h2>
			<img src="@/assets/img/blog/pic/微信图片_20200116111632.png" alt="" class="l">
			<img src="https://otonarisan.info/wp/wp-content/themes/otonarisan/assets/img/common/img_kinjiro.png" alt="" class="r">
		</h2>
		<p class="showAside" @click="showAsideClick"></p>
	</div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
			
		};
  },
  props: [],
  watch: {},
  computed: {},
  components: {
		
	},
  created() {},
  methods: {
	  showAsideClick() {
		  this.$store.commit('CHANGE_AISDESTATE', true)
	  }
  },
  mounted() {
		
	},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
/* 小屏 */
@media only screen and (max-width: 600px) {
	.header{
		display: flex;
		justify-content:space-between;
		height: 1.28rem;
		border-bottom: .01rem solid #e9e9eb;
		p{
			width: .6rem;
			height: .6rem;
			margin: .34rem .16rem 0;
			// &.search{
			// 	background: url('~@/assets/img/icon/search.svg') no-repeat center;
			// 	background-size: 100%;
			// }
			&.showAside{
				background: url('~@/assets/img/icon/more.svg') no-repeat center;
				background-size: 100%;
			}
		}
		h2{
			width: 5rem;
			height: 1rem;
			padding-top: .2rem;
			.l{
				width: 100%;
				height: 100%;
				vertical-align: top;
			}
			.r{
				display: none;
			}
		}
	}
}
</style>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.header{
		.search, .showAside{
			display: none;
		}
		h2{
			display: flex;
			justify-content: center;
			padding-top: 35px;
			.l{
				width: 440px;
				height: 108px;
			}
			.r{
				width: 81px;
				height: 123px;
				margin-top: -12px;
			}
		}
	}
}
</style>