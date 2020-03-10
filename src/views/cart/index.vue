<template>
    <div class="cart">
       <cart-nav-bar></cart-nav-bar>
       <cart-list-info></cart-list-info>
    </div>
</template>
<script>
import CartNavBar from './childComps/CartNavBar'
import CartListInfo from './childComps/CartListInfo'

export default {
    name:'Cart',
    components:{
        CartNavBar,
        CartListInfo
    }
   
}
</script>    
<style scoped>
   
</style>