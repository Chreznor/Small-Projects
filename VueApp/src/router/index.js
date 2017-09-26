import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Hi from '@/components/Hi'
import Ahmazing from '@/components/Ahmazing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/edit-page',
      name: 'Edit Page',
      component: Hi
    },
    {
      path: '/ahmazing',
      name: 'Ahmazing',
      component: Ahmazing
    }

  ]
})
