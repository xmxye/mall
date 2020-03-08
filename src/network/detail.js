import {request} from './request/request'
export function getDetailInfo(id){
    return request({
        url:'/detail',
        method:'get',
        params:{
            id
        }
        
    })
}

/**
 * 提取goodsInfo信息
 */

 export class Goods{
     constructor(goodsInfo){
         this.describe = goodsInfo.describe;
         this.nowPrice = goodsInfo.presentPrice
         this.oldPrice = goodsInfo.oldPrice
         this.sell = goodsInfo.csell
         this.collect = goodsInfo.collect
         this.deliverTime = goodsInfo.deliverTime
         this.info = goodsInfo.list
     }
 }
