<template>
  <div class="detail-comment">
      <div class="header">
          <span class="text">用户评价</span>
          <span class="more">更多</span>
      </div>
      <div class="comment" v-for="(item,index) in comment" :key="index">
         <div class="user">
                <img :src="item.img" alt="" class="avatar">
                <span class="name">{{item.name}}</span>
         </div>
          <p>{{item.comment}}</p>
          <div>
              <span>{{item.date|finalDate}}</span>
              <span class="color">{{item.color}}</span>
              <span>{{item.size}}</span>
          </div>
          <div class="img-box">
              <img :src="x.img" alt=""  v-for="(x,index) in item.list" :key="index" class="img">
          </div>
      </div>
  </div>
</template>

<script>
import {dateFormat} from 'common/utils'
export default {
  name: 'DetailComment',
  data () {
    return {
      
    }
  },
  props:{
      comment:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
      
  },
  computed: {

  },
  filters:{
      finalDate(value){
          return dateFormat(value,'yyyy-MM-dd')
      }
  },
  mounted () {
      
  },
  methods: {
    
  }
}
</script>

<style scoped>
.detail-comment{
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
}
.header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #cccc;
    margin-bottom: 10px;
}
.user{
    display: flex;
    align-items: center;
}
.avatar{
    border-radius: 50%;
    vertical-align: center;
    margin-right: 5px;
}
.color{
    margin: 0 10px;
}
.img-box{
    margin: 5px 0 10px;
}
.img{
    margin-right: 5px;
}
</style>