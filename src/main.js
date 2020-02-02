// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'	
import store from './store/index'

import Bus from './bus/index'

import zLoading from './packages/loading'
// console.log(zLoading)
Vue.use(zLoading)

import { http_axios } from '@/api/httpAxios.js'
Vue.prototype.$axios = http_axios

// import hljs from 'highlight.js' //导入代码高亮文件
// import 'highlight.js/styles/a11y-dark.css'

// 图片放大
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)

Vue.config.productionTip = false

Vue.prototype.$bus = Bus

// //自定义一个代码高亮指令
// Vue.directive('highlight',function (el) {
//   let highlight = el.querySelectorAll('pre code');
//   highlight.forEach((block)=>{
//       hljs.highlightBlock(block)
//   })
// })

// 前置守卫, 没有后台, 有些组件需要解析大量代码会慢, 加载等待
router.beforeEach((to, from, next) => {
  console.log(1)
  next()
})
router.afterEach((to, from, next) => {
  console.log(2)
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

