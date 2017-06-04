import Vue                from 'vue'
import Router             from 'vue-router'
import Hello              from '@/view/Hello'
import Home               from '@/view/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
