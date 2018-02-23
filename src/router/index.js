import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/Pages/StartPage'
import Grammar from '@/Pages/Grammar'
import About from '@/Pages/About'
import HSK from '@/Pages/HSK'
import Additional from '@/Pages/Additional'
import Tests from '@/Pages/Tests'
import Test from '@/Pages/Tests/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Grammar',
      name: 'Grammar',
      component: Grammar
    },
    {
      path: '/HSK',
      name: 'HSK',
      component: HSK
    },
    {
      path: '/Additional',
      name: 'Additional',
      component: Additional
    },
    {
      path: '/Tests',
      name: 'Tests',
      component: Tests
    },
    {
      path: '/Test/:index/:indexItem?',
      name: 'Test',
      component: Test,
      props: true
    },
  ]
})
