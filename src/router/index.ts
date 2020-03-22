import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/TopicView',
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
  {
    path: '/topicSearch',
    name: 'topicSearch',
    component: () => import('@/views/TopicSearch.vue')
  },
  {
    path: '/searchReturn',
    name: 'searchReturn',
    component: () => import('@/views/SearchReturn.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
