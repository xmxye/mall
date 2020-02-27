<template>
  <div class="home-recommend-view">
      <div v-for="(item,index) in recommends" :key="index" class="home-recommend-item">
        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
     </div>
  </div>
</template>
<script>

export default {
    name:'HomeRecommendView',
   
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }    
}
</script>
<style>
    .home-recommend-view{
        display: flex;
        flex-wrap: wrap;
        padding:0 5px;
        box-sizing: border-box;

    }
    .home-recommend-item{
        width:25%;
        text-align: center;
        padding: 10px 5px 10px 5px;
        box-sizing: border-box;
        
    }
    .home-recommend-item img{
        width: 100%;
        border-radius: 50%;
    }
    .home-recommend-item p{
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
</style>