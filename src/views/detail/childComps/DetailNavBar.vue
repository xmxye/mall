<template>
  <div class="detail-navbar">
      <NavBar>
        <div slot="left" class="left" @click="backClick()">
          <img src="~assets/img/detail/back.png" alt="">
        </div>
        <div slot="center" class="center">
          <div v-for="(item,index) in titles" 
          :key="index" class="item" :class="{'active':currentIndex == index}"
          @click="itemClick(index)">{{item}}</div>
        </div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components: {
     NavBar
  },
  mounted () {
      
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .left{
    width: 30px;
  }
  .left img{
    width: 100%;
    margin-top: 6px;
  }
  .center{
    display: flex;
  }
  .center .item{
    flex: 1;
  }
  .active{
    color: red;
  }
</style>