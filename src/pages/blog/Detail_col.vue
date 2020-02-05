<!--
-- @Author: keywin
-- @StartingTime: 2020-01-19 14:31:00
-- @script: Detail_col
-->
<template>
  <div>
		<component :is="allComps[comp]" :detailTitl="detailTitl" :update="update" :source="source"></component>
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
			comp: '',
			allComps,
			detailTitl: '',
			update: '',
			source: {}
		};
  },
  props: [],
  watch: {
		$route () {
			let compObj = this.indexJson.filter(item => item.id == this.$route.query.id)[0]
			this.comp = compObj['linkTo']
			this.detailTitl = compObj.titl
			this.update = compObj.update
			this.source = compObj.source
		}
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
					update: item2.update,
					source: item2.source || {}
				})
			})
		)
		let compObj = this.indexJson.filter(item => item.id == this.$route.query.id)[0]
		this.comp = compObj['linkTo']
		this.detailTitl = compObj.titl
		this.update = compObj.update
		this.source = compObj.source
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