<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar>
    <home-swiper :banners="banners" class="xmx-swiper"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-pop :pop="pop"></home-pop>
    <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
    <goods :goods="showGoods"></goods>

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

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomePop from "./childComps/HomePop";
import Goods from "./childComps/HomeGoods"




export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommendView,
    HomePop,
    Goods

  },
  data() {
    return {
      banners: [],
      recommends: [],
      pop: "",
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentIndex:'pop' 
    }
  },
  created() {
    // 1. 获取首页多个数据
    getHomeMulData().then(res => {
      this.banners = res.data.banners;
      this.recommends = res.data.recommends;
      this.pop = res.data.pop;
    });

    this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')   
    
  },
  mounted() {     
   
  },
  computed: {
    showGoods(){
      return this.goods[this.currentIndex].list
    }
  },
  methods: {
    // 1. 获取首页商品信息  type  page
  //  getHomeGoods(type){
  //    const page = this.goods[type].page + 1;
  //    getHomeGoods(type,page).then((res)=>{       
  //      this.goods[type].list.push(...res.data.list)
  //      this.goods[type].page += 1;
  //    })
  //  }   
  
      // 1.(测试)  获取商品信息
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res)=>{   
        // console.log(res.data.data[type].list,'999');
        this.goods[type].list.push(...res.data.data[type].list);
        this.goods[type].page +=1
      })
    },
    
    // 2.tabClick点击后，传到父组件的数据
    tabClick(index){
        switch(index){
          case 0: 
              this.currentIndex = 'pop';
              break;
          case 1: 
             this.currentIndex = 'new';
             break;
          case 2: 
             this.currentIndex = 'sell'
             break;
        }
    }
  }
};
</script>    
<style>
.home-nav {
  background-color: RGB(255, 150, 170);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.xmx-swiper{
  margin-top: 44px
}
</style>