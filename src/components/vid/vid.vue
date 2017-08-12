<template>
  <scroller>
    <div class="vidIcons-wrapper">
      <div class="vidIcon-wrapper" v-for="n in 20">
        <div class="vid-content">

          <a href="javascript:;">
            <img src="./video01.jpg" alt="">
          </a>
          <div class="watcher">16042</div>
          <span class="time">01:13</span>

          <i class="video-btn"></i>

        </div>
        <div class="vid-footer">
          <div class="text">猫科动物漱口水
            <a href="javascript:;">猫咪保健</a>
          </div>

        </div>
      </div>
    </div>
  </scroller>

</template>

<script>

    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vidIcons-wrapper
    width 95%
    margin 0 auto
    display flex
    flex-wrap wrap
    justify-content space-around
    .vidIcon-wrapper
      width 46%
      margin-top 10px
      flex 46% 0 0
      .vid-content
        width 100%
        position relative
        &>a
          display block
          width 100%
          & img
            width 100%
        .watcher
          font-size 12px
          color: #fff
          position absolute
          top 3px
          left 3px
          &:before
            content ''
            display inline-block
            width 10px
            height 10px
            background url("view-black.png") no-repeat center
            background-size 10px 10px

        .time
          font-size 12px
          color #fff
          position absolute
          top 3px
          right 3px
        .video-btn
          width 20px
          height 20px
          border-radius 50%
          position absolute
          top 50%
          left 50%
          margin-top -10px
          margin-left -10px
          background url("./play.png") no-repeat center


      .vid-footer
        width 90%
        margin 0 auto
        padding 8px 0
        .text
          font-size 12px
          display inline-block
          & a
            margin-left 5px
            color red

</style>
