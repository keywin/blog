<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 17:10:34
-- @script: newPage
-->
<template>
  <div class="itemList">
		<!-- <h3 class="ul-title">夕朝<br />拾花</h3> -->
		<h3 class="ul-title">{{ listData.titl }}</h3>
		<ul class="itemList_UL">
			<li v-for="(item, i) in listData.children" :key="i" class="list-item fadeIn animated">
				<div class="imgFoo">
					<img :src="item.imgUrl || 'http://49.234.230.14/imgHost/blog/wx_20200127205845.jpg'" alt="" style="object-fit: cover;">
				</div>
				<div class="list-cont">
					<span>我</span> / <i>{{ item.update }}</i>
					<p>{{ item.titl }}</p>
				</div>
			</li>
		</ul>
		<div class="more" @click="goListPage(listData.id)">查看更多>></div>
	</div>
</template>
<script>
export default {
  name: "ItemList",
  data() {
    return {};
  },
  props: ['listData'],
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {
		// 进入列表页
	  goListPage(id) {
		  this.$router.push({path: '/blog/listpages', query: {id}})
		},
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
	.itemList{
		margin: 0 .3rem .4rem;
		padding: .3rem;
		background: rgba(255,255,255,.5);
		box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.1);
		.ul-title{
			height: 1.6rem;
			font-size: .4rem;
			font-weight: bold;
			color: #000;
		}
		.list-item{
			img{
				width: 100%;
			}
			.list-cont{
				line-height: 1.8;
				margin-bottom: .6rem;
				font-size: .28rem;
			}
		}
		.more{
			text-align: center;
			font-size: .24rem;
			margin-top: .2rem;
			color: #444;
			cursor: pointer;
			transition: opacity .5s;
			&:hover{
				opacity: .8;
			}
		}
	}
}
</style>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.itemList{
		margin-bottom: 20px;
		padding: 20px 0;
		background: rgba(255,255,255,.5);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		.ul-title{
			height: 24px;
			line-height: 24px;
			margin-bottom: 50px;
			padding-left: 8px;
			font-size: 24px;
			color: #000;
			border-left: 3px solid #000;
		}
		.itemList_UL{
			display: flex;
			flex-wrap: wrap;
			padding: 0 10px;
			.list-item{
				width: 50%;
				margin-bottom: 50px;
				padding: 0 10px;
				box-sizing: border-box;
				.imgFoo{
					height: 150px;
					overflow: hidden;
					img{
						// object-fit: cover;
						width: 100%;
						min-height: 100%;
					}
				}
				.list-cont{
					padding-top: 8px;
					font-size: 14px;
					color: #666;
					p{
						margin-top: 8px;
						color: #333;
					}
				}
			}
		}
	}
}
</style>