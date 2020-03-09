<template>
  <div class="detail-params">
     <table v-for="(item,index) in params.topParams" :key="index" class="table">
         <tr class="tr  tr-top">
             <td v-for="(xx,ii) in item" :key="ii" class="td">
                 {{xx}}
             </td>
         </tr>
     </table>
    
     <table  class="table">
         <tr v-for="(item,index) in params.bottomParams" :key="index" class="tr tr-bottom">
             <td class="td">{{item.key}}</td>
             <td class="td">{{item.value}}</td>
         </tr>
     </table>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  data () {
    return {
      
    }
  },
  props:{
      params:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components: {
      
  },
  created() {
      
  },
  mounted () {
  },
  methods: {
    
  }
}
</script>

<style scoped>   
    .detail-params{
        background-color: #fff;
    }
    .table{
        width: 100%;
    }
    .tr{
        display: flex;
        width: 100%;
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #ccc;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .tr-bottom > td:first-child{
        width: 50px;
    }
    .tr-bottom > td:last-child{
       color: red;
    }
    .tr-top{
        display: flex;
        justify-content: space-between;
    }
    .td{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>