<template>
    <div>
      <scroller>
        <div class="catFood-wrapper">
          <!--轮播图-->
          <div class="catCar-wrapper">
            <carousel :images="catImgArr"></carousel>
          </div>

          <!--菜单栏-->
          <div class="menu-wrapper">
            <div class="menu-item">
              <a href="javascript:;">
                <img src="./catIcon01.png" alt="">
              </a>
            </div>
            <div class="menu-item">
              <a href="javascript:;">
                <img src="./catIcon02.png" alt="">
              </a>
            </div>
            <div class="menu-item">
              <a href="javascript:;">
                <img src="./catIcon03.png" alt="">
              </a>
            </div>
            <div class="menu-item">
              <a href="javascript:;">
                <img src="./catIcon04.png" alt="">
              </a>
            </div>
          </div>

          <split></split>

          <!--品牌展示-->
          <div class="banner-wrapper">
            <div class="banner-content">
              <div class="item">
                <div class="text">
                  喜跃VS妙多乐 <span>1元换罐头</span>
                </div>
                <div class="pic">
                  <a href="javascript:;">
                    <img src="./catimg03.jpg" alt="">
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="text">
                  安娜玛特 <span>增强免疫,美毛粮</span>
                </div>
                <div class="pic">
                  <a href="javascript:;">
                    <img src="./catimg04.jpg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!--导航-->
          <div class="tabs-wrapper">
            <div class="tab">
              <router-link to="/catFood/foodList/JK">进口猫粮</router-link>
            </div>
            <div class="tab">
              <router-link to="/catFood/foodList/GC">国产猫粮</router-link>
            </div>
            <div class="tab">
              <router-link to="/catFood/foodList/CL">拆零试吃</router-link>
            </div>
            <div class="tab">
              <router-link to="/catFood/foodList/CF">处方猫粮</router-link>
            </div>
          </div>

          <!--猫粮列表-->
          <div class="foods-wrapper">

            <router-view></router-view>

          </div>
        </div>
      </scroller>
    </div>
</template>

<script>
  import carousel from '../../components/carousel/carousel.vue'
  import split from '../../components/split/split.vue'
    export default {
      data () {
          return {
              catImgArr: ['catimg01.jpg','catimg02.jpg','catimg05.jpg']
          }
      },
        components: {
          carousel,
          split
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .catFood-wrapper
    width 100%
    .catCar-wrapper
      height 160px
    .menu-wrapper
      width 100%
      padding 5px 0
      display flex
      .menu-item
        flex 1
        a
          display block
          & img
            width 100%

    .banner-wrapper
      width 100%
      padding 8px 0
      .banner-content
        width 100%
        .item
          width 100%
          .text
            width 96%
            padding 15px 0
            margin 0 auto
            & span
              font-size 12px
              color #999
              margin-left 5px



        .pic
          a
            display block
            & img
              width 100%

    .tabs-wrapper
      width 100%
      display flex
      .tab
        flex 1
        text-align center
        a
          font-size 14px
          color #333
          display inline-block
          padding 5px 8px
          background-color #eee
          border-radius 5px
          &.active
            background-color #f00
            color #fff
    .foods-wrapper
      width 100%
      margin-top 10px
</style>
