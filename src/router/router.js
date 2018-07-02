/* global Vue */
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/views/list'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    }
    /* *
     {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
        component: resolve => {
          require([HelloWorld], resolve)
        }
    }
    */
  ]
})
