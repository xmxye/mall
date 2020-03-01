<template>
    <goods-list>
        <goods-item v-for="(item,index) in goods" :key="index" :goods-item = "item">
           {{item}}
        </goods-item>
    </goods-list>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
import GoodsItem from 'components/content/goods/GoodsItem'

export default {
  name: '',
  data () {
    return {
      
    }
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
      GoodsList,
      GoodsItem
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>