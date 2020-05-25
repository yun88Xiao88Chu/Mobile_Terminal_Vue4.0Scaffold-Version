<template>
  <div class="head">
     <div class="top">
        <div class="avatar">
           <img  :src="seller.avatar">
        </div>
        <div class="info">
           <div class="title">
              <i class="brand"></i>
              <span class="name">{{seller.name}}</span>
           </div>
           <div class="desc">
              <span>{{seller.description}}/{{seller.deliveryTime}}分钟送到</span>
           </div>
           <div class="support" v-if="seller.supports">
              <Icon class="icon" size="1" :type="seller.supports[0].type"></Icon>
              <span class="text">{{seller.supports[0].content}}</span>
           </div>
        </div>
        <div class="btn" @click="showMark=true">
           <span v-if="seller.supports">{{seller.supports.length}}个</span>
           <icon class="icon-keyboard_arrow_right"></icon>
        </div>
     </div>
     <div class="bulletin" @click="showMark=true">
           <div class="icon">
              <i></i>
           </div>
           <p class="text">
              {{seller.bulletin}}
           </p>
           <div class="arrow">
              <i class="icon-keyboard_arrow_right"></i>
           </div>
     </div>
     <div class="bg">
         <img :src="seller.bgImg">
     </div>
     <transition name="mask">
         <div class="mask" v-show="showMark">
            <div class="mainWrap">
               <div class="main">
                  <h2 class="title">{{seller.name}}</h2>
                  <div class="starsWrap">
                     <Stars size="48" :score="seller.score" :length="length"></Stars>
                  </div>
                  <V-Line class="line"><span class="text">优惠信息</span></V-Line>
                  <V-List :supports="seller.supports"></V-List>
                  <V-Line class="line"><span class="text">商家公告</span></V-Line>
                  <p class="content">
                     {{seller.bulletin}}
                  </p> 
               </div>
            </div>
            <div class="footer">
               <i class="icon-close" @click="showMark=false"></i>
            </div>
         </div>
     </transition>
  </div>
</template>

<script>
import Icon from 'components/Icon/Icon'
import Line from 'components/Line/Line'
import List from 'components/List/List'
import Stars from 'components/Stars/Stars'
import {mapState} from 'vuex'
export default {
  name: 'Head',
  data(){
     return {
        showMark:false
     }
  },
  computed: {
     ...mapState(["seller","length"])
  },
  components:{
     Icon,
     "V-Line":Line,
     "V-List":List,
     Stars
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "../../assets/stylus/mixin.styl"
 @import "../../assets/stylus/extend.styl" 
 .head
    width 100%
    height 134px
    position relative
    overflow hidden
    .top
       position relative
       height 106px
       background rgba(7,17,27,0.5)
       padding 24px 12px 18px 24px
       box-sizing border-box
       .avatar
         width 64px  
         height 64px
         float left
         margin-right 16px 
         img 
           width 100% 
           height 100%
           border-radius 4px 
       .info
           float left
           color rgba(255,255,255,1)
           margin-top -3px
           .title
               font-size 0
               margin-top 2px
               margin-bottom 8px
               .brand
                  bg-image(brand)
                  display inline-block
                  width 30px
                  height 18px
                  vertical-align middle
                  background-size 100%
                  background-repeat no-repeat
                  margin-right 6px  
               .name
                  font-size 16px
                  font-weight bold
                  vertical-align middle
                  line-height 18px   
           .desc
              font-size 12px
              font-weight 200
              line-height 12px
           .support
              margin-top 10px
              margin-bottom 2px
              .icon
                 vertical-align middle
                 margin-right 4px
              .text    
                 font-size 10px
                 vertical-align middle
       .btn
          display flex
          justify-content space-around
          align-items center
          position absolute
          right 12px
          bottom 10px
          width 40px
          height 24px
          line-height 24px
          border-radius 8px
          background-color rgba(0,0,0,.2)
          font-size 10px
          color rgba(255,255,255,1)
          font-weight 200
          span 
              margin-left 5px 
    .bulletin
         display flex
         align-items center
         height 28px
         background rgba(7,17,27,.2)
         font-size 10px
         color rgba(255,255,255,1)
         .icon
            flex-basis 26px
            margin-left 12px 
            & > i 
              bg-image(bulletin)
              background-size 100%
              background-repeat no-repeat
              display inline-block
              width 22px
              height 12px  
         .text
            flex 1
            white-space nowrap
            text-overflow ellipsis 
            overflow hidden
         .arrow
            flex-basis 26px
    .bg
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      z-index -1
      filter blur(3px)
      img
         width 100%
         height 100%
    .mask
       position fixed
       left 0
       right 0
       top 0
       bottom 0
       z-index 9
       backdrop-filter blur(7px)
       background rgba(7,17,27,.8)
       overflow auto
       .mainWrap
            min-height 100%
            .main
               @extend .clearfix
               padding-bottom 96px
               overflow hidden
               .title
                  margin-top 64px
                  text-align center
                  line-height 16px
                  font-size 16px
                  font-weight 700
                  color white
               .starsWrap
                  width 80%
                  margin 0 auto
                  text-align center
                  margin-top 16px
                  margin-bottom 28px
               .line
                  width 80%
                  margin 0 auto
                  .text 
                     margin 0 12px
                     font-size 14px
                     color rgba(255,255,255,1)
                     font-weight 100
               .content
                     width 80%
                     margin 0 auto
                     font-size 12px
                     line-height 24px
                     color rgba(255,255,255,1)
                     font-weight 200
                     padding 0 12px
                     box-sizing border-box
                     margin-top 24px       
       .footer
            margin-top -96px
            height 96px
            line-height 96px
            font-size 32px
            color rgba(255,255,255,.5)
            text-align center  
</style>
   




