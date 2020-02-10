<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 17:50:45
-- @script: com-header
-->
<template>
  <div class="header z-shadow">
		<!-- <p class="search"></p> -->
		<div class="box">
			<p class="goBack" @click="goBackClick" v-if="isShowBack"></p>
			<h2>
				<div class="titl-cont ellipsis" v-if="isShowBack">{{ headerTitl }}</div>
				<img src="http://q4ujnj8md.bkt.clouddn.com/微信图片_20200116111632.778db02.png" alt="" class="l" v-if="!isShowBack">
				<img src="http://q4ujnj8md.bkt.clouddn.com/logo.png" alt="" class="r" @click="goHome()">
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
			headerTitl: '老友记',
			isShowBack: false,
			listData,
			checkedId: '-1',
		};
  },
  props: [],
  watch: {
		$route () {
			this.isShowBack = this.$route.meta.isShowBack
			this.checkedId = this.$route.query.id ? this.$route.query.id.split('-')[0] : '-1'

			if(this.checkedId != '-1') {
				let checkedData = this.listData.filter( item => item.id == this.$route.query.id.split('-')[0] )[0]
				this.headerTitl = this.$route.query.id.split('-')[1] ? checkedData.children.filter(item => item.id == this.$route.query.id)[0].titl : checkedData.titl
			}
    }
	},
  computed: {},
  components: {
		
	},
  created() {
		this.isShowBack = this.$route.meta.isShowBack
		this.checkedId = this.$route.query.id ? this.$route.query.id.split('-')[0] : '-1'
		
		if(this.checkedId != '-1') {
			let checkedData = this.listData.filter( item => item.id == this.$route.query.id.split('-')[0] )[0]
			this.headerTitl = this.$route.query.id.split('-')[1] ? checkedData.children.filter(item => item.id == this.$route.query.id)[0].titl : checkedData.titl
		}
	},
  methods: {
	  showAsideClick() {
		  this.$store.commit('CHANGE_AISDESTATE', true)
		},
		goBackClick() {
			this.$router.go(-1)
		},
		navClick(id) {
			if(this.$route.query.id == id) return
			this.$router.push({
				path: '/blog/listpages',
				query: {id}
			})
		},
		goHome() {
			this.$router.push({
				path: '/'
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
		.goBack{
			width: .6rem;
			height: .6rem;
			position: absolute;
			top: .34rem;
			left: .16rem;
			background: url('~@/assets/img/icon/icon_back.png') no-repeat center;
			background-size: 70%;
		}
		h2{
			width: 5rem;
			height: 1rem;
			margin: 0 auto;
			padding-top: .2rem;
			.titl-cont{
				line-height: 1rem;
				text-align: center;
				font-size: .38rem;
				font-weight: bold;
				color: #000;
			}
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
			.goBack, .titl-cont{
				display: none;
			}
			.navList{
				li{
					display: inline-block;
					margin-right: 20px;
					font-size: 20px;
					cursor: pointer;
					&.active{
						color: #000;
						font-weight: 700;
						border-bottom: 1px solid #000;
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
					cursor: pointer;
				}
			}
		}
	}
}
</style>