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

export function getDetailRecommend(){
    return request({
        url:'/detail/recommend'
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

 export class Store{
     constructor(storeInfo){
        this.info = storeInfo.info.remark;
        this.logo = storeInfo.storeInfo.img;
        this.name = storeInfo.storeInfo.title
        this.totalSell = storeInfo.storeInfo.totalSell
        this.allGoods = storeInfo.storeInfo.allGoods
     }
 }

 export class Params{
     constructor(info){
         this.topParams = info.tables;
         this.bottomParams = info.set
     }
 }