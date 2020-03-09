import {debounce} from "common/utils"

export const itemListenerMixin = {
    data(){
        return {
            itemImgListener:null
        }
    },
    mounted() {
        const refresh = debounce((this.$refs.scroll.refresh),3600);
        this.itemImgListener = ()=>{
           // goods中图片加载完毕后，调用scroll中的refresh方法，重新计算scrollHeight
              refresh()
         }
         this.$bus.$on('load',this.itemImgListener);
         console.log('我是混入中的内容')
    },
}