<template>
  <div class="check-button" :class="{'active':isChecked}">
      <img src="~assets/img/cart/check.svg" class="img">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data () {
    return {
      
    }
  },
  components: {
      
  },
  props:{
      isChecked:{
          type:Boolean,
          default:false
      }
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
    .check-button{
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #aaa;
      background-color: #fff;
      
    }
    .img{
      width: 18px;
      height: 18px;
    }
    .active{
        border-color: red;
        background-color: red;
    }
</style>