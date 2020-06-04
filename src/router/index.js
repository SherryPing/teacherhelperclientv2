import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login/login.vue'
//webpack 使用@-> src
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'
import Users from '../components/manage/user.vue'
import Roles from '../components/manage/role.vue'
import Perms from '../components/manage/menu.vue'
import CourseList from '../components/manage/courselist.vue'
import College from '../components/manage/college.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      children:[
        {
          name:'user',
          path:'/user',
          component:Users,
        },
        {
          name:'role',
          path:'/role',
          component:Roles
        },
        {
          name:'menu',
          path:'/menu',
          component:Perms
        },
        {
          name:'course',
          path:'/course',
          component:CourseList
        },
        {
          name:'college',
          path:'/college',
          component:College
        },
      ]
    }
  ]
})
