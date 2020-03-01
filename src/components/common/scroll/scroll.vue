<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  data () {
    return {
      scroll:null
    }
  },
  components: {
      
  },
  mounted () {
      this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,  // scroll的内部，点击事件有效
          probeType:3,       // 可以侦查到滚动事件的位置
          pullUpLoad:true   // 开启上拉加载
      });
      this.scroll.on('scroll',(position)=>{
        // console.log('滚动的位置',position)
      })

      this.scroll.on('pullingUp',()=>{
          console.log('上拉加载更多');
          // 发送请求，渲染数据
          this.scroll.finishPullUp()  // 多次调用上拉加载
      })
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>