<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 14:31:00
-- @script: Detail_col
-->
<template>
  <div>
		<!-- <h3 class="titl">今天是个好日子</h3>
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
		</div> -->
		<!-- <vuex></vuex> -->
		<component :is="allComps[comp]" :detailTitl="detailTitl"></component>
		<!-- {{ comp }} -->
	</div>
</template>
<script>
import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/Zenburn.css'
import Vue from 'vue'
// Vue.use(Viewer)
//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

// import Vuex from './code/Vuex'
import allComps from './code'
console.log(allComps)
import indexJson from "@/assets/json/blog/index.json"
export default {
  name: "Detail_col",
  data() {
    return {
			indexJson: [],
			comp: '',
			allComps,
			detailTitl: ''
		};
  },
  props: [],
  watch: {
		
	},
  computed: {},
  components: {
	  // Vuex
  },
  created() {
		indexJson.forEach(item => 
			item.children.forEach(item2 => {
				this.indexJson.push({
					id: item2.id,
					linkTo: item2.linkTo,
					titl: item2.titl,
				})
			})
		)
		let compObj = this.indexJson.filter(item => item.id == this.$route.query.id)[0]
		this.comp = compObj['linkTo']
		this.detailTitl = compObj.titl
	},
  methods: {
	},
  mounted() {},
  updated() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
// @import "./code/code.scss"
</style>