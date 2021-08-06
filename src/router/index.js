// 引入路由模組並使用它
import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/components/ToDoList'

Vue.use(Router)

// 建立路由例項並配置路由對映  
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoList
    }
  ]
})