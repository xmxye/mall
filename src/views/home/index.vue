<template>
  <div id="home">   
    <nav-bar class="home-nav">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar> 
    <scroll class="scroll-content">
      <home-swiper :banners="banners" class="xmx-swiper"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-pop :pop="pop"></home-pop>
      <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
      <goods :goods="showGoods"></goods>       
    </scroll>   
       
  </div>
</template>
<script>
import { getHomeMulData ,getHomeGoods} from "network/home";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/scroll"

import TabControl from "components/content/tabcontrol/TabControl"


import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomePop from "./childComps/HomePop";
import Goods from "./childComps/HomeGoods"




export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
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
      currentIndex:'pop',
      scroll:null 
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
#home{
  position: relative;
  height: 100vh;
}
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
  /* margin-top: 44px */
}

.scroll-content{
  position: absolute;
  top: 44px;
  bottom: 49px;
}

</style>