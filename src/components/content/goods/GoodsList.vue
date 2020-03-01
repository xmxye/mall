<template>
  <div class="goods-list">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      
    }
  },
  components: {
      
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-around;
        padding: 4px;   
    }
</style>