import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/index.vue'
import Contact from '../pages/chat/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/webim/',
  routes: [
    {
      path: '/webim',
      redirect: '/webim/contact'
    },
    {
      path: '/webim/',
      redirect: '/webim/contact'
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/register',
    //   name: 'login',
    //   component: Login
    // },
    {
      path: '/webim/contact/:id',
      name: 'contact',
      component: Contact
    },
    {
      path: '/webim/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/webim/group/:id',
      name: 'group',
      component: Contact
    },
    {
      path: '/webim/group',
      name: 'group',
      component: Contact
    },
    {
      path: '/webim/chatroom/:id',
      name: 'chatroom',
      component: Contact
    },
    {
      path: '/webim/chatroom',
      name: 'chatroom',
      component: Contact
    }
  ]
})
