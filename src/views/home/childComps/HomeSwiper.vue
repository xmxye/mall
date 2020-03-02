<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">                
            <img :src="item.img" alt="" @load="loadImg">
        </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'HomeSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            isLoad:false
        }
    },
    methods: {        
        loadImg(){
            if(!this.isLoad){
                this.$emit('loadImg');
                this.isLoad = true
            } 
        }
    },
}
</script>
<style>
    
</style>