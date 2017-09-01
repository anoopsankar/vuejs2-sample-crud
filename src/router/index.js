import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import UserList from '@/components/UserList'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { name:'home', path: '/',         component: UserList },
    { name:'user', path: '/user/:id', component: UserDetails, props: true },
    { name:'helo', path: '/hello',    component: Hello },
  ]
})
