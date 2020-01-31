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
				<dt @click="hideAsideClick(item.id)" class="nav-item nav-title">{{ item.titl }}</dt>
					<dd @click="hideAsideClick(item.id, item2.id)" class="nav-item" v-for="item2 in item.children" :key="item2.id">
						<!-- <router-link :to="/home" tag="li">Home</router-link> -->
						{{ item2.titl }}
						<img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d73d15e55dfbb2fb342b5f1477714799/c8177f3e6709c93dfe1c134f973df8dcd000549f.jpg" v-if="item2.img" />
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
		z-index: 999999999;
		transition: left .4s cubic-bezier(.6,0,.2,1) 0s;
		overflow-y: scroll;
		&.active{
			left: 0;
		}
		.nav{
			.nav-item{
				line-height: .88rem;
				padding-left: .6rem;
				font-size: .36rem;
				img{
					display: block;
					width: 2.7rem;
					height: 3.76rem;
					margin-bottom: .2rem;
				}
			}
			.nav-title{
				padding: .2rem 0 0 .2rem;
				border-top: 0;
				font-weight: bold;
			}
		}
	}
}
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
			// input{
			// 	background: #f1f1f1;
			// }
			// i{
			// 	background-color: #f1f1f1;
			// }
		}
		.nav{
			padding: 0 20px;
			.nav-item{
				// line-height: 44px;
				padding: 10px 0 10px 20px;
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
				padding: 20px 0 0 0;
				border-top: 0;
				font-size: 16px;
				font-weight: bold;
				opacity: 1;
			}
		}
	}
}
</style>