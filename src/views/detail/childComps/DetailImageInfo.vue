<template>
  <div class="detail-image">
      <div v-for="(item,index) in images" :key="index">
          <img :src="item.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImageInfo',
  data () {
    return {
      
    }
  },
  props:{
      images:{
        type:Array,
        default(){
            return []
        }
         
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
.detail-image{
    box-shadow: 0 -5px 0 rgb(231, 223, 223);
    margin-top: 30px;
}
</style>