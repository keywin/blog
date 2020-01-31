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
					<img src="http://49.234.230.14/imgHost/blog/wx_20200127205845.jpg" alt="">
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
		padding: 20px;
		color: #000;
		background: rgba(255,255,255,.5);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		.ul-title{
			width: 100%;
			height: 80px;
			font-size: 24px;
			// font-weight: 600;
			
		}
		.itemList_UL{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.list-item{
				width: 50%;
				margin-top: 40px;
				box-sizing: border-box;
				&:nth-child(odd){
					padding-right: 10px;
				}
				&:nth-child(even){
					padding-left: 10px;
				}
				img{
					width: 100%;
				}
				.list-cont{
					line-height: 2;
					margin-bottom: 10px;
					font-size: 14px;
					span{
						font-weight: bold;
					}
				}
			}
		}
		.more{
			text-align: center;
			font-size: 12px;
			margin-top: 20px;
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