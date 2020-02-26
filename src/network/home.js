import {request} from './request/request'
export function getHomeMulData(){
    return request({
        url:'/home/mulData'
    })
}