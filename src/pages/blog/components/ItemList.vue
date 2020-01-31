<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 17:10:34
-- @script: newPage
-->
<template>
  <div class="itemList">
		<!-- <h3 class="ul-title">夕朝<br />拾花</h3> -->
		<h3 class="ul-title">{{ listData.titl }}</h3>
		<ul id="itemList_UL">
			<li v-for="(item, i) in listData_show" :key="i" class="list-item fadeIn animated">
				<h3 class="list-title" @click="goDetail(item.id)">{{ item.titl }}</h3>
				<div class="list-cont">
					<p>{{ item.scription }}</p>
					<div class="images" v-viewer>
						<img :src="item.imgUrl" alt="" class="l hand" v-if="item.imgUrl">
					</div>
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
  props: ["listData"],
  watch: {},
  computed: {
	  listData_show: function () {
		  return this.listData.children.filter(item=>item.scription)
	  }
  },
  components: {},
  created() {},
  methods: {
		// 进入列表页
	  goListPage(id) {
		  this.$router.push({path: '/blog/listpages', query: {id}})
		},
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
		.list-item{
			margin-bottom: .5rem;
			padding: 0 .3rem;
			.list-title{
				margin-bottom: .15rem;
				font-size: .32rem;
				color: #333;
			}
			.list-cont{
				line-height: 1.8;
				margin-bottom: .05rem;
				font-size: .28rem;
				img{
					width: 2.3rem;
					height: 1.6rem;
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
		.list-item{
			margin-bottom: 50px;
			padding: 0 20px;
			.list-title{
				margin-bottom: 15px;
				font-size: 18px;
				color: #333;
			}
			.list-cont{
				margin-bottom: 10px;
				font-size: 14px;
				color: #666;
				display: flex;
				p{
					flex: 1;
					line-height: 1.8;
				}
				img.l{
					width: 130px;
					height: 80px;
				}
			}
		}
	}
}
</style>