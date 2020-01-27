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
				<i class="list-line"></i>
				<h3 class="list-title">{{ item.titl }}</h3>
				<div class="list-cont">
					<p>{{ item.scription }}</p>
					<div class="images" v-viewer>
						<img :src="item.imgUrl" alt="" class="l hand" v-if="item.imgUrl">
					</div>
				</div>
				<div class="list-more" @click="goDetail(item.id)">阅读全文</div>
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
		// lazyload()

		// window.onscroll = lazyload

		// function lazyload(docItem=4){
		// 	let listItem = document.getElementsByClassName("list-item")
		// 	// 可见区域高度
		// 	var seeHeight = document.documentElement.clientHeight;
		// 	// 滚动条距离顶部高度
		// 	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 	for(var i = 0; i < docItem; i++) {
		// 		if (listItem[i].offsetTop >= seeHeight + scrollTop) return
		// 		console.log(listItem[i].style)
		// 		listItem[i].style.visibility = ''
		// 		console.log(listItem[i].style)
		// 	}
		// }
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
			.list-line{
				display: inline-block;
				width: .6rem;
				height: .02rem;
				background: #000;
			}
			.list-title{
				line-height: 1rem;
				font-size: .32rem;
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
			.list-more{
				margin-top: .2rem;
				color: orangered;
				font-size: .32rem;
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
/* 大屏 */
@media only screen and (min-width: 600px) {
	.itemList{
		margin-bottom: 20px;
		padding: 30px;
		color: #000;
		background: rgba(255,255,255,.5);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		.ul-title{
			height: 20px;
			font-size: 20px;
			font-weight: 600;
			
		}
		.list-item{
			margin-top: 40px;
			.list-line{
				display: inline-block;
				width: 30px;
				height: 2px;
				background: #000;
			}
			.list-title{
				line-height: 50px;
				font-size: 16px;
			}
			.list-cont{
				line-height: 1.8;
				margin-bottom: 10px;
				font-size: 14px;
				display: flex;
				p{
					flex: 1;
				}
				img.l{
					width: 130px;
					height: 80px;
				}
			}
			.list-more{
				color: orangered;
				font-size: 14px;
				cursor: pointer;
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