<template>
  <div class="hello">
      <button @click="btnClick()">点击</button>
  </div>
</template>

<script>
import {request} from '@/request/request.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    btnClick(){  
     request({
        url:'/api/home',
        type:'get'
      }).then(res=>{
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
