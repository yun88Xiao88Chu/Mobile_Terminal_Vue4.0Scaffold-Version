<template>
  <div class="list">
     <ul>
       <li v-for="(support,index) in supports" :key="index">
          <Icon class="icon" size="2" :type="support.type"></Icon>
          <span class="text">{{support.content}}</span>
       </li>
     </ul>
  </div>
</template>

<script>
import Icon from 'components/Icon/Icon'
export default {
  name: 'V-List',
  props:{
     supports:Array
  },
  components:{
    Icon
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .list
        width 80%
        height 200px
        margin 0 auto
        margin-top 24px
        margin-bottom 28px
        padding 0 12px
        box-sizing border-box
        & > ul 
           & > li
             display flex
             align-items center
             margin-bottom 12px
             &:last-child
                margin-bottom 0  
             .icon
                margin-right 6px
             .text
                font-size 12px
                line-height 12px
                color rgba(255,255,255,1)
                font-weight 200
</style>
