<template>
    <div class="header-wrapper">
      <div class="search-wrapper">
        <div class="search-left">
          <span>猫站</span>
          <span>|</span>
          <a href="javascript:;">
            <span>北京</span>
            <i class="icon"></i>
          </a>
        </div>
        <div class="search-text">
          <a href="">
            <input type="search" placeholder="搜索商品和品牌">
            <i class="text-icon"></i>
          </a>
        </div>
        <a href="javascript:;" class="search-right">
          <img src="./mydope.png" alt="">
        </a>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    width 95%
    padding 5px 0
    margin 0 auto
    position relative
    .search-wrapper
      width 100%
      display flex
      align-items center
      padding: 8px 0;
      background: #fff;
      .search-left
        margin-right 20px
        font-size 0
        position relative
        color #666
        span
          font-size 14px
        .icon
          position absolute;
          top: 0
          right: -11px;
          border-width: 4px;
          font-size: 0;
          line-height: 0;
          border-style: dotted solid solid solid;
          border-color: transparent transparent #666 transparent;
      .search-text
        position relative
        flex 1
        a
         color #333
        input
          width: 100%;
          border: none;
          height: 25px;
          background: #f6f6f6;
          border-radius: 4px;
          color: #9e9e9e;
          text-indent: 10px;
          font-size: 13px;
          outline: none;
        i
          width: 11px;
          height: 11px;
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          background-position: 0 0;
          &.text-icon
            background url("./search.png")
            background-size 11px 11px
      .search-right
        display block
        & img
          margin-left 10px
          vertical-align middle
          width 25px

</style>
