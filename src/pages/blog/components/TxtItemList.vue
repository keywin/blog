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
				<i class="z-tag">公告</i>
				<span class="list-cont ellipsis">{{ item.titl }}</span>
				<span class="list-date">{{ item.update }}</span>
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
		margin: 0 .32rem .32rem;
		padding: .32rem 0;
		background: rgba(255,255,255,.5);
		box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.1);
		.ul-title{
			height: .38rem;
			line-height: .38rem;
			margin-bottom: .5rem;
			padding-left: .08rem;
			font-size: .38rem;
			color: #000;
			border-left: .06rem solid #000;
		}
		.itemList_UL{
			margin-bottom: .5rem;
			padding: 0 .3rem;
			.list-item{
				display: flex;
				align-items: center;
				height: .88rem;
				border-bottom: .02rem solid #e9e9eb;
				.list-cont{
					flex: 1;
					padding-left: .2rem;
					font-size: .32rem;
					color: #666;
				}
				.list-date{
					font-size: .28rem;
					color: #777;
				}
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
			padding: 0 20px 50px;
			.list-item{
				display: flex;
				align-items: center;
				height: 36px;
				border-bottom: 1px solid #e9e9eb;
				cursor: pointer;
				.list-cont{
					flex: 1;
					padding: 0 10px;
					font-size: 16px;
					color: #666;
				}
				.list-date{
					font-size: 14px;
					color: #777;
				}
			}
		}
	}
}
</style>