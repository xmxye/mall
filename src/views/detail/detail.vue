<template>
  <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
  </div>
</template>

<script>
import {getDetailInfo,Goods} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"
import DetailGoodsInfo from './childComps/DetailGoodsInfo'


export default {
  name: 'Detail',
  data () {
    return {
      id:null,
      topImage:[],
      goods:{}
    }
  },
  components: {
     DetailNavBar,
     DetailSwiper,
     DetailGoodsInfo
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
  
</style>