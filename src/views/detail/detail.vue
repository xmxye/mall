<template>
  <div class="detail">
      <h3>详情页</h3>
  </div>
</template>

<script>
import {getDetailInfo} from "network/detail";

export default {
  name: 'Detail',
  data () {
    return {
      
    }
  },
  components: {
      
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