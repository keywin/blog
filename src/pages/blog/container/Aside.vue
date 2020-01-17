<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 16:17:04
-- @script: newPage
-->
<template>
  <div class="aside">
		<div class="input-search">
			<input type="text" placeholder="記事を検索">
			<i></i>
		</div>
		<dl class="nav">
			<dt class="nav-item nav-title">vue-cli2+</dt>
			<dd class="nav-item">vuex及模块化</dd>
			<dd class="nav-item">Api模块化</dd>
			<dd class="nav-item">路由拦截与懒加载</dd>
			<dd class="nav-item">
				Axios使用与状态码管理
				<img src="https://otonarisan.info/wp/wp-content/uploads/2017/11/hyoushivol15.jpg" alt="">
			</dd>
			<dt class="nav-item nav-title">Sass</dt>
			<dd class="nav-item">引入sass</dd>
			<dd class="nav-item">配置与修改</dd>
			<dd class="nav-item">常用方法及案例</dd>
			<dt class="nav-item nav-title">后端</dt>
			<dd class="nav-item">数据库</dd>
			<dd class="nav-item">express</dd>
			<dt class="nav-item nav-title">感想</dt>
			<dt class="nav-item nav-title">工具类</dt>
			<dd class="nav-item">svn</dd>
			<dd class="nav-item">git</dd>
			<dd class="nav-item">vscode</dd>
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
/* 小屏 */
@media only screen and (max-width: 600px) {
	.aside{
		width: 100%;
		.nav{
			.nav-item{
				line-height: .88rem;
				padding-left: .6rem;
				border-top: .02rem solid #eee;
				font-size: .36rem;
				img{
					display: block;
					width: 2.7rem;
					height: 3.76rem;
					margin-bottom: .2rem;
				}
			}
			.nav-title{
				padding: .2rem 0 0 .2rem;
				border-top: 0;
			}
		}
	}
}
/* 大屏 */
@media only screen and (min-width: 600px) {
	.aside{
		width: 300px;
		.nav{
			.nav-item{
				line-height: 44px;
				padding-left: 30px;
				border-top: 1px solid #eee;
				font-size: 18px;
				img{
					display: block;
					width: 135px;
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