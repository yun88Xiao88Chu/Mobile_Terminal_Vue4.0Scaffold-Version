<template>
  <div class="head">
     <div class="top">
        <div class="avatar">
           <img  src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg">
        </div>
        <div class="info"></div>
        <div class="btn"></div>
     </div>
     <div class="notice"></div>
  </div>
</template>

<script>
export default {
  name: 'Head',
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .head
    width 100%
    height 134px
    background green
    .top
       height 106px
       padding 24px 12px 18px 24px
       background rgba(7,17,27,0.5)
       .avatar
         width 100px  
         height 100px 
         img 
           width 40px 
           height 40px 
             

             

</style>
