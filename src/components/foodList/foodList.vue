<template>
  <div class="foodList">
    <div v-if="type == 'JK'" class="food-item" v-for="n in 10">
      <div class="icon">
        <a href="javascript:;">
          <img src="/static/images/catPic01.png" alt="">
        </a>
      </div>
      <div class="des">
        <div class="text">
          <a href="javascript:;">
            <i class="stu gtype"></i>
            <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼室内成猫粮 15磅/6.8kg</span>
          </a>
        </div>
        <div class="price">
          <div class="left">
            <span class="newPrice">328.00</span><span class="oldPrice">350.00元</span>
            <div class="sales">互动：1732（94%好评）售出：5893</div>
          </div>
          <div class="right">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type == 'GC'" class="food-item" v-for="n in 10">
      <div class="icon">
        <a href="javascript:;">
          <img src="/static/images/catPic02.jpg" alt="">
        </a>
      </div>
      <div class="des">
        <div class="text">
          <a href="javascript:;">
            <i class="stu gtype"></i>
            <span>美国原装进口天衡宝（原雪山）健乐系列 鸡肉三文鱼全猫粮  15磅/6.8kg</span>
          </a>
        </div>
        <div class="price">
          <div class="left">
            <span class="newPrice">328.00</span><span class="oldPrice">350.00元</span>
            <div class="sales">互动：1732（94%好评）售出：5893</div>
          </div>
          <div class="right">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type == 'CL'" class="food-item" v-for="n in 10">
      <div class="icon">
        <a href="javascript:;">
          <img src="/static/images/catPic03.jpg" alt="">
        </a>
      </div>
      <div class="des">
        <div class="text">
          <a href="javascript:;">
            <i class="stu gtype"></i>
            <span>美国原装进口卡比 室内成猫粮 4磅(1.8kg)</span>
          </a>
        </div>
        <div class="price">
          <div class="left">
            <span class="newPrice">328.00</span><span class="oldPrice">350.00元</span>
            <div class="sales">互动：1732（94%好评）售出：5893</div>
          </div>
          <div class="right">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type == 'CF'" class="food-item" v-for="n in 10">
      <div class="icon">
        <a href="javascript:;">
          <img src="/static/images/catPic04.jpg" alt="">
        </a>
      </div>
      <div class="des">
        <div class="text">
          <a href="javascript:;">
            <i class="stu gtype"></i>
            <span>新西兰原装进口 ZIWI Peak 风干牛肉配方全猫粮 400g </span>
          </a>
        </div>
        <div class="price">
          <div class="left">
            <span class="newPrice">328.00</span><span class="oldPrice">350.00元</span>
            <div class="sales">互动：1732（94%好评）售出：5893</div>
          </div>
          <div class="right">
            <a href="javascript:;">
              <img src="" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        data () {
            return {
                type : 'JK'
            }
        },
        created () {
            this.$nextTick(() => {
              // 获取路径中的参数
              const type = this.$route.params.type
            })
        },
      // 深度监视
      watch: {
            '$route': function (to, from) {
              // 获取最新的type值
              this.type = to.params.type
            }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foodList
    width 100%
    .food-item
      display flex
      padding 10px 0
      border-top 1px solid #bbbbbb
      .icon
        width 30%
        flex 30% 1 0
        a
          display block
          & img
            width 100%
      .des
        width 70%
        flex 70% 1 0
        display flex
        flex-wrap wrap
        .text
          font-size 14px
          line-height 18px
          a
            color: #333
            .stu
              display inline-block
              vertical-align middle
              width 28px
              height 17px
              &.gtype
                background url("/static/images/gtype_1.png") no-repeat
                background-size 28px 17px
        .price
          width 100%
          padding-top 30px
          font-size 12px
          line-height 16px
          color #b9b9b9
          display flex
          .left
            width 80%
            flex 80% 1 0
            .newPrice
              font-size 13px
              color red
              padding-right 5px
              &:before
                content '￥'
            .oldPrice
              text-decoration line-through
              &:before
                content '￥'
          .right
            width 20%
            flex 20% 1 0
            a
              display inline-block
              width 30px
              height 30px
              background url("/static/images/addcart.png") no-repeat
              background-size 30px 30px


</style>
