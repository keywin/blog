<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 17:10:34
-- @script: newPage
-->
<template>
  <div class="itemList">
		<h3 class="ul-title">夕朝<br />拾花</h3>
		<!-- <h3 class="ul-title">朝花夕拾</h3> -->
		<ul id="itemList_UL">
			<li v-for="(item, i) in 2" :key="i" class="list-item fadeIn animated">
				<i class="list-line"></i>
				<h3 class="list-title">林州别论或今秋</h3>
				<div class="list-cont">尽管我在VS Code中经常使用许多快捷方式，以下快捷方式可能会派上用场，但我经常忘记它们的存在。我制作了一些GIF，以便更好地记住它们。也许这里面也有一些快捷方式你也不记得了，但是却很有用。</div>
				<div class="list-more">阅读全文</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: "ItemList",
  data() {
    return {};
  },
  props: [],
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {},
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
			}
			.list-more{
				margin-top: .2rem;
				color: orangered;
				font-size: .32rem;
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
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
		.ul-title{
			height: 80px;
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
			}
			.list-more{
				color: orangered;
				font-size: 14px;
				cursor: pointer;
			}
		}
		
	}
}
</style>