<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 14:31:00
-- @script: Detail_col
-->
<template>
  <div>
		<component :is="allComps[detailData.linkTo]" :detailData="detailData"></component>
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
// console.log(allComps)
import indexJson from "@/assets/json/blog/index.json"
export default {
  name: "Detail_col",
  data() {
    return {
			indexJson: [],
			detailData: {},
			// linkTo: '',
			allComps,
			// detailTitl: '',
			// update: '',
			// source: {}
		};
  },
  props: [],
  watch: {
		$route () {
			this.detailData = this.indexJson.filter(item => item.id == this.$route.query.id)[0]
			
			// this.linkTo = compObj['linkTo']
			// this.detailTitl = compObj.titl
			// this.update = compObj.update
			// this.source = compObj.source
		}
	},
  computed: {},
  components: {
	  // Vuex
  },
  created() {
		indexJson.forEach(item =>
			item.children.forEach(item2 => {
				item2.fooTitl = item.titl
				this.indexJson.push(item2)
			})
		)
		this.detailData = this.indexJson.filter(item => item.id == this.$route.query.id)[0]
		// console.log(this.detailData)
		// this.linkTo = compObj['linkTo']
		// this.detailTitl = compObj.titl
		// this.update = compObj.update
		// this.source = compObj.source
	},
  methods: {
	},
  mounted() {
		
	},
  updated() {
		
	},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
// @import "./code/code.scss"
</style>