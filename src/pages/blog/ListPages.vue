<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 17:53:36
-- @script: 列表页
-->
<template>
  <div class="listPages">
		<div class="listItem" v-for="(item, id) in listData.children" :key="id">
			<div class="post-letter">{{ item.titl[0] }}</div>
			<h3 class="titl">{{ item.titl }}</h3>
			<div class="miaoshu">
				作者: keywin / 发布于: {{ item.update }} / 本文属于: {{ listData.titl }} / 标签: 前端
			</div>
			<div class="cont">
				{{ item.scription || '工作知识点记录' }}
			</div>
			<div class="detail">
				<span @click="goDetail(item.id)">READ</span>
			</div>
		</div>
	</div>
</template>
<script>
import listData from "@/assets/json/blog/index.json"
export default {
  name: "ListPages",
  data() {
    return {
		listData: {}
	};
  },
  props: [],
  watch: {
		$route () {
			this.listData = listData.filter(item=>item.id==this.$route.query.id)[0]
		}
	},
  computed: {
  },
  components: {},
  created() {
	  this.$nextTick(() => {
		  this.listData = listData.filter(item=>item.id==this.$route.query.id)[0]
	  })
  },
  methods: {
		// 进入详情页
		goDetail(id) {
			this.$router.push({
				path: '/blog/detail_col',
				query: {id}
			})
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
	.listPages{
		.listItem{
			position: relative;
			margin-top: .3rem;
			padding: .3rem;
			background: rgba(255,255,255,.5);
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			.post-letter{
				display: none;
			}
			.titl{
				line-height: 1;
				font-size: .38rem;
				color: #000;
			}
			.miaoshu{
				font-size: .24rem;
				margin-top: .1rem;
				color: #777;
			}
			.cont{
				line-height: 1.8;
				margin: .2rem 0;
				font-size: .28rem;
				color: #666;
			}
			.detail{
				text-align: right;
				span{
					display: inline-block;
					width: 1.6rem;
					height: .6rem;
					line-height: .6rem;
					text-align: center;
					color: #fff;
					background: #333;
					font-size: .32rem;
					cursor: pointer;
					transition: opacity .3s;
					&:hover{
						opacity: .8;
					}
				}
			}
		}
	}
}
</style>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.listPages{
		max-width: 960px;
		margin: 0 auto 30px;
		.listItem{
			position: relative;
			margin-top: 30px;
			padding: 30px;
			background: rgba(255,255,255,.5);
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			.post-letter{
				position: absolute;
				left: 20px;
				top: 0;
				height: 200px;
				line-height: 200px;
				font-size: 200px;
				font-family: 'Josefin Sans';
				color: rgba(0, 0, 0, .07);
				z-index: -1;
			}
			.titl{
				line-height: 1;
				margin-left: 80px;
				font-size: 24px;
				color: #333;
			}
			.miaoshu{
				margin-top: 10px;
				margin-left: 80px;
				font-size: 14px;
				color: #777;
			}
			.cont{
				line-height: 1.8;
				margin: 20px 0 50px 80px;
				font-size: 14px;
				color: #666;
			}
			.detail{
				text-align: right;
				span{
					display: inline-block;
					width: 160px;
					height: 40px;
					line-height: 40px;
					text-align: center;
					margin-left: 80px;
					color: #fff;
					background: #333;
					cursor: pointer;
					transition: opacity .3s;
					&:hover{
						opacity: .8;
					}
				}
			}
		}
	}
}
</style>