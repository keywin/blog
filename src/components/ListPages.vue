<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 17:53:36
-- @script: 列表页
-->
<template>
  <div class="listPages">
		<div class="listItem" v-for="item in 4" :key="item">
			<div class="post-letter">O</div>
			<h3 class="titl">Oracle</h3>
			<div class="miaoshu">
				作者: keywin / 发布于: 2019-12-21 / 本文属于: 前端 / 标签: 前端
			</div>
			<div class="cont">
				工作知识点记录
			</div>
			<div class="detail">
				<span>READ</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: "ListPages",
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
	.listPages{
		.listItem{
			position: relative;
			margin-bottom: .2rem;
			padding: .3rem;
			background: rgba(255,255,255,.5);
			box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
			.post-letter{
				display: none;
			}
			.titl{
				font-size: .72rem;
				color: #333;
				font-weight: 600;
			}
			.miaoshu{
				margin-top: .2rem;
				font-size: .28rem;
			}
			.cont{
				line-height: 1.8;
				margin: .2rem 0 .5rem 0;
				font-size: 16px;
				color: #000;
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
				margin-left: 80px;
				font-size: 36px;
				color: #333;
				font-weight: 600;
			}
			.miaoshu{
				margin-top: 10px;
				margin-left: 80px;
				font-size: 14px;
			}
			.cont{
				line-height: 1.8;
				margin: 20px 0 50px 80px;
				font-size: 16px;
				color: #000;
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