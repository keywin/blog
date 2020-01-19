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
		<div class="nav">
			<dl v-for="item in asideList" :key="item.id">
				<dt @click="hideAsideClick(item.id)" class="nav-item nav-title">{{ item.titl }}</dt>
					<dd @click="hideAsideClick(item.id, item2.id)" class="nav-item" v-for="item2 in item.children" :key="item2.id">
						<!-- <router-link :to="/home" tag="li">Home</router-link> -->
						{{ item2.titl }}
						<img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d73d15e55dfbb2fb342b5f1477714799/c8177f3e6709c93dfe1c134f973df8dcd000549f.jpg" v-if="item2.img" />
					</dd>
			</dl>
		</div>
	</div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {
			asideList: [
				{
					titl: '前端学习',
					id: '1',
					children: [
						{ titl: 'vuex及模块化', id: '1-1', linkTo: "aaa" },
						{ titl: 'Axios封装及拦截器、状态管理', id: '1-2', linkTo: "aaa" },
						{ titl: 'Api模块化及按文件自动全局引入', id: '1-3', linkTo: "aaa" },
						{ titl: 'sass配置及换肤', id: '1-4', linkTo: "aaa" },
						{ titl: 'npm发布插件', id: '1-5', linkTo: "aaa" },
						{ titl: 'vue常见报错及处理', id: '1-6', linkTo: "aaa" },
						{ titl: 'tool.js', id: '1-7', linkTo: "aaa" },
						{ titl: 'flex说明与示例', id: '1-8', linkTo: "aaa" },
						{ titl: 'Es6总结与实例', id: '1-9', linkTo: "aaa" },
						{ titl: '常用正则', id: '1-10', linkTo: "aaa" },
						{ titl: 'if语句优化', id: '1-11', linkTo: "aaa" },
						{ titl: '小程序自学', id: '1-12', linkTo: "aaa" },
					]
				},
				{
					titl: '后端cv型',
					id: '2',
					children: [
						{ titl: 'express启动', id: '2-1, linkTo: "aaa"' }
					]
				},
				{
					titl: '工具类',
					id: '3',
					children: [
						{ titl: 'https://github.com', id: '3-1', linkTo: "https://github.com" },
						{ titl: 'TortoiseSVN', id: '3-2', linkTo: "aaa" },
						{ titl: 'git配置及基础命令', id: '3-3', linkTo: "aaa" },
						{ titl: 'Hbuilder打包', id: '3-4', linkTo: "aaa" },
						{ titl: 'Hbuilder快捷键', id: '3-5', linkTo: "aaa" },
						{ titl: 'vscode快捷键', id: '3-6', linkTo: "aaa" },
						{ titl: 'vscode常用插件', id: '3-7', linkTo: "aaa" },
						{ titl: 'Markdown语法', id: '3-8', linkTo: "aaa" },
					]
				},
				{
					titl: '随心杂记',
					id: '4',
					children: [
						{ titl: '2019-12-25', id: '4-1', linkTo: "aaa" },
						{ titl: '共病文库', id: '4-2', linkTo: "aaa" },
						{ titl: '年末总结', id: '4-3', linkTo: "aaa" },
					]
				},
				{
					titl: '动漫',
					id: '5',
					children: [
						{ titl: '火影忍者', id: '5-1', linkTo: "aaa" },
						{ titl: '我想吃掉你的胰脏', id: '5-2', linkTo: "aaa" },
						{ titl: '夏目友人帐', id: '5-3', linkTo: "aaa" },
						{ titl: '宫崎骏系列', id: '5-4', linkTo: "aaa" },
					]
				}
			]
		};
  },
  props: {
	  
  },
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {
	  hideAsideClick(fooId, sonId) {
			this.$router.push({
				path: '/blog/detail_col',
				query: {sonId}
			})
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
		.input-search{
			border-right: 0;
			border-left: 0;
			input{
				background: #f1f1f1;
			}
			i{
				background-color: #f1f1f1;
			}
		}
		.nav{
			.nav-item{
				// line-height: 44px;
				padding: 10px 0 10px 30px;
				border-top: 1px solid #eee;
				font-size: 16px;
				color: #333;
				cursor: pointer;
				opacity: .8;
				&:hover{
					opacity: 1;
				}
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
				opacity: 1;
			}
		}
	}
}
</style>