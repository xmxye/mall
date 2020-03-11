<template>
  <div class="check-button" :class="{'active':isChecked}">
      <img src="~assets/img/cart/check.svg">
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
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #aaa;
      background-color: #fff;
      
    }
   
    .active{
        border-color: red;
        background-color: red;
    }
</style>