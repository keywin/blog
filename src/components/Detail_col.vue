<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 14:31:00
-- @script: Detail_col
-->
<template>
  <div class="detail detail_col">
		<h3 class="titl">今天是个好日子</h3>
		<div class="imgFoo img_titl">
			<img src="https://itukanokoto.com/wp/wp-content/uploads/2019/04/ieto19041802-534x667.jpg" alt="">
		</div>
		<div class="detailCont">
			<p>怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？</p>
			<div class='imgFoo'>
				<img src="https://itukanokoto.com/wp/wp-content/uploads/2019/05/asa19050707-768x512.jpg" alt="">
			</div>
			<p>怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？怎么了 我读的第一件事是茄碱。我诚实地哭了。比利和名工在哭泣的场面中哭了。从那时起，我一直在阅读几乎所有内容。你不读全部吗？</p>
		</div>
		<div class="detailFooter">
			<p class="date">
				<i></i>
				<span>今天 / 2020.01.18</span>
			</p>
			<p class="biaoqian">
				<i></i>
				<span># 一日照片</span>
			</p>
		</div>
	</div>
</template>
<script>
export default {
  name: "Detail_col",
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
	.detail{
		position: relative;
		padding: .3rem;
		background: #fff;
		transition: all .3s;
		.titl{
			position: relative;
			height: 1.12rem;
			line-height: .92rem;
			text-align: center;
			font-size: .4rem;
			font-weight: 700;
			color: #000;
		}
		.imgFoo{
			max-height: 8rem;
			margin-top: .3rem;
			overflow: hidden;
			&.img_titl{
				max-height: 12rem;
				text-align: center;
			}
			img{
				max-width: 100%;
				object-fit: cover;
			}
		}
		.detailCont{
			p{
				line-height: 2;
				margin-top: .3rem;
				font-size: .32rem;
			}
		}
		.detailFooter{
			padding-top: .4rem;
			p{
				font-size: .26rem;
				color: #000;
				span{
					line-height: 1.8;
				}
				i{
					display: inline-block;
					width: .28rem;
					height: .28rem;
					background: url(~@/assets/img/icon/date.png) no-repeat;
					background-size: 100%;
				}
				&.biaoqian{
					i{
						background: url(~@/assets/img/icon/biaoqian.png) no-repeat;
						background-size: 100%;
					}
				}
			}
		}
	}
}
/* 大屏 */
@media only screen and (min-width: 600px) {
	.detail{
		position: relative;
		max-width: 960px;
		margin: 0 auto;
		padding: 30px 20px;
		background: #fff;
		.titl{
			position: relative;
			height: 92px;
			line-height: 92px;
			text-align: center;
			font-size: 20px;
			font-weight: 700;
			color: #000;
			&:before{
				content: '';
				position: absolute;
				left: 50%;
				top: 0;
				transform: translateX(-50%); 
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 0 16.5px 28.6px 16.5px;
				border-color: transparent transparent #f1f1f1 transparent;
			}
			&:after{
				content: "";
				position: absolute;
				background-color: #f1f1f1;
				width: 28px;
				height: 28px;
				border-radius: 50%;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
			}
		}
		.imgFoo{
			max-height: 400px;
			margin-top: 30px;
			overflow: hidden;
			&.img_titl{
				max-height: 600px;
				text-align: center;
			}
			img{
				max-width: 100%;
				object-fit: cover;
			}
		}
		.detailCont{
			p{
				line-height: 2;
				margin-top: 30px;
			}
		}
		.detailFooter{
			padding-top: 40px;
			p{
				line-height: 30px;
				font-size: 13px;
				color: #000;
				i{
					display: inline-block;
					width: 14px;
					height: 14px;
					background: url(~@/assets/img/icon/date.png) no-repeat;
					background-size: 100%;
					vertical-align: middle;
				}
				&.biaoqian{
					i{
						background: url(~@/assets/img/icon/biaoqian.png) no-repeat;
						background-size: 100%;
					}
				}
			}
		}
	}
}
</style>