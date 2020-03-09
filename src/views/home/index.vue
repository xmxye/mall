<template>
  <div id="home">   
    <nav-bar class="home-nav">
      <div slot="center">
        <span>购物街</span>
      </div>
    </nav-bar> 
    <tab-control class="tab-control-top"
        :titles="['流行','新款','精选']" 
        @tabClick='tabClick'
        ref="tabControl1" v-show="isShowTabControlTop">
    </tab-control>
    <scroll class="scroll-content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="scrollContent" @pullingUp = "loadMore">
      <home-swiper :banners="banners" class="xmx-swiper"  @loadImg="tabControl"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-pop :pop="pop"></home-pop>
      <tab-control 
          :titles="['流行','新款','精选']" 
          @tabClick='tabClick'
          ref="tabControl2">
      </tab-control>
      <goods :goods="showGoods"></goods>       
    </scroll>   
    <back-top @click.native = "backClick()" v-show="isShowbackTop"></back-top>  
  </div>
</template>
<script>
import { getHomeMulData ,getHomeGoods} from "network/home";
import {debounce} from "common/utils"

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/scroll"

import TabControl from "components/content/tabcontrol/TabControl"
import BackTop from "components/content/backTop/BackTop"

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
    BackTop,
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
      scroll:null,
      isShowbackTop:false,
      isLoad:false,  // 轮播图的图片已经加载好了 
      tabOffsetTop:null,
      isShowTabControlTop:false,
      saveY:0,   //切换时，首页滚动的高度
      itemImgListener:null
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMulData()

    // 2. 请求商品数据
    this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')   
    
  },
  mounted() {    
    const refresh = debounce((this.$refs.scroll.refresh),3600);
    this.itemImgListener = ()=>{
       console.log('home监听了商品推荐信息')
       // goods中图片加载完毕后，调用scroll中的refresh方法，重新计算scrollHeight
      //  this.$refs.scroll.refresh();
          refresh()
     }
     this.$bus.$on('load',this.itemImgListener)

    
  },
  destroyed() {
    console.log('home页面被销毁了')
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    // 1. 保存离开首页滚动的高度
    this.saveY = this.$refs.scroll.getScrollY();

    // 2. 离开首页，取消监听事件
    this.$bus.$off('load',this.itemImgListener)
  },
  computed: {
    showGoods(){
      return this.goods[this.currentIndex].list
    }
  },
  methods: {
    /**
     * 网络请求相关的方法
     */

  // 1. 获取首页商品信息  type  page
  //  getHomeGoods(type){
  //    const page = this.goods[type].page + 1;
  //    getHomeGoods(type,page).then((res)=>{       
  //      this.goods[type].list.push(...res.data.list)
  //      this.goods[type].page += 1;
  //    })
  //  }   
  
    // 1.(测试)
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res)=>{   
        // console.log(res.data.data[type].list,'999');
        this.goods[type].list.push(...res.data.data[type].list);
        this.goods[type].page +=1;
        //完成一次上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },

     // 2. 获取首页多个数据
     getHomeMulData(){
       getHomeMulData().then(res => {
         this.banners = res.data.banners;
         this.recommends = res.data.recommends;
         this.pop = res.data.pop;
       });
     },

    
    /**
     * 事件监听相关的方法
     */
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index; //保证两次tabControl中文字是一样的
    },

    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },

    scrollContent(position){
      this.isShowbackTop = (-position.y) > 500;
      this.isShowTabControlTop = (-position.y) > this.tabOffsetTop;
    },

    loadMore(){
      getHomeGoods(this.currentIndex);
    },
    tabControl(){
       // 2. 完成tabControl的吸顶
     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  }
};
</script>    
<style scoped>
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

.tab-control-top{
  position: relative;
  top: 44px;
  z-index: 9;
  left: 0;
  right: 0
}
.tab-control-top,tab-control{
  background-color: #fff;
}
</style>