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
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  components: {
      
  },
  mounted () {
    // 1. 创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,  // scroll的内部，点击事件有效
          probeType:this.probeType,       // 可以侦查到滚动事件的位置
          pullUpLoad:true   // 开启上拉加载
      });

      // 2. 监听scroll的滚动
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })

      // 3. 监听scroll的上拉加载更多
      this.scroll.on('pullingUp',()=>{
          console.log('上拉加载更多');
          // 发送请求，渲染数据
          this.scroll.finishPullUp()  // 多次调用上拉加载
      })
  },
  methods: {
    /**
     * 定义scroll回到某个位置的方法
     */
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(0,0,time)
    }
  }
}
</script>

<style scoped>

</style>