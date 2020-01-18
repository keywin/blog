<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 16:17:04
-- @script: newPage
-->
<template>
  <div class="aside" :class="{ active: $store.state.VUEX_ASIDE.vuex_asideState }">
		<div class="input-search">
			<input type="text" placeholder="記事を検索">
			<i></i>
		</div>
		<dl class="nav">
			<dt @click="hideAsideClick" class="nav-item nav-title">vue-cli2+</dt>
			<dd @click="hideAsideClick" class="nav-item">vuex及模块化</dd>
			<dd @click="hideAsideClick" class="nav-item">Api模块化</dd>
			<dd @click="hideAsideClick" class="nav-item">路由拦截与懒加载</dd>
			<dd @click="hideAsideClick" class="nav-item">
				Axios使用与状态码管理
				<img src="https://otonarisan.info/wp/wp-content/uploads/2017/11/hyoushivol15.jpg" alt="">
			</dd>
			<dt @click="hideAsideClick" class="nav-item nav-title">Sass</dt>
			<dd @click="hideAsideClick" class="nav-item">引入sass</dd>
			<dd @click="hideAsideClick" class="nav-item">配置与修改</dd>
			<dd @click="hideAsideClick" class="nav-item">常用方法及案例</dd>
			<dt @click="hideAsideClick" class="nav-item nav-title">后端</dt>
			<dd @click="hideAsideClick" class="nav-item">数据库</dd>
			<dd @click="hideAsideClick" class="nav-item">express</dd>
			<dt @click="hideAsideClick" class="nav-item nav-title">感想</dt>
			<dd @click="hideAsideClick" class="nav-item">2019-12-31</dd>
			<dd @click="hideAsideClick" class="nav-item">2020-01-01</dd>
			<dd @click="hideAsideClick" class="nav-item">2020-01-17</dd>
			<dt @click="hideAsideClick" class="nav-item nav-title">工具类</dt>
			<dd @click="hideAsideClick" class="nav-item">svn</dd>
			<dd @click="hideAsideClick" class="nav-item">git</dd>
			<dd @click="hideAsideClick" class="nav-item">vscode</dd>
		</dl>
	</div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {};
  },
  props: {
	  
  },
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {
	  hideAsideClick() {
		  this.$store.commit('CHANGE_AISDESTATE', false)
	  }
  },
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
/* 小屏 */
@media only screen and (max-width: 600px) {
	.aside{
		position: fixed;
		left: 100%;
		top: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 999999999;
		transition: left .4s cubic-bezier(.6,0,.2,1) 0s;
		overflow-y: scroll;
		&.active{
			left: 0;
		}
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
				font-weight: bold;
			}
		}
	}
}
/* 大屏 */
@media only screen and (min-width: 600px) {
	.aside{
		width: 300px;
		background: #fff;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
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
				font-weight: bold;
			}
		}
	}
}
</style>