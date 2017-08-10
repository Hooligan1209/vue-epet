<template>
    <div class="back-wrapper">
      <div class="back-header">
        <a href="/home" class="backBtn"></a>
        <div class="text">招聘公告</div>
        <i class="more" @click="toggleMore"></i>
      </div>
      <transition name="fade">
        <div class="back-show" v-show="isShow">
            <div class="showList">
            <div class="item">
              <router-link to="/home" class="home"></router-link>
              <span>首页</span>
            </div>
            <div class="item">
              <router-link to="/soft" class="soft"></router-link>
              <span>商品分类</span>
            </div>
            <div class="item">
              <router-link to="/shopCar" class="shopCar"></router-link>
              <span>购物车</span>
            </div>
            <div class="item">
              <router-link to="/eCenter" class="eCenter"></router-link>
              <span>我的e宠</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                isShow: false
            }
        },
      methods: {
        toggleMore () {
            this.isShow = !this.isShow
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .back-wrapper
    width 100%
    .back-header
      width 100%
      height 50px
      display flex
      background-color #fff
      border-bottom 1px solid #F5F5F5
      .backBtn
        display inline-block
        width 10%
        flex 10% 1 0
        background url("./personal-bico1.png") no-repeat center
        background-size 10px 20px

      .text
        width 80%
        flex 80% 1 0
        text-align center
        font-size 18px
        font-family 'youyuan'
        font-weight 700
        line-height 50px
      .more
        width 10%
        flex 10% 1 0
        background url("./imgtk-new.png") no-repeat center
        background-size 60%

    .back-show
      width 100%
      background-color #fff
      .showList
        width 100%
        display flex
        padding 8px 0
        .item
          flex 1
          text-align center
          & span
            display inline-block
            font-size 14px
            color: #666
          a
            display inline-block
            width 100%
            height 30px
            &.home
              background url("./head_icon1.png") no-repeat center
              background-size 30px
            &.soft
              background url("./head_icon2.png") no-repeat center
              background-size auto 30px
            &.shopCar
              background url("./head_icon4.png") no-repeat center
              background-size auto 30px
            &.eCenter
              background url("./head_icon5.png") no-repeat center
              background-size auto 30px


  .fade-enter-active , .fade-leave-active
    transiton all 4s
  .fade-enter , .fade-leave-to
    height 0
</style>
