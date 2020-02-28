<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)" class="tab-control-item"
            :class="{'active':currentIndex==index}">
         <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data () {
    return {
        currentIndex:0      
    }
  },
  props:{
      titles:{
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
    itemClick(index){
       this.currentIndex = index        
    }
  }
}
</script>

<style scoped>
    .tab-control{
        display: flex;       
        height: 40px;
        line-height: 40px;
        text-align: center

    }
    .tab-control-item{
        flex: 1;
    }
    .active span{
        color:red;
        padding: 5px;
        border-bottom: 1px solid red;
        box-sizing: border-box
    }
   
</style>