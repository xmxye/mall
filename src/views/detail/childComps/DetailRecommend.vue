<template>
  <div class="detail-recommend">
      <goods-list>
          <goods-item v-for="(item,index) in recommend" :key="index" :goods-item = "item">
              <!-- {{item}} -->
          </goods-item>
      </goods-list>

  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'
import GoodsList from 'components/content/goods/GoodsList'
export default {
  name: 'DetailRecommend',
  data () {
    return {
      
    }
  },
  components: {
      GoodsItem,
      GoodsList
  },
  props:{
      recommend:{
          type:Array,
          default(){
              return []
          }
      }
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
.detail-recommend{
    background-color: #fff;
}
</style>