
 // 防抖函数----防止调用频繁

 export function debounce(func,delay){
    let timer = null;
    return function(...args){  
      timer = setTimeout(()=>{
        func.apply(this,args);
      },delay)
    }
  }
