<template>

  <div>
    <div class="carousel-wrapper">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(image,index) in images" :key="index">
            <img :src="`static/images/${image}`" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>

</template>

<script>
 import {Swipe , SwipeItem} from 'mint-ui'

    export default {
        props: {
            images: Array
        },
      components: {
        Swipe,
        SwipeItem
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .carousel-wrapper
    height 160px
    .mint-swipe
      .mint-swipe-items-wrap
        img
          width 100%
      .mint-swipe-indicators
        .mint-swipe-indicator
          width: 8px;
          height: 8px;
          display: inline-block;
          border-radius: 100%;
          background: #fff;
          opacity 0.8
          &.is-active
            width 17px
            border-radius 30%
            background #fff
            opacity 0.8
</style>
