import {ADD_COUNTER,ADD_TO_CART} from './mutations-type'

export default{
    addCart(context,payload){ 
        let product = null;
        // 做判断，如果item中含有payload，直接数量加一。反之，push到cartList中
        for(let item of context.state.cartList){ 
            if(item.id == payload.id){
                product = item
            } 
        }
        
        if(product){
            context.commit(ADD_COUNTER,product)
            // product.count += 1;
        }else{
            payload.count = 1;
            context.commit(ADD_TO_CART,payload)
        }  
    }

}