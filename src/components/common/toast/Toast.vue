<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message:'',
      isShow:false
    }
  },
 
  components: {
      
  },
  mounted () {
      
  },
  methods: {
    show(message,duration = 2000){
      this.isShow = true;
      this.message = message;
      setTimeout(()=>{
        this.isShow = false;
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
        background-color: rgba(0, 0, 0, .75);
        color: #fff;
        padding: 10px 30px;
        box-sizing: border-box;
        border-radius: 6px;
    }
</style>