<template>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="red">
        <img slot="slot-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/home-active.svg" />
        <div slot="slot-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="red">
        <img slot="slot-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/category-active.svg" />
        <div slot="slot-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="red">
        <img slot="slot-icon" src="~assets/img/tabbar/cart.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/cart-active.svg" />
        <div slot="slot-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="red">
        <img slot="slot-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/profile-active.svg" />
        <div slot="slot-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
    
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
<style lang="" scoped>
    
</style>