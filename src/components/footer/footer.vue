<template>
    <div>
      <div class="footList">
        <div class="item">
          <router-link to="/home" class="home"></router-link>
        </div>
        <div class="item">
          <router-link to="/soft" class="soft"></router-link>
        </div>
        <div class="item">
          <router-link to="/shopCar" class="shopCar"></router-link>
        </div>
        <div class="item">
          <router-link to="/eCenter" class="eCenter"></router-link>
        </div>
      </div>
    </div>
</template>

<script>

    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footList
    width 100%
    display flex
    .item
      flex 1
      height 45px
      a
        display block
        width 100%
        height 100%
        &.home
          background url("./main_tab_1.png") no-repeat center
          background-size auto 40px
          &.active
            background url("./main_cattab_1_sel.png") no-repeat center
            background-size auto 40px
        &.soft
          background url("./main_tab_2.png") no-repeat center
          background-size auto 40px
          &.active
            background url("./main_cattab_2_sel.png") no-repeat center
            background-size auto 40px
        &.shopCar
          background url("./main_tab_3.png") no-repeat center
          background-size auto 40px
        &.eCenter
          background url("./main_tab_4.png") no-repeat center
          background-size auto 40px


</style>
