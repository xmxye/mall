<template>
  <div class="detail">
      <DetailNavBar></DetailNavBar>
  </div>
</template>

<script>
import {getDetailInfo} from "network/detail";

import DetailNavBar from "./childComps/DetailNavBar"


export default {
  name: 'Detail',
  data () {
    return {
      
    }
  },
  components: {
     DetailNavBar
  },
  created() {
      /**
       * 获取请求页数据
       */
      getDetailInfo().then((res)=>{
        console.log(res,7)
      }).catch(err=>{

      })
      // console.log(this.$route.query.id)
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
  
</style>