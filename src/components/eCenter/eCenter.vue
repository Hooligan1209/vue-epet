<template>
    <div class="eCenter-wrapper">

      <!--提示页面-->
      <div class="refresh-wrapper" v-if="showLogin">
        <back :title="tsTitle"></back>
        <split></split>
        <div class="warn-wrapper">
          <div class="warnIcon">
            <img src="./TB1zm.png" alt="">
          </div>
          <p>验证登录中...</p>
          <p class="text">如果没有自动跳转，请手动点击!</p>
          <div class="btn" @click="hideWarn">
            立即跳转
          </div>
        </div>
      </div>

      <!--登录页面-->
      <div class="show-wrapper" v-else="showLogin">
        <div class="logoBg">
          <div class="regist">
            <a class="icon" href="/home"></a>
            <a href="javascript:;">注册</a>
          </div>

          <div class="logo">
            <img src="./logo.png" alt="">
          </div>

          <mt-navbar class="login" v-model="selected">
              <mt-tab-item id="1" class="common">
                  普通登录 <i class="csj"></i>
              </mt-tab-item>
              <mt-tab-item id="2" class="mobile">
                  手机动态密码登录 <i class="msj"></i>
              </mt-tab-item>
          </mt-navbar>
        </div>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <form action="#" class="form-wrapper">
              <div class="input-wrapper">
                <i class="user"></i>
                <input type="text" name="username" placeholder="手机号/邮箱/用户名">
              </div>
              <div class="input-wrapper">
                <i class="lock"></i>
                <input type="password" name="password" placeholder="输入密码">
              </div>

              <div class="lose">
                <a href="javascript:;">忘记密码?</a>
              </div>

              <mt-button type="primary" size="large">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
            </form>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <form action="#" class="form-wrapper">
              <div class="input-wrapper">
                <i class="phNum"></i>
                <input type="number" name="username" placeholder="手机号">
              </div>
              <div class="input-wrapper">
                <i class="lock"></i>
                <input type="password" name="password" placeholder="验证密码">
              </div>

              <div class="lose">
                <a href="javascript:;">忘记密码</a>
              </div>

              <mt-button type="primary" size="large">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
            </form>
          </mt-tab-container-item>
          </mt-tab-container-item>

        </mt-tab-container>


        <div class="join-wrapper">

          <p>合作网站登录</p>
          <div class="join">
            <div class="join-icon">
              <img src="./login_ico2.png" alt="">
            </div>
            <div class="join-icon">
              <img src="./login_ico4.png" alt="">
            </div>
          </div>
        </div>

      </div>


    </div>
</template>

<script>
  import {Navbar , TabItem , Button} from 'mint-ui'
  import split from '../../components/split/split.vue'
  import back from '../../components/back/back.vue'
    export default {
      data () {
        return {
            showLogin: true,
            tsTitle: '提示信息',
            loginTitle: '注册 / 登录',
            selected:'1'
        }
      },
      methods: {
        hideWarn () {
            this.showLogin = !this.showLogin
        }
      },

      created () {
          setTimeout(() => {
              this.showLogin = false
          } , 3000)
      },
      components: {
        split,
        back
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .eCenter-wrapper
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    z-index 100
    background-color #F5F5F5
    .warn-wrapper
      width 80%
      height 100%
      margin 40% auto 0
      text-align center
      .warnIcon
        width 30%
        margin 0 auto
        img
          width 100%
      p
        color #333
        margin-top 35px
        &.text
          color #7e8c8d
      .btn
        padding 8px 10px
        border 1px solid #333
        display inline-block
        border-radius 5px
        margin-top 30px
    .show-wrapper
      width 100%
      .logoBg
        background url("./bgimg.png") no-repeat
        background-size 100%
        .regist
          width 95%
          margin 0 auto
          height 50px
          line-height 50px
          .icon
            display inline-block
            width 10px
            height 20px
            background url("./personal-bico3.png") no-repeat center
            background-size 100%
            float left
            margin-top 10px

          a
            display inline-block
            float right
            color #fff
        .logo
          width 20%
          margin 10px auto 15px
          img
            width 100%
        .login
          width 100%
          height 44px
          display flex
          background-color rgba(225,225,225,.5)
          text-align center
          line-height 44px
          a
            color #fff
            .mint-tab-item-label
              font-size 14px
          .common
            flex 1
            position relative
            border none
            margin-bottom 0
            &:hover
              .csj
                display inline-block
                width 0
                height 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                bottom 0
                left 0
                right 0
                margin auto
          .mobile
            flex 1
            border none
            margin-bottom 0
            position relative
            &:hover
              .msj
                display inline-block
                width 0
                height 0
                border-left 10px solid transparent
                border-right 10px solid transparent
                border-bottom 10px solid #fff
                position absolute
                bottom 0
                left 0
                right 0
                margin auto

    .mint-tab-container-wrap
      width 100%
      background-color #fff
      .form-wrapper
        width 90%
        margin 0 auto
        .input-wrapper
          width 100%
          height 45px
          line-height 45px
          border-bottom 1px solid #c3d2d3
          display flex
          i
            width 10%
            flex 10% 1 0
            &.user
              background url("./ico3.png") no-repeat center
              background-size 50%
            &.lock
              background url("./ico4.png") no-repeat center
              background-size 50%
            &.phNum
              background url("./ico1.png") no-repeat center
              background-size 50%

          input
            width 90%
            flex 90% 1 0
            outline none

        .lose
          width 100%
          height 30px
          line-height 30px
          text-align right
        .mint-button--primary
          margin-top 15px
          background-color #2EC975
          font-size 14px

    .join-wrapper
      width 100%
      background-color #fff
      p
        width 100%
        color #666
        text-align center
        padding 50px 0
      .join
        width 90%
        margin 0 auto
        display flex
        .join-icon
          flex 1
          text-align center
          img
            width 45%

</style>
