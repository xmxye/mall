import axios from 'axios'
export function request(config){
    return new Promise((resolve,reject)=>{
       // 创建一个实例
       const instance = axios.create({
           baseURL:'',
           timeout:5000
       })
       instance(config).then(res=>{
            resolve(res)
       }).catch(err=>{
           reject(err)
       })
    })
}