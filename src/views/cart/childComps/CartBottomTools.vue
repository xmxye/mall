<template>
  <div class="cart-bottom-tools">
     <div class="item btn">
         <check-button :is-checked = isSelectAll @click.native = "checkBtnClick()"></check-button>
         <span>全选</span>
     </div>
     <div class="item">合计：{{totalPrice}}</div>
     <div class="item to-calc">去计算({{totalCount}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'
export default {
  name: 'CartBottomTools',
  data () {
    return {
      
    }
  },
  components: {
      CheckButton
  },
  computed: {
      ...mapGetters({
          'cartList':'cartList',
      }),
      // 1. 计算价格合计
      totalPrice(){
          return "￥" + this.cartList.filter((item)=>{
             return item.isChecked == true
          }).reduce((pre,curr)=>{
              return pre + curr.price * curr.count
          },0).toFixed(2)
      },

      // 2. 计算购买的种类
      totalCount(){
          return this.cartList.filter((item)=>item.isChecked).length
      },

      /**
       * 控制全选按钮
       */

     // 1. 根据商品选中 控制全选按钮,find是找到一个返回该值，找不到返回undefined
      isSelectAll(){
          if(this.cartList.length == 0) return false
          return !this.cartList.find((item) => item.isChecked == false)
      }
  },
  mounted () {
      
  },
  methods: {
    checkBtnClick(){
        if(this.isSelectAll){
            this.cartList.forEach(item => item.isChecked = false)
        }else{
            this.cartList.forEach(item => item.isChecked = true)
            
        }
    }
  }
}
</script>

<style scoped>
.cart-bottom-tools{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 2;
    height: 35px;
    background-color: rgb(219, 213, 213);
    padding: 0 0 0 5px;
    box-sizing: border-box;
}

.btn{
    display: flex;
    align-items: center;
}
.to-calc{
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: red;
    color: #fff;
}
</style>