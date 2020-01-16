<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 16:17:04
-- @script: newPage
-->
<template>
  <div class="aside">
		<div class="search">
			<input type="text" placeholder="記事を検索">
			<i></i>
		</div>
		<dl class="nav">
			<dt class="nav-item nav-title">目录和目录</dt>
			<dd class="nav-item">目录和目录</dd>
			<dd class="nav-item">
				<span>邻居123111</span>
				<img src="https://otonarisan.info/wp/wp-content/uploads/2017/11/hyoushivol15.jpg" alt="">
			</dd>
			<dd class="nav-item">目录和目录</dd>
			<dt class="nav-item nav-title">邻居</dt>
			<dd class="nav-item">目录和目录</dd>
			<dd class="nav-item">目录和目录</dd>
			<dd class="nav-item">目录和目录</dd>
		</dl>
	</div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {};
  },
  props: [],
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.aside{
		width: 300px;
		.search{
			border: 1px solid #eee;
			display: flex;
			input{
				flex: 1;
				height: 44px;
				border: 0;
				padding-left: 8px;
			}
			i{
				width: 44px;
				height: 44px;
				background: url(../../..//assets/img/icon/search.svg) no-repeat center;
				background-size: 20px;
				cursor: pointer;
			}
		}
		.nav{
			.nav-item{
				line-height: 44px;
				padding-left: 20px;
				border-top: 1px solid #eee;
				font-size: 18px;
				img{
					display: block;
					width: 135p;
					height: 188px;
					margin-bottom: 10px;
				}
			}
			.nav-title{
				padding: 10px 0 0 10px;
				border-top: 0;
			}
		}
	}
}
</style>