<template>
  <div class="goods-item">
      <img class="img" :src="goodsItem.img" alt="" @load = "load">
      <p class="description">{{goodsItem.description}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">★{{goodsItem.collect}}</span>
  </div>
</template>

<script>
export default {
  name: 'GoodsItem',
  data () {
    return {
      
    }
  },
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
      
  },
  mounted () {
      
  },
  methods: {
    load(){
      this.$bus.$emit('load')
    }
  }
}
</script>

<style scoped>
.goods-item{
  width:48%;
  text-align: center;
  margin-bottom: 10px;
  
}
.goods-item img{
  width: 100%
}
.goods-item p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px;
}
.goods-item span{
  margin-left: 6px;
}
</style>