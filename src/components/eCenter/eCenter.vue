<template>
    <div class="eCenter-wrapper">
      <back></back>
      <split></split>


      <div class="gg">
        <div class="text">组件待开发</div>
        <p>
          公告：<br />
              现在
        </p>
      </div>
    </div>
</template>

<script>
  import split from '../../components/split/split.vue'
  import back from '../../components/back/back.vue'
    export default {
        components: {
          split,
          back
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .eCenter-wrapper
    width 100%
    position fixed
    top 0
    left 0
    z-index 100
    background-color #F5F5F5
</style>
