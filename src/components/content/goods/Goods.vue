<template>
  <div class="goods">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Goods',
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
    .goods{
        display: flex;
        flex-wrap: wrap;    
    }
</style>