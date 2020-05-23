<template>
  <div id="app">
     <Head></Head>
     <div class="navs">
        <div class="item">
           <router-link to="/goods">商品</router-link>
        </div>
        <div class="item">
           <router-link to="/ratings">评价</router-link>
        </div>
        <div class="item">
           <router-link to="/seller">商家</router-link>
        </div>
     </div>
     <!-- 控制显示所有一级路由 -->
      <router-view></router-view>
  </div>
</template>

<script>
import Head from 'components/Head/Head.vue'

export default {
  name: 'App',
  components:{
      Head
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    overflow hidden
</style>
