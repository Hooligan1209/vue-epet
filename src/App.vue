<template>
  <div>
      <downapp v-show="isShow"></downapp>
      <div class="header-fixed">
      <header-box></header-box>
      <div class="tab-wrapper clearfix" ref="navScroll">
        <ul class="tab" ref="navUl">
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
      <div class="wrapper">
          <router-view></router-view>
      </div>
      <div class="footer-wrapper">
        <footer-box></footer-box>
      </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import header from './components/herder/header.vue'
  import footer from './components/footer/footer.vue'
  import downapp from './components/downApp/downApp.vue'
export default {
  data () {
      return {
          isShow: false
      }
  },
  created () {
      this.$nextTick(() => {
          this.navMove()
      })
  },
  methods: {
      navMove () {
           if(this.navScroll){
               return
           }
        const navArr = this.$refs.navUl.querySelectorAll('.tabPane')
        this.$refs.navUl.style.width = navArr[0].offsetWidth * navArr.length + 20 + 'px'
        this.navScroll = new BScroll(this.$refs.navScroll , {
            click: true,
            scrollX: true
        })
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
  .header-fixed
    width 100%
    background-color: #fff
    position fixed
    top 0
    z-index 20
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
          a
            font-size 14px
            line-height 36px
            width 100%
            display inline-block
            color #666
            &.active
              color #e73f85
              border-bottom 2px solid #e73f85
  .wrapper
    min-height 100%
    position relative
    top 87px
    padding-bottom 45px
  .footer-wrapper
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 45px
    line-height 45px
    background-color #fff
    text-align center
</style>
