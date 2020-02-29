import {request} from './request/request'
export function getHomeMulData(){
    return request({
        url:'/home/mulData'
    })
}

export function getHomeGoods(options){
    return request({
        url:'/home/goods',
        method:'post',
        data:options
        
    })
}