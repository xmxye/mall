<template>
  <div class="detail-bottom-bar">
      <ul class="ul">
          <li class="item">
              <img src="~assets/img/bottomBar/guest.png" alt="">
              <p>客服</p>
          </li>
          <li class="item">
              <img src="~assets/img/bottomBar/store.png" alt="">
              <p>店铺</p>
          </li>
          <li class="item">
              <img src="~assets/img/bottomBar/collect.png" alt="">
              <p>收藏</p>
          </li>
          <li class="cart action">加入购物车</li>
          <li class="bug action">购买</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data () {
    return {
      
    }
  },
  components: {
      
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
.detail-bottom-bar{
    width: 375px;
    height: 49px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
}
.ul{
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 49px;
}
.item{
    width: 80px;
    text-align: center;
}
.item img{
    width: 25px;
    height: 25px;
}
.item p{
    margin: 0;
    font-size: 13px;
}
.action{
    color: #fff;
    text-align:center;
    line-height: 49px;
}
.cart{
    width: 30%;
    background-color: rgb(173, 197, 39);
}
.bug{
    width: 20%;
    background-color: red;
}
</style>