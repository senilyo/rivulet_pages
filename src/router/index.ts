import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: () => import('@/views/IndexView.vue')
  },
  {
    path: '/problemItem',
    name: 'ProblemItemView',
    component: () => import('@/views/ProblemItemView.vue')
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
    path: '/problemSet',
    name: 'problemSet',
    component: () => import('@/views/ProblemSet.vue'),
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
