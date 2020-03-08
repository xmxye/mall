<template>
<div>
  <div class="detail-goods-info"  v-if="Object.keys(goods).length !== 0">
      <p>{{goods.describe}}</p>
      <div class="price">
          <div class="now-price">{{goods.nowPrice|finalPrice}}</div>
          <div class="old-price">{{goods.oldPrice|finalPrice}}</div>
          <div class="discount" :class="{'active':isShowDiscount}">大减价</div>
      </div>
      <ul class="ul-info">
          <li>销量{{goods.sell}}</li>
          <li>收藏{{goods.collect}}</li>
          <li>发货时间{{goods.deliverTime}}</li>
      </ul>
      <ul class="ul-info">
          <li v-for="(item,index) in goods.info" :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.title}}</span>
          </li>
      </ul>
  </div>
  <div v-else>
      <h3>暂无商品，敬请期待</h3>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data () {
    return {
    //   isShowDiscount:false
    }
  },
  props:{
      goods:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  components: {
      
  },
  computed: {
      isShowDiscount(){
          return this.goods.nowPrice < this.goods.oldPrice
      }
  },
  filters:{
      finalPrice(price){
          if(typeof(price)=='undefined'){
              return price
          }else{
              return '￥' + price.toFixed(2)
          }
      }
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
.detail-goods-info{
    padding: 0 10px;
}
.ul-info{
    display: flex;
    padding-left: 0;
    font-size: 14px;
    justify-content: space-between;
}
.price{
    display: flex;
}
.now-price{
    color: red;
}
.old-price{
    font-size: 13px;
    text-decoration: line-through;
    padding-left: 3px;
    
}
.discount{
    display: none;
}
.active{
    display: block;
    font-size: 18px;
    color: #fff;
    background-color: red;
    margin-left: 10px;
    border-radius: 4px;
}
</style>