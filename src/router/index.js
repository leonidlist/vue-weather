import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Configure from '@/components/Configure.vue'
import Weather from '@/components/Weather.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/configure',
      name: 'Configure',
      component: Configure
    },
    {
      path: '/weather',
      name: Weather,
      component: Weather
    }
  ],
  mode: 'history'
})
