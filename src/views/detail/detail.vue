<template>
  <div class="detail">
      <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
      <scroll class="scroll-content">
        <detail-swiper :top-image="topImage"></detail-swiper>
        <detail-goods-info :goods="goods"></detail-goods-info>
        <detail-store-info :store="store"></detail-store-info>
        <detail-image-info :images="images"></detail-image-info>
        <detail-params-info :params="params"></detail-params-info>
        <detail-comment :comment="comment"></detail-comment>
      </scroll>
  </div>
</template>

<script>
import {getDetailInfo,Goods,Store,Params} from "network/detail";

import Scroll from "components/common/scroll/scroll"


import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailStoreInfo from './childComps/DetailStoreInfo'
import DetailImageInfo from './childComps/DetailImageInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailComment from './childComps/DetailComment'




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
      comment:[]  // 商品评论
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
     DetailComment
  },
  created() {
      /**
       * 获取请求页数据
       */
      this.id = this.$route.query.id;
      getDetailInfo().then((res)=>{
        console.log(res.data,7);

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
  mounted () {
      
  },
  methods: {
    
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
    z-index: 9;
    background-color: #fff;
  }
</style>