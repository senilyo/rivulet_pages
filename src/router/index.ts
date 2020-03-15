import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopicView',
    component: () => import('@/views/TopicView.vue')
  },
  {
    path: '/codeInput',
    name: 'codeInput',
    component: () => import('@/views/CodeInputView.vue')
  },
  {
    path: '/returnresult',
    name: 'ReturnResult',
    component: () => import('@/views/ReturnResult.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
