import {debounce} from "common/utils"  

import BackTop from "components/content/backTop/BackTop"


export const itemListenerMixin = {
    data(){
        return {
            itemImgListener:null,
            refresh:null
        }
    },
    mounted() {
        this.refresh = debounce((this.$refs.scroll.refresh),3600);
        this.itemImgListener = ()=>{
           // goods中图片加载完毕后，调用scroll中的refresh方法，重新计算scrollHeight
              this.refresh()
         }
         this.$bus.$on('load',this.itemImgListener);
    },
}

export const backTopMixin = {
    data(){
        return {
            isShowbackTop:false
        }       
    },
    components:{
        BackTop
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
          }      
    }
}