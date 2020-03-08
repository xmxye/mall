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

