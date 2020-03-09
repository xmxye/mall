<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
      <scroll class="scroll-content" ref="scroll">
        <detail-swiper :top-image="topImage"></detail-swiper>
        <detail-goods-info :goods="goods"></detail-goods-info>
        <detail-store-info :store="store"></detail-store-info>
        <detail-image-info :images="images"></detail-image-info>
        <detail-params-info :params="params"></detail-params-info>
        <detail-comment :comment="comment"></detail-comment>
        <detail-recommend :recommend="recommend"></detail-recommend>

      </scroll>
  </div>
</template>

<script>
import {getDetailInfo,getDetailRecommend,Goods,Store,Params} from "network/detail";

import Scroll from "components/common/scroll/scroll"


import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailStoreInfo from './childComps/DetailStoreInfo'
import DetailImageInfo from './childComps/DetailImageInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'

import {debounce} from "common/utils"



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
      itemImgListener:null

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
     DetailRecommend
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
    const refresh = debounce((this.$refs.scroll.refresh),3600);
    this.itemImgListener = ()=>{
      console.log('detail监听了图片加载事件');
      refresh()
    }
    // 1. 监听商品列表
    this.$bus.$on('load',this.itemImgListener)
      
  },
  methods: {
    /**
     * 1. 获取详情页信息
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
    bottom: 0;
    left:0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
</style>