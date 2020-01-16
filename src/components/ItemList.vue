<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 17:10:34
-- @script: newPage
-->
<template>
  <div class="itemList">
		<h3 class="ul-title">夕朝<br />拾花</h3>
		<ul>
			<li v-for="(item, i) in 4" :key="i" class="list-item">
				<i class="list-line"></i>
				<h3 class="list-title">林州别论或今秋</h3>
				<div class="list-cont">尽管我在VS Code中经常使用许多快捷方式，以下快捷方式可能会派上用场，但我经常忘记它们的存在。我制作了一些GIF，以便更好地记住它们。也许这里面也有一些快捷方式你也不记得了，但是却很有用。</div>
				<span class="list-more">阅读全文</span>
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
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
/* 小屏 */
@media only screen and (max-width: 600px) {

}
/* 大屏 */
@media only screen and (min-width: 600px) {
	.ul-title{
		height: 80px;
		font-size: 20px;
		font-weight: 600;
		color: #000;
		border-bottom: 1px solid #666;
	}
	.itemList{
		color: #000;
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