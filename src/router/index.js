import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			redirect: '/blog'
		},
		{
			path: '/home',
			name: 'Home',
			component: resolve => require(['@/pages/Home'], resolve),
			children: [
				{
					path: '/blog',
					name: 'Blog',
					component: resolve => require(['@/pages/blog/Index.vue'], resolve),
				},
				{
					path: '/blog/detail_col',
					name: 'Detail_col',
					component: resolve => require(['@/components/Detail_col.vue'], resolve),
				},
				{
					path: '/blog/listpages',
					name: 'Detail_col',
					component: resolve => require(['@/components/ListPages.vue'], resolve),
				}
			]
		}
  ]
})
