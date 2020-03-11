<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav-bar" @itemClick="itemClick" ref="nav"></detail-nav-bar>
      <scroll class="scroll-content" ref="scroll" @scroll="scrollContent" :probe-type = '3'>
        <detail-swiper :top-image="topImage"></detail-swiper>
        <detail-goods-info :goods="goods"></detail-goods-info>
        <detail-store-info :store="store"></detail-store-info>
        <detail-image-info :images="images" @load="loadImage"></detail-image-info>
        <detail-params-info ref="params" :params="params"></detail-params-info>
        <detail-comment ref="comment" :comment="comment"></detail-comment>
        <detail-recommend ref="recommend" :recommend="recommend"></detail-recommend>
      </scroll>
      <back-top @click.native = "backClick()" v-show="isShowbackTop"></back-top> 
      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import {getDetailInfo,getDetailRecommend,Goods,Store,Params} from "network/detail";

import {debounce} from "common/utils"
import {itemListenerMixin,backTopMixin} from 'common/mixin'

import Scroll from "components/common/scroll/scroll"

import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailStoreInfo from './childComps/DetailStoreInfo'
import DetailImageInfo from './childComps/DetailImageInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'

import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      id:null,
      topImage:[],
      goods:{},   // 商品详情
      store:{},   // 店铺详情
      images:[],    // 商品图片
      params:{},   // 商品参数
      comment:[],  // 商品评论
      recommend:[],  // 推荐商品
      titlesTop:[],
      currentIndex:0,
    }
  },
  components: {
     Scroll,
     DetailNavBar,
     DetailSwiper,
     DetailGoodsInfo,
     DetailStoreInfo,
     DetailImageInfo,
     DetailParamsInfo,
     DetailComment,
     DetailRecommend,
     DetailBottomBar,
  },
  created() {
      /**
       * 获取请求页数据
       */
      this.id = this.$route.query.id;
      this.getDetailInfo()  
      this.getDetailRecommend() 
     
 },
  mounted () {
     
  },
  computed: {
   

  },
  mixins:[itemListenerMixin,backTopMixin],
  methods: {
    ...mapActions(['addCart']),
    /**
     *   1. 获取详情页信息
     */
      getDetailInfo(){
          getDetailInfo().then((res)=>{

          // 1. 获取轮播图数据
          this.topImage = res.data.topImage;

          // 2. 获取商品介绍信息
          this.goods = new Goods(res.data);

          // 3. 获取店铺详情
          this.store = new Store(res.data)

          // 4. 获取商品图片
          this.images = res.data.goodsImage

          // 5. 获取商品参数信息
          this.params = new Params(res.data)

          // 6. 获取商品的评论信息
          this.comment = res.data.comment

        }).catch(err=>{
          console.log(err)
        })
      },

      /**
       * 2. 获取详情页的推荐商品
       */
      getDetailRecommend(){
          getDetailRecommend().then((res)=>{
            this.recommend = res.data.info
          })
      },
      
      /**
       * 3. 监听图片加载
       */
      loadImage(){        
          this.refresh();
          this.titlesTop = [];
          this.titlesTop.push(0);
          this.titlesTop.push(this.$refs.params.$el.offsetTop);
          this.titlesTop.push(this.$refs.comment.$el.offsetTop);
          this.titlesTop.push(this.$refs.recommend.$el.offsetTop);
          this.titlesTop.push(Number.MAX_VALUE);
      },

      /**
       * 4. 监听导航栏点击
       */
      itemClick(index){
        this.$refs.scroll.scrollTo(0,-this.titlesTop[index]);
      },

      /**
       * 5. 监听滚动的位置
       */
      scrollContent(position){
          this.isShowbackTop = (-position.y) > 500;
        /**
         * 方法一
         */
        // let saveY = -position.y;  // 获取滚动距离
        // const len = this.titlesTop.length;   

        // for(let i = 0; i < len ; i++){  // 0  1  2  3 

        //   // this.currentIndex !==i   节约性能，当i的值未改变时，不对导航栏的currentIndex进行重新赋值
        //   // 分两种情况，是避免索引为4的时候，取不到数组中的值
          

        //     if((this.currentIndex != i)&&((i<len-1 && saveY >= this.titlesTop[i] && saveY < this.titlesTop[i+1]) || (i==len-1 && saveY >= this.titlesTop[i]))){
        //       this.currentIndex = i;
        //       this.$refs.nav.currentIndex = i;   // 导航栏标题的显示，是通过currentIndex控制
        //     }
        // }

        /**
         * 方法二  用空间换时间
         *      往数组多加了一个很大的数  Number.MAX_VALUE
                把那两种情况合并了，但是遍历的时候只是变量前面4个，不包括最后一个
         */
          let saveY = -position.y;  // 获取滚动距离
          const len = this.titlesTop.length; 

          for(let i = 0 ;i <len - 1; i++){
              if((this.currentIndex !==i)&&(saveY >= this.titlesTop[i] && saveY < this.titlesTop[i+1])){
                  this.currentIndex = i;
                  this.$refs.nav.currentIndex = i;
              }
          }
      },

      /**
       * 6. 将商品添加购物车
       */
      addToCart(){
        const product = {}
        product.image = this.topImage[0].img;
        product.desc = this.goods.describe;
        product.price = this.goods.nowPrice;
        product.id = this.id;
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res)
        // })      
        this.addCart(product).then(res=>{
           this.$toast.show(res);
        })
      }
  },
  destroyed() { 
      this.$bus.$off('load',this.itemImgListener)
    }
}
</script>

<style scoped>
  .detail-nav-bar{
    position: relative;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 10;
    background-color: #fff;
  }
  .scroll-content{
    /* height: calc(100vh - 44px - 49px); */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
</style>