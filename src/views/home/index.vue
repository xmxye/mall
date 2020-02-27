<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">
                <span>购物街</span>
            </div>
        </nav-bar>
       <home-swiper :banners="banners"></home-swiper>
       <home-recommend-view :recommends="recommends"></home-recommend-view>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMulData} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView       
    },
    data(){
        return {
            banners:[],
            recommends:[]
        }
    },
    created(){
        getHomeMulData().then(res=>{
            console.log('res的值',res.data.recommends);
            this.banners = res.data.banners;
            this.recommends = res.data.recommends
        })
    },
    mounted() {
        
    },
    methods: {
        
        
    },
}
</script>    
<style>
    .home-nav{
        background-color:RGB(255,150,170);
        color:#fff;
    }
</style>