<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-pop :pop="pop"></home-pop>
    <TabControl :titles="['流行','新款','精选']"></TabControl>


    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>     
    </ul>

    
  </div>
</template>
<script>
import { getHomeMulData ,getHomeGoods} from "network/home";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl"
// import Goods from "components/content/"

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomePop from "./childComps/HomePop";


export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomePop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      pop: "",
      listParams : {
        pageIndex: 2,
        pageSize: 10
      }     
    }
  },
  created() {
    getHomeMulData().then(res => {
      this.banners = res.data.banners;
      this.recommends = res.data.recommends;
      this.pop = res.data.pop;
    });

    // 获取商品信息  
    getHomeGoods(this.listParams).then(res => {
      console.log('测试',res.data)
    });   
    
  },
  mounted() {     
   
  },
  methods: {
  
  }
};
</script>    
<style>
.home-nav {
  background-color: RGB(255, 150, 170);
  color: #fff;
}
</style>