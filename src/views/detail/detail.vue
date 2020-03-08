<template>
  <div class="detail">
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :top-image="topImage"></detail-swiper>
  </div>
</template>

<script>
import {getDetailInfo} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from "./childComps/DetailSwiper"


export default {
  name: 'Detail',
  data () {
    return {
      id:null,
      topImage:[]
    }
  },
  components: {
     DetailNavBar,
     DetailSwiper
  },
  created() {
      /**
       * 获取请求页数据
       */
      this.id = this.$route.query.id;
      getDetailInfo().then((res)=>{
        // console.log(res.data,7);
        // 1. 获取轮播图数据
        this.topImage = res.data.topImage;
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