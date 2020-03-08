<template>
  <div class="detail-swiper">
      <swiper>
        <swiper-item v-for="(item,index) in topImage" :key="index">
         <img :src="item.img" alt="">
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  data () {
    return {
      
    }
  },
  components: {
      Swiper,
      SwiperItem
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted () {
      // console.log(this.topImage)
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>