<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 17:50:45
-- @script: com-header
-->
<template>
  <div class="header z-shadow">
		<!-- <p class="search"></p> -->
		<div class="box">
			<h2>
				<img src="http://q4ujnj8md.bkt.clouddn.com/微信图片_20200116111632.778db02.png" alt="" class="l">
				<img src="http://q4ujnj8md.bkt.clouddn.com/logo.png" alt="" class="r">
			</h2>
			<ul class="navList">
				<li v-for="item in listData" :key="item.id" @click="navClick(item.id)" :class="{'active': checkedId == item.id}">{{item.titl}}</li>
			</ul>
			<p class="showAside" @click="showAsideClick"></p>
		</div>
	</div>
</template>
<script>
import listData from "@/assets/json/blog/index.json"
export default {
  name: "Header",
  data() {
    return {
			listData,
			checkedId: '-1'
		};
  },
  props: [],
  watch: {},
  computed: {},
  components: {
		
	},
  created() {},
  methods: {
	  showAsideClick() {
		  this.$store.commit('CHANGE_AISDESTATE', true)
		},
		navClick(id) {
			this.checkedId = id
		}
  },
  mounted() {
		
	},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.header{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	background: #fff;
	z-index: 101;
}
/* 小屏 */
@media only screen and (max-width: 600px) {
	.header{
		height: 1.28rem;
		border-bottom: .01rem solid #e9e9eb;
		.navList{
			display: none;
		}
		.showAside{
			width: .6rem;
			height: .6rem;
			position: absolute;
			top: .34rem;
			right: .16rem;
			background: url('~@/assets/img/icon/more.svg') no-repeat center;
			background-size: 100%;
		}
		h2{
			width: 5rem;
			height: 1rem;
			margin: 0 auto;
			padding-top: .2rem;
			.l{
				width: 100%;
				height: 100%;
				vertical-align: top;
			}
			.r{
				display: none;
			}
		}
	}
}
</style>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.header{
		background: #fff;
		.box{
			display: flex;
			align-items: center;
			max-width: 960px;
			margin: 0 auto;
			.navList{
				li{
					display: inline-block;
					margin-right: 20px;
					font-size: 20px;
					cursor: pointer;
					&.active{
						color: #000;
						font-weight: 700;
					}
				}
			}
			.showAside{
				display: none;
			}
			h2{
				.l{
					display: none;
				}
				.r{
					height: 64px;
					margin-right: 20px;
				}
			}
		}
	}
}
</style>