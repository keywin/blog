<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:29:34
-- @script: blog-index
-->
<template>
  <div class="blog">
	  	<kwHeade></kwHeade>
		<!-- 大屏 -->
		<swiper :options="swiperOptionMax" class="swiperOptionMax">
			<swiper-slide v-for="(item, i) in swiperImg" :key="i">
				<img :src="item.img" alt="" width="100%" height="100%" style="object-fit: cover;">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 小屏 -->
		<div class="swiperFoo">
			<swiper :options="swiperOptionMin" class="swiperOptionMin">
				<swiper-slide v-for="(item, i) in swiperImg" :key="i">
					<img :src="item.img" alt="" width="100%" height="100%" style="object-fit: cover;">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="index-contens">
			<kw-aside :isShowAside="isShowAside"></kw-aside>
			<div class="content">
				<kw-item-list v-for="item in indexJson1" :key="item.id" :listData="item"></kw-item-list>
				<kw-img-item-list v-for="item in indexJson2" :key="item.id" :listData="item"></kw-img-item-list>
				<kw-txt-item-list :listData="indexJson3[0]"></kw-txt-item-list>
			</div>
		</div>
	</div>
</template>
<script>
// import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import kwHeade from '@/pages/blog/components/Header'
import kwAside from '@/pages/blog/components/Aside'
import kwItemList from '@/pages/blog/components/ItemList'
import kwImgItemList from '@/pages/blog/components/ImgItemList'
import kwTxtItemList from '@/pages/blog/components/TxtItemList'

import indexJson from "@/assets/json/blog/index.json"
export default {
  name: "Blog",
  data() {
    return {
			swiperOptionMax: {
				slidesPerView : 2, // 显示两张
				slidesPerGroup : 1, // 每次切换1张
				spaceBetween: 20, // 间隔
				loop : true,
				speed:800,
				autoplay: { // 自动播放
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination', // 分页
				}
			},
			swiperOptionMin: {
				slidesPerView : 1, // 显示两张
				slidesPerGroup : 1, // 每次切换1张
				loop : true,
				speed:800,
				// autoplay: { // 自动播放
				// 	delay: 8000,
				// 	disableOnInteraction: false,
				// },
				pagination: {
					el: '.swiper-pagination', // 分页
				}
			},
			swiperImg: [
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_01.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/39a201e8836f7dd32ae74918eb3653ee.jpg'
				},
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_02.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/php.png'
				},
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_03.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/github.jpg'
				},
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_04.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/riji.png'
				},
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_05.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/swiper_04.jpg'
				},
				{
					txt: '123',
					// img: require('@/assets/img/blog/pic/swiper_06.jpg')
					img: 'http://q4ujnj8md.bkt.clouddn.com/news.jpg'
				}
			],
			swiperSlides: [1, 2, 3, 4, 5, 6],
			isShowAside: false,
			indexJson1: indexJson.slice(0, 3),
			indexJson2: indexJson.slice(3, 5),
			indexJson3: indexJson.slice(5, 6)
		};
  },
  props: [],
  watch: {
		
	},
  computed: {},
  components: {
	  	kwHeade,
		swiper,
		swiperSlide,
		kwAside,
		kwItemList,
		kwImgItemList,
		kwTxtItemList
	},
  created() {},
  methods: {},
  mounted() {
	},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .swiperOptionMax{
		display: none;
	}
	.swiperFoo{
		margin-bottom: .3rem;
		box-sizing: border-box;
		.swiperOptionMin{
			height: 3rem;
		}
	}
	.index-contens{
		display: flex;
		flex-direction: column-reverse;
	}
}
</style>
<style lang="scss" scoped>
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.swiperOptionMin{
		display: none;
	}
	.swiperOptionMax{
		display: block;
		max-width: 960px;
		height: 154px;
		margin: 30px auto 10px;
		.swiper-wrapper{
			.swiper-slide{
				width: calc(50% - 10px) !important;
				height: 134px;
				background: #eee;
			}
		}
		.swiper-pagination{
			bottom: -2px;
			/deep/ .swiper-pagination-bullet{
				background: rgb(230, 230, 230);
				opacity: 1;
				&.swiper-pagination-bullet-active{
					background: #000;
				}
			}
			
		}
	}
	.index-contens{
		max-width: 960px;
		display: flex;
		margin: 0 auto;
		.content{
			flex: 1;
			margin-left: 20px;
		}
	}
}
</style>