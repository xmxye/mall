<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{count}})</div>
        </nav-bar>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'Cart',
    components:{
        NavBar
    },
    computed: {
        ...mapGetters({
            'count':'cartLength'
        })
    },
}
</script>    
<style scoped>
    .cart-nav{
        background-color: RGB(255, 150, 170);
        color: #fff;
    }
</style>