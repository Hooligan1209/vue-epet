<template>
  <div>
      <downapp v-show="isShow"></downapp>
      <div class="wrapper">
        <div class="content-wrapper">
          <div class="header-fixed">
            <header-box></header-box>
            <div class="tab-wrapper clearfix">
              <ul class="tab">
                <li class="tabPane active">
                  <router-link to="/home">首页</router-link>
                </li>
                <li class="tabPane">
                  <router-link to="/catFood">猫粮</router-link>
                </li>
                <li class="tabPane">
                  <router-link to="/special">特卖</router-link>
                </li>
                <li class="tabPane">
                  <router-link to="/supermarket">罐头超市</router-link>
                </li>
                <li class="tabPane">
                  <router-link to="/vid">潮品视频</router-link>
                </li>
                <li class="tabPane">
                  <router-link to="/lesson">新喵课堂</router-link>
                </li>
              </ul>
            </div>
          </div>

          <router-view></router-view>

        </div>
      </div>

      <div class="footer-wrapper">
        <footer-box></footer-box>
      </div>

  </div>
</template>

<script>
import header from './components/herder/header.vue'
import footer from './components/footer/footer.vue'
import downapp from './components/downApp/downApp.vue'
export default {
  data () {
      return {
          isShow: true
      }
  },

  components: {
      'header-box': header,
      'footer-box': footer,
      downapp
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .clearfix
    &:before , &:after
      content ''
      display table
      clear both
  .downApp
    text-align center
  .wrapper
    min-height 100%
    .content-wrapper
      padding-bottom 45px
      .header-fixed
        width 100%
        background-color: #fff
        .tab-wrapper
          width 100%
          height 36px
          overflow hidden
          .tab
            float left
            white-space nowrap
            .tabPane
              display inline-block
              width 75px
              height 36px
              text-align center
              &.active
                border-bottom 2px solid #e73f85
              a
                font-size 14px
                line-height 36px
                color #666
                &.active
                  color #e73f85


  .footer-wrapper
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 45p
    line-height 45px
    background-color: #bfa
    text-align center
</style>
