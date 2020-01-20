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
				<i class="kw-tag">公告</i>
				<span class="list-cont ellipsis">王国审计已上线,王国审计已上线,王国审计已上线</span>
				<span class="list-date">2020-01-16</span>
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
		.itemList_UL{
			.list-item{
				display: flex;
				align-items: center;
				height: .8rem;
				border-bottom: .02rem solid #eee;
				.list-cont{
					flex: 1;
					padding-left: .2rem;
					font-size: .32rem;
				}
				.list-date{
					font-size: .28rem;
				}
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
			.list-item{
				display: flex;
				align-items: center;
				height: 36px;
				border-bottom: 1px solid #eee;
				.list-cont{
					flex: 1;
					padding: 0 10px;
					font-size: 16px;
				}
				.list-date{
					font-size: 14px;
				}
			}
		}
		
	}
}
</style>