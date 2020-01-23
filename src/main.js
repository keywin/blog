// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'	
import store from './store/index'

import Bus from './bus/index'

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/a11y-dark.css'  //导入代码高亮样式

Vue.config.productionTip = false

Vue.prototype.$bus = Bus

//自定义一个代码高亮指令
Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
      hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

