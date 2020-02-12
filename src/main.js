// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'	
import store from './store/index'

// import Bus from './bus/index'

// import zLoading from './packages/loading'

// Vue.use(zLoading)

import { http_axios } from '@/api/httpAxios.js'
Vue.prototype.$axios = http_axios

import { Loading, Scrollbar } from 'element-ui';
Vue.use(Loading)
Vue.use(Scrollbar)

// 图片放大
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)


Vue.config.productionTip = false

// Vue.prototype.$bus = Bus

// 前置守卫, 没有后台, 有些组件需要解析大量代码会慢, 加载等待
let loading = ''
router.beforeEach((to, from, next) => {
  loading = Loading.service({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  next()
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
  loading.close()
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// export sVue
