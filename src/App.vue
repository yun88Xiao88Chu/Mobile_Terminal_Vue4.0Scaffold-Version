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
import {GETSELLER,GETGOODS,GETRATINGS} from 'store/mutation_types.js'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
      Head
  },
  methods: {
     ...mapActions([GETSELLER,GETGOODS,GETRATINGS])
  },
  mounted() {
     this[GETSELLER]();
     this[GETGOODS]();
     this[GETRATINGS]();
  },
} 
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./assets/stylus/mixin.styl"
  #app
    width 100%
    height 100%
    overflow hidden
    .navs
       one-px(rgba(7,17,27,.1))
       display flex
       height 40px  
       line-height 40px
       .item
          flex 1
          & > a
            width 100%
            height 100%
            display block
            text-align center
            &.active
               color rgba(240,20,20,1) 
</style>
