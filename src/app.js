// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue              from 'vue'
import { sync }         from 'vuex-router-sync'

import store            from './store'
import App              from './App.vue'
import router           from './router'

Vue.router = router
Vue.config.devtools = true

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
