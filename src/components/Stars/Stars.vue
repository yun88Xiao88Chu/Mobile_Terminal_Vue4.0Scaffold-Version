<template>
  <div class="stars" :class="`stars-${size}`">
      <div class="star" :class="item"
           v-for="(item,index) in scoreArr" :key="index"></div>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props:{
      size:String,
      score:Number,
      length:Number
  },
  computed: {
      scoreArr(){
          //边界情况处理
          if(this.score === undefined) return ["off","off","off","off","off"]
          if(this.score < 0) return ["off","off","off","off","off"]
          if(this.score > 5) return ["on","on","on","on","on"]
          let arr = []
          //严格处理的分数
          let score = Math.floor(this.score*2) / 2;
          //满星的数量
          let fullSize = Math.floor(score);
          //是否需要半星
          let needHalf = (score % 1) === 0 ? false:true
          for(var i=0;i<fullSize;i++){
              arr.push("on")
          }
          if(needHalf) arr.push("half")
          while(arr.length < this.length) arr.push("off")
          return arr;
      }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/stylus/mixin.styl"
    .stars
        display inline-flex
        .star
            background-size 100%
            background-repeat no-repeat
        &.stars-48
            .star
                width 20px
                height 20px
                margin-right 12px
                &:last-child
                     margin-right 0
                &.on
                    bg-image(star48_on)
                &.half
                    bg-image(star48_half)
                &.off
                    bg-image(star48_off)                   
        &.stars-36
            .star
                width 15px
                width 15px
                margin-right 9px
                &:last-child
                    margin-right 0
                &.on
                    bg-image(star36_on)
                &.half
                    bg-image(star36_half)
                &.off
                    bg-image(star36_off)        
        &.stars-24
            .star 
                width 10px
                width 10px
                margin-right 6px
                &:last-child
                    margin-right 0
                &.on 
                    bg-image(star24_on)
                &.half 
                    bg-image(star24_half)
                &.off
                    bg-image(star24_off)              
</style>
