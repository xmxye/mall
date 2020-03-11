<template>
    <div class="cart">
        <cart-nav-bar class="cart-nav"></cart-nav-bar>
        <scroll class="scroll-content" ref="scroll" :probe-type="3">
            <cart-list-info class="list"></cart-list-info>
       </scroll>
       <cart-bottom-tools></cart-bottom-tools>
    </div>
</template>
<script>
import Scroll from "components/common/scroll/scroll"

import CartNavBar from './childComps/CartNavBar'
import CartListInfo from './childComps/CartListInfo'
import CartBottomTools from './childComps/CartBottomTools'

export default {
    name:'Cart',
    components:{
        Scroll,
        CartNavBar,
        CartListInfo,
        CartBottomTools
    }
   
}
</script>    
<style scoped>
   .scroll-content{
       position: absolute;
       top: 44px;
       bottom: 84px;
       z-index: 1;
   }
   .list{
       background-color: #fff;
   }
   .cart-nav{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
   }
</style>