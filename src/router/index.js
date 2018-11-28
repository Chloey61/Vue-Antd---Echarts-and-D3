import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/home.vue'], resolve),
      meta: {title: '首页', requiresAuth: false},
      children: [
        {
          path: '/Echarts',
          component: resolve => require(['../components/Echarts.vue'], resolve),
          meta: {title: 'Echarts', requiresAuth: false}
        },
        {
          path: '/D3',
          component: resolve => require(['../components/D3.vue'], resolve),
          meta: {title: 'D3', requiresAuth: false}
        }
      ]
    }
  ]
})
