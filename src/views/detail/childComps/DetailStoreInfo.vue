<template>
  <div>
    <div class="detail-store" v-if="Object.keys(store).length !== 0">
      <div class="header">
        <img :src="store.logo" alt />
        <p>{{store.name}}</p>
      </div>
      <div class="content">
        <div class="left">
          <div class="item">
            <p>{{store.totalSell|finalTotalSell}}</p>
            <p>总销量</p>
          </div>
          <div class="item">
            <p>{{store.allGoods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <table class="right">
          <tr v-for="(item,index) in store.info" :key="index">
            <td>{{item.title}}</td>
            <td :class="[item.isBetter?'color1':'color2']">{{item.score}}</td>
            <td class="is-better" :class="[item.isBetter?'bg1':'bg2']">
              <!-- {{item.level}} -->
              {{item.isBetter ? '高' : '低'}}
            </td>
          </tr>
        </table>
      </div>
      <div class="go-store">进店逛逛</div>
    </div>
    <div v-else>
        <h3>暂无店铺信息，敬请期待</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailStoreInfo",
  data() {
    return {};
  },
  components: {},
  props: {
    store: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
    finalTotalSell(value){
      let result = value;
      if(result >= 10000){
        result = (result / 10000).toFixed(1) + '万'
      }
        return result
    }
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.detail-store {
  box-shadow: 0 -5px 0 rgb(231, 223, 223);
  margin-top: 30px;
  padding: 10px 5px;
  font-size: 14px;
}
.header {
  display: flex;
}
.header img {
  border-radius: 50%;
  margin-right: 20px;
}
.content {
  display: flex;
  justify-content: space-around;
}
.left,
.right {
  flex: 1;
}
.left {
  display: flex;
  border-right: 1px solid rgb(231, 223, 223);
  justify-content: space-around;
  text-align: center;
}
.right {
  padding-left: 20px;
  box-sizing: border-box;
}
.color1 {
  color: red;
}
.color2 {
  color: green;
}
.is-better {
  color: #fff;
  text-align: center;
  font-size: 12px;
}
.bg1 {
  background-color: red;
}
.bg2 {
  background-color: green;
}
.go-store{
  width: 70px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(231, 223, 223);
  margin: 15px auto 0;
  text-align: center;
}
</style>