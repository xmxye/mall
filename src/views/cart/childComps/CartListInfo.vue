<template>
  <div class="cart-list">
      <div class="item" v-for="(item,index) in cartList" :key="index">
          <div class="left-part">
              <img src="~assets/img/cart/check.png" alt="">
          </div>
          <div class="right-part">
             <div class="pic">
                 <img :src="item.image" alt="">
             </div>
             <div class="content">
                  <p class="title">{{item.desc}}</p>
                  <p class="desc">{{item.desc}}</p>
                  <div class="num">
                      <span class="price">{{item.price|finalPrice}}</span>
                      <span class="count">{{item.count|finalCount}}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CartList',
  data () {
    return {
      
    }
  },
  components: {
      
  },
  computed: {
      ...mapGetters(['cartList'])
  },
  filters:{
      finalPrice(value){
          return '￥' + value.toFixed(2)
      },
      finalCount(value){
          return 'X' + value
      }
  }
}
</script>

<style scoped>
.title,
.desc{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cart-list{
    width: 100%;
}
.item{
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid rgb(167, 167, 163);
}

.left-part{
    width:32px; 
    margin-right: 10px;
}
.right-part{
    display: flex;
    /* flex-grow: 1; */
    align-items: center;
    
}
.pic{
    width: 100px;
}
.pic img{
    width: 100%;
}
.content{
   width: 200px;
   margin-left: 10px;
}
.num{
    display: flex;
    justify-content: space-between;
}

</style>