<template>
    <div class="less-wrapper">
      <!--轮播图-->
      <div class="leCar-wrapper">
        <carousel :images="lesPicArr"></carousel>
      </div>

      <!--猫头导航-->
      <div class="moNav-wrapper">
        <div class="moNavList">
          <div class="mo-item" v-for="icon in moNavArr">
            <a href="javascript:;">
              <img :src="`/static/images/${icon}`" alt="">
            </a>
          </div>
        </div>
      </div>

      <split></split>

      <!--多图轮播组件-->
      <div class="manyPh-wrapper">
        <div class="manyPh-banner">
          <i class="icon"></i>大家觉得有用
        </div>
        <!--添加轮播图-->
      </div>

    </div>
</template>

<script>
 import carousel from '../../components/carousel/carousel.vue'
 import split from '../../components/split/split.vue'
    export default {
     data () {
         return {
           lesPicArr: ['lesPic01.jpg','lesPic02.jpg','lesPic03.jpg','lesPic04.png','lesPic05.jpg'],
           moNavArr: ['lesIcon01.png','lesIcon02.png','lesIcon03.png','lesIcon04.png','lesIcon05.png']
         }
     },
      components: {
        carousel,
        split
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .less-wrapper
    width 100%
    /*轮播图*/
    .leCar-wrapper
      height 160px
    /*导航样式*/
    .moNav-wrapper
      width 100%
      padding 15px 0
      .moNavList
        display flex
        justify-content space-around
        .mo-item
          width 75px
          height 75px
          a
            display block
            img
              width 100%
    /*多图导航*/
    .manyPh-wrapper
      width 100%
      .manyPh-banner
        height 40px
        line-height 40px
        text-align center
        .icon
          display inline-block
          width 20px
          height 20px
          margin-right 5px
          margin-top -3px
          background url("./center_lunbo.png") no-repeat center
          background-size 100%
          vertical-align middle

</style>
