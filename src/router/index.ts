import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/codeInput',
    name: 'codeInput',
    component: () => import('@/views/CodeInputView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
