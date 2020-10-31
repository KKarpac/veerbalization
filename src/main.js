import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router);

import Home from './components/Home.vue'
import MandM from './components/MandM.vue'
import MusicLabel from './components/MusicLabel.vue'
import Dojo from './components/Dojo.vue'

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/mandm', component: MandM },
  { path: '/musiclabel', component: MusicLabel },
  { path: '/dojo', component: Dojo }

]

// Create the router instance and pass the `routes` option
const router = new Router({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
