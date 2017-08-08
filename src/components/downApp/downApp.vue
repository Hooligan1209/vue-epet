<template>
  <div class="downApp">
    <div class="rela">
      <span class="closeBtn">
        <img src="./closebtn.png">
      </span>
      <div class="appDowing">
        <a href="javascript:;">
          <img src="./downapp.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .downApp
    background: rgba(61,61,61,1);
    color: #fff;
    position: relative;
    z-index: 102;
    .rela
      position relative
      overflow hidden !important
      .closeBtn
        display: inline-block;
        width: 5%;
        margin-right: 2%;
        vertical-align: middle;
        position: absolute;
        top: 20%;
        left: 2%;
        & img
          width 100%
          height 100%
      .appDowing
        a
          display block
          img
            width 100%
            vertical-align middle

</style>
