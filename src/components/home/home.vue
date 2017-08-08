<template>
    <div>
      <div class="home-wrapper">
        <!--轮播图组件-->
          <carousel :images="images"></carousel>

        <!--拖拽组件，待改进-->
        <div class="carOnly">
          <Carousel :auto="0" :loop="false" :delta="375">
            <div class="item">
              <a href="javascript:;">
                <img src="./goOnly.gif">
              </a>
            </div>
            <div class="item"></div>
          </Carousel>
          <!--图标导航-->
          <ul class="menu-wrapper">
            <li class="menu-item">
              <a href="javascript:;">
                <img src="./icon1.png" alt="">
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">
                <img src="./icon2.png" alt="">
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">
                <img src="./icon3.png" alt="">
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">
                <img src="./icon4.png" alt="">
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">
                <img src="./icon5.png" alt="">
              </a>
            </li>
          </ul>
        </div>

        <split></split>

        <!--每日疯抢-->
        <div class="eveBuy-wrapper">
          <!--上部分-->
          <div class="eveBuy-header">
            <div class="icon">
              <a href="javascript:;">
                <img src="./suprice.png" />
              </a>
            </div>
            <div class="time-wrapper">
              <span>距离下一场</span>
              <span class="time time-h">23</span> <span>:</span>
              <span class="time time-f">59</span> <span>:</span>
              <span class="time time-m">59</span>
            </div>
            <div class="more">
              <a href="javascript:;"></a>
            </div>
          </div>
          <!--下部分-->
          <div class="eveBuy-content"  ref="goodsList">
            <ul class="goods" ref="picUi">
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good01.jpg" alt="">
                  </a>
                <div class="good-price">89.02</div>
                <div class="good-spare">5.03</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good02.jpg" alt="">
                  </a>
                <div class="good-price">17.69</div>
                <div class="good-spare">3.15</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good03.jpg" alt="">
                  </a>
                <div class="good-price">56.21</div>
                <div class="good-spare">8.10</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good06.jpg" alt="">
                  </a>
                <div class="good-price">63.15</div>
                <div class="good-spare">11.10</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good05.jpg" alt="">
                  </a>
                <div class="good-price">98.55</div>
                <div class="good-spare">9.25</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good01.jpg" alt="">
                  </a>
                <div class="good-price">89.02</div>
                <div class="good-spare">5.03</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good02.jpg" alt="">
                  </a>
                <div class="good-price">17.69</div>
                <div class="good-spare">3.15</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good03.jpg" alt="">
                  </a>
                <div class="good-price">56.21</div>
                <div class="good-spare">8.10</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good06.jpg" alt="">
                  </a>
                <div class="good-price">63.15</div>
                <div class="good-spare">11.10</div>
              </li>
              <li class="good-item">
                  <a href="javascript:;">
                    <img src="./good05.jpg" alt="">
                  </a>
                <div class="good-price">98.55</div>
                <div class="good-spare">9.25</div>
              </li>
            </ul>
          </div>
        </div>

        <split></split>

        <!--热门栏目-->
        <div class="tags-wrapper">
          <div class="tags-banner">
            <img src="./tags.jpg" alt="">
          </div>
          <div class="tags-wrapper">
            <div class="left">
              <a href="javascript:;">
                <img src="./icon06.png" />
              </a>
            </div>
            <div class="right">
              <a href="javascript:;">
                <img src="./icon07.jpg" />
              </a>
              <a href="javascript:;">
                <img src="./icon08.jpg" />
              </a>
            </div>
          </div>
        </div>

        <split></split>

        <!--超频视频-->
        <div class="videoIcon-wrapper">

          <div class="video-banner">
            <div class="more">
              <a href="javascript:;"></a>
            </div>

            <div class="icon">
              <img src="./videoIcon.png" alt="">
            </div>

          </div>
          <div class="video-content">

            <a href="javascript:;">
              <img src="./video01.jpg" alt="">
            </a>

            <span class="time">01:13</span>

            <i class="video-btn"></i>

          </div>
          <div class="video-footer">
            <div class="text">猫科动物漱口水
              <a href="javascript:;">猫咪保健</a>
            </div>
            <div class="watcher">16042</div>
          </div>
        </div>

        <split></split>
        <!--体验管-->
        <div class="phys-wrapper">

          <div class="phys-banner">
              <div class="more">
                <a href="javascript:;"></a>
              </div>

              <div class="icon">
                <img src="./physical.png" alt="体验馆">
              </div>
          </div>
          <carousel :images="images"></carousel>
        </div>

        <split></split>

        <!--品牌特卖-->
        <div class="sale-wrapper">
          <div class="sale-banner">
            <div class="icon">
              <img src="./sale.png" alt="体验馆">
            </div>
          </div>
          <div class="sale-content">
            <div class="item">
              <div class="text">
                我的日期不完美 <span>大牌降临一折起</span>
              </div>
              <div class="pic">
                <a href="javascript:;">
                  <img src="./icon09.jpg" alt="">
                </a>
              </div>
            </div>
            <div class="item">
              <div class="text">
                蓝氏天然低敏粮 <span>亮毛&肠道护理&免疫</span>
              </div>
              <div class="pic">
                <a href="javascript:;">
                  <img src="./icon10.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>

        <split></split>

        <!--TA公益-->
        <div class="benefit-wrapper">
          <div class="benefit-banner">
            <div class="more">
              <a href="javascript:;"></a>
            </div>
            <div class="icon">
                <img src="./benefit.jpg">
            </div>
          </div>
          <div class="benefit-content">
            <div class="bgPic">
              <div class="pic-text">
                截至今日，TA公益已联合E宠商城和 <span>13</span> 家品牌累计捐赠 <span>855,546,56</span> 元
              </div>
              <div class="pic-text">
                已合作 <span>7</span> 家公益组织，举办参与 <span>2</span> 场公益活动，助养 <span>32</span> 位领养人
              </div>
            </div>
            <div class="list">
              <div class="fixItem">
                <div class="zoomImg">
                  <img src="./goodPic01.png" alt="">
                </div>
              </div>
              <div class="items" ref="benItems">
                <ul ref="benUl">
                  <li class="item">
                    <div class="item-wrap">
                      <a href="javascript:;">
                        <img src="./goodPic02.png" alt="">
                      </a>
                      <div class="text">213408</div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="item-wrap">
                      <a href="javascript:;">
                        <img src="./goodPic06.jpg" alt="">
                      </a>
                      <div class="text">213408</div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="item-wrap">
                      <a href="javascript:;">
                        <img src="./goodPic03.jpg" alt="">
                      </a>
                      <div class="text">213408</div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="item-wrap">
                      <a href="javascript:;">
                        <img src="./goodPic04.jpg" alt="">
                      </a>
                      <div class="text">213408</div>
                    </div>
                  </li>
                  <li class="item">
                    <div class="item-wrap">
                      <a href="javascript:;">
                        <img src="./goodPic05.jpg" alt="">
                      </a>
                      <div class="text">213408</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <split></split>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Carousel from 'vue-m-carousel'
  import carousel from '../carousel/carousel.vue'
  import split from '../split/split.vue'
    export default {
      data () {
          return {
              images: ['pic1.png','pic2.png','pic3.png','pic4.png','pic5.png']
          }
      },
      created () {
        this.moveGoods()
        this.moveBen()
      },
      methods: {
        moveBen () {
          this.$nextTick(() => {
               if(this.benScroll){
                    return
               }
            // 创建一个水平的滑动对象
            let benLis = this.$refs.benItems.querySelectorAll('.item')
            this.$refs.benUl.style.width = (benLis[0].offsetWidth + 10 )*benLis.length+ 'px'
            this.benScroll = new BScroll(this.$refs.benItems , {
              click: true,
              scrollX: true
            })
          })
        },
        moveGoods () {
          this.$nextTick(() => {
            if(this.goodsScroll){
              return
            }
            // 创建一个水平的滑动对象
            let goodLis = this.$refs.goodsList.querySelectorAll('.good-item')
            this.$refs.picUi.style.width = (goodLis[0].offsetWidth + 10 )*goodLis.length+ 'px'
            this.goodsScroll = new BScroll(this.$refs.goodsList , {
              click: true,
              scrollX: true
            })
          })
        }
      },
      components: {
        carousel,
        Carousel,
        split
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    width 100%
    height 100%
    .carOnly
      width 100%
      height 100%
      .carousel
        padding-bottom 120px !important
        img
          width 100%
      .menu-wrapper
        display flex
        width 100%
        .menu-item
          width 0
          flex 1
          a
            display block
            img
              width 100%


    .eveBuy-wrapper
      width 100%
      margin-bottom 10px
      .eveBuy-header
        display flex
        padding 10px
        .icon
          width 30%
          a
            display inline-block
            img
              width 100%
              vertical-align middle

        .time-wrapper
          width 60%
          font-size 0
          & span
            font-size 13px
            margin 0 1px
          &>span:first-child
            margin-right 3px
            margin-left 0
          .time
            display inline-block
            border 1px solid #ddd
            padding 1px 2px
        .more
          width 20%
          a
            display inline-block
            width 100%
            height 22px
            vertical-align middle
            background url("./moreBtn.png") no-repeat right center
            background-size 115%
      .eveBuy-content
        width 100%
        overflow hidden
        .goods
          float left
          white-space nowrap
          .good-item
            width 82px
            margin-right 10px
            display inline-block
            text-align center
            a
              img
                width 100%

            .good-price
              color red
              &:before
                content '￥'
                font-size 12px
                color red
            .good-spare
              font-size 12px
              color #999
              &:before
                content '省￥'

    .tags-wrapper
      width 100%
      .tags-banner
        width 100%
        border-bottom 1px solid #eee
        img
          width 100%

      .tags-wrapper
        width 100%
        display flex
        & img
          width 100%
        .left
          width 42.7%
        .right
          width 57.3%
          display flex
          flex-wrap wrap
          align-content stretch

    .videoIcon-wrapper
      width 100%
      .video-banner
        width 95%
        margin 0 auto
        .icon
          width 50%
          margin 10px auto
          img
            width 100%
        .more
          width 64px
          height 22px
          float right
          margin-top 15px
          a
            display inline-block
            width 100%
            height 100%
            background url("./moreBtn.png") no-repeat center
            background-size 120%


      .video-content
        width 100%
        position relative
        &>a
          display block
          width 100%
          & img
            width 100%
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


      .video-footer
        width 90%
        margin 0 auto
        padding 8px 0
        display flex
        .text
          font-size 12px
          display inline-block
          flex-grow 5
          & a
            margin-left 5px
            color red
        .watcher
          font-size 12px
          &:before
            content ''
            display inline-block
            width 10px
            height 10px
            background url("view-black.png") no-repeat center
            background-size 10px 10px
    .phys-wrapper
      width 100%
      .phys-banner
        width 95%
        margin 0 auto
        .icon
          width 50%
          margin 10px auto
          img
            width 100%
        .more
          width 64px
          height 22px
          float right
          margin-top 15px
          a
            display inline-block
            width 100%
            height 100%
            background url("./moreBtn.png") no-repeat center
            background-size 120%


    .sale-wrapper
      width 100%
      .sale-banner
        width 96%
        padding 0 2%
        border-bottom 1px solid #666
        .icon
          width 50%
          margin 10px auto
          img
            width 100%

      .sale-content
        width 100%
        .item
          width 100%
          .text
            width 96%
            padding 15px 0
            margin 0 auto
            & span
              font-size 12px
              color #999
              margin-left 5px



        .pic
          a
            display block
            & img
              width 100%

    .benefit-wrapper
      width 100%
      .benefit-banner
        width 95%
        margin 0 auto
        .icon
          width 50%
          margin 0 auto
          img
            width 100%
        .more
          width 64px
          height 22px
          float right
          margin-top 15px
          a
            display inline-block
            width 100%
            height 100%
            background url("./beneBtn.png") no-repeat center
            background-size 100%

      .benefit-content
        width 100%
        .bgPic
          width 100%
          height 140px
          background url("./bgimg01.jpg") no-repeat center
          background-size 100%
          &:before
            content ''
            display table
            clear both
          .pic-text
            font-size 14px
            font-weight 700
            color: #fff
            text-align center
            line-height 28px
            &:first-child
              margin-top 20px
            & span
              color red
              display inline-block
              line-height 14px
              background-color #fff
              padding 2px 4px
              border-radius 4px
        .list
          width 100%
          height 76px
          display flex
          .fixItem
            width 20%
            .zoomImg
              width 70%
              height 70%
              margin 16px auto 0
              & img
                width 100%

          .items
            width 80%
            white-space nowrap
            float left
            overflow hidden
            .item
              display inline-block
              text-align center
              width 102px
              height 76px
              border-left 1px solid #7e8c8d
              box-sizing border-box
              .item-wrap
                width 95%
                margin 0 auto
                height 100%
                & a
                  display block
                  height 70%
                  border-bottom 1px solid #999
                  padding 5px 0
                  box-sizing border-box
                  & img
                    width 100%
                    height 100%
                .text
                  width 100%
                  height 30%
                  padding-top 6px
                  font-size 12px
                  box-sizing border-box
                  &:before
                    content: '已捐助￥'

</style>
