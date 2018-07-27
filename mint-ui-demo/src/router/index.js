import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'
import PageA from '@/components/PageA'
import PageMusic from '@/components/PageMusic'
import PagePicture from '@/components/PagePicture'
import help from '@/components/Help'
import userDetail from '@/components/userDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/user',
      name: 'user',
      component: User
      // beforeEnter (route, redirect, next) {
      //   let confirm = window.confirm('you want to open intro?')
      //   if (confirm) {
      //     next()
      //   } else {
      //     redirect('/')
      //   }
      // }
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/pageA',
      name: 'pageA',
      component: PageA,
      children: [{
        path: 'music',
        name: 'PageMusic',
        component: PageMusic
      }, {
        path: 'picture',
        name: 'PagePicture',
        component: PagePicture
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
