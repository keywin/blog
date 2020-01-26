<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 17:10:34
-- @script: newPage
-->
<template>
  <div class="itemList">
		<h3 class="ul-title">夕朝<br />拾花</h3>
		<!-- <h3 class="ul-title">朝花夕拾</h3> -->
		<ul class="itemList_UL">
			<li v-for="(item, i) in 4" :key="i" class="list-item fadeIn animated">
				<div class="imgFoo">
					<img src="https://itukanokoto.com/wp/wp-content/uploads/2020/01/hibi20011701-677x452.jpg" alt="">
				</div>
				<div class="list-cont">
					<span>我</span> / <i>2020.01.17</i>
					<p>我看到了第一个日出</p>
				</div>
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
			width: 100%;
			height: 80px;
			font-size: 20px;
			font-weight: 600;
			
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
		
	}
}
</style>