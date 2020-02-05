<!--
-- @Author: keywin
-- @StartingTime: 2020-01-16 16:17:04
-- @script: newPage
-->
<template>
  <div class="aside" :class="{ active: $store.state.VUEX_ASIDE.vuex_asideState }">
		<div class="input-search">
			<input type="text" placeholder="検索しても">
			<i></i>
		</div>
		<div class="nav">
			<dl v-for="item in asideList" :key="item.id">
				<dt @click="goListPage(item.id)" class="nav-item nav-title">{{ item.titl }}</dt>
					<dd @click="hideAsideClick(item.id, item2.id)" class="nav-item" v-for="item2 in item.children" :key="item2.id">
						<!-- <router-link :to="/home" tag="li">Home</router-link> -->
						{{ item2.titl }}
						<!-- <img :src="item2.imgUrl" v-if="item2.imgUrl" /> -->
					</dd>
			</dl>
		</div>
	</div>
</template>
<script>
import asideList from "@/assets/json/blog/index.json"
export default {
  name: "Aside",
  data() {
    return {
			asideList
		};
  },
  props: {
	  
  },
  watch: {},
  computed: {},
  components: {},
  created() {},
  methods: {
		goListPage(id) {
		  this.$router.push({path: '/blog/listpages', query: {id}})
		},
	  hideAsideClick(fooId, id) {
			this.$router.push({
				path: '/blog/detail_col',
				query: {id}
			})
			this.$store.commit('CHANGE_AISDESTATE', false)
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
	.aside{
		position: fixed;
		left: 100%;
		top: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 2001;
		transition: left .4s cubic-bezier(.6,0,.2,1) 0s;
		overflow-y: scroll;
		&.active{
			left: 0;
		}
		.nav{
			.nav-item{
				margin-top: .26rem;
				padding-left: .6rem;
				font-size: .28rem;
				color: #666;
				img{
					display: block;
					width: 2.7rem;
					height: 3.76rem;
					margin-bottom: .2rem;
				}
			}
			.nav-title{
				margin-top: .5rem;
				padding: 0 .3rem;
				border-top: 0;
				font-size: .32rem;
				// font-weight: bold;
				color: #333;
				// border-bottom: 1px solid #eee;
			}
		}
	}
}
</style>
<style lang="scss" scoped>
/* 大屏 */
@media only screen and (min-width: 600px) {
	.aside{
		width: 300px;
		margin-bottom: 20px;
		background: rgba(255,255,255,.5);
		box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
		.input-search{
			border-right: 0;
			border-left: 0;
		}
		.nav{
			padding: 0 20px;
			.nav-item{
				padding: 14px 0 0 20px;
				font-size: 14px;
				color: #333;
				cursor: pointer;
				opacity: .8;
				&:hover{
					opacity: 1;
				}
				img{
					display: block;
					width: 135px;
					height: 188px;
					margin-bottom: 10px;
				}
			}
			.nav-title{
				padding-left: 0;
				border-top: 0;
				font-size: 16px;
				font-weight: bold;
				opacity: 1;
			}
		}
	}
}
</style>