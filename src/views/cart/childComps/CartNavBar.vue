<template>
  <nav-bar class="cart-nav">
    <div slot="center">购物车({{length}})</div>
  </nav-bar>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "CartNavBar",
  data() {
    return {

    };
  },
  components: {
    NavBar
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
    })
  } 
};
</script>

<style scoped>
 .cart-nav{
    background-color: RGB(255, 150, 170);
    color: #fff;
 }
</style>