<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">
                <span>购物街</span>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'Home',
    components:{
        NavBar
    }
}
</script>    
<style>
    .home-nav{
        background-color:RGB(255,150,170);
        color:#fff;
    }
</style>