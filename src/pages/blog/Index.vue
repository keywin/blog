<!--
-- @Author: keywin
-- @StartingTime: 2020-01-15 15:29:34
-- @script: blog-index
-->
<template>
  <div class="blog">
		<!-- 大屏 -->
		<swiper :options="swiperOptionMax" class="swiperOptionMax">
			<swiper-slide v-for="(item, i) in swiperImg" :key="i">
				<img :src="item.img" alt="" width="100%" height="100%">
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- 小屏 -->
		<div class="swiperFoo">
			<swiper :options="swiperOptionMin" class="swiperOptionMin">
				<swiper-slide v-for="(item, i) in swiperImg" :key="i">
					<img :src="item.img" alt="" width="100%" height="100%">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		
		<!-- <div class="index-contens">
			<kw-aside></kw-aside>
			<div class="content">
				<kw-item-list></kw-item-list>
			</div>
		</div> -->
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import kwAside from './container/Aside'
import kwItemList from '../../components/ItemList'
var that;
export default {
  name: "Blog",
  data() {
    return {
			swiperOptionMax: {
				slidesPerView : 2, // 显示两张
				slidesPerGroup : 2, // 每次切换1张
				spaceBetween: 20, // 间隔
				loop : true,
				speed:800,
				autoplay: { // 自动播放
					delay: 8000,
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
					img: require('@/assets/img/blog/pic/swiper_01.jpg')
				},
				{
					txt: '123',
					img: require('@/assets/img/blog/pic/swiper_02.jpg')
				},
				{
					txt: '123',
					img: require('@/assets/img/blog/pic/swiper_03.jpg')
				},
				{
					txt: '123',
					img: require('@/assets/img/blog/pic/swiper_04.jpg')
				},
				{
					txt: '123',
					img: require('@/assets/img/blog/pic/swiper_05.jpg')
				},
				{
					txt: '123',
					img: require('@/assets/img/blog/pic/swiper_06.jpg')
				}
			],
			swiperSlides: [1, 2, 3, 4, 5, 6],
		};
  },
  props: [],
  watch: {
		
	},
  computed: {},
  components: {
		swiper,
		swiperSlide,
		kwAside,
		kwItemList
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
		padding: .3rem;
		box-sizing: border-box;
		.swiperOptionMin{
			width: 100%;
			height: 4rem;
			.swiper-slide{
				
			}
		}
	}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
	.swiperOptionMin{
		display: none;
	}
	.swiperOptionMax{
		display: block;
		max-width: 900px;
		height: 154px;
		margin: 30px auto 0;
		padding: 0 10px;
		.swiper-wrapper{
			.swiper-slide{
				width: calc(50% - 10px) !important;
				height: 134px;
				background: #eee;
			}
		}
		.swiper-pagination{
			bottom: 0;
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