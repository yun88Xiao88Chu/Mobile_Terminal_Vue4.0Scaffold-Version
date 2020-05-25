import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

//声明使用vue的插件
Vue.use(VueRouter);

//创建并暴露路由器对象
export default new VueRouter({
  // mode: 'history', // 路由路径不带#号
  
  // 配置应用中的所有路由
  routes,
  // 滚动配置  ==> 跳转路由时自动滚动到最上面 
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   return {
  //     x: 0,  // 水平方向最左边
  //     y: 0   // 竖直方向最上面
  //   }
  // }
  linkActiveClass:"active"
})
