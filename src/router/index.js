import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import UserDetails from '@/components/UserDetails'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { name:'home', path: '/',         component: UserList },
    { name:'user_new', path: '/user/new', component: UserDetails, props: { isNewUser: true} },
    { name:'user_edit', path: '/user/:id', component: UserDetails, props: true },
  ]
})
