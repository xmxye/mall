import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        cartList:[]
    },  
    getters:{

    },
    mutations:{
        addToCart(state,payload){ 
            let product = null;
            // 做判断，如果item中含有payload，直接数量加一。反之，push到cartList中
            for(let item of state.cartList){ 
                if(item.id == payload.id){
                    product = item
                } 
            }
            
            if(product){
                product.count += 1;
            }else{
                payload.count = 1;
                state.cartList.push(payload)
            }  
        }
    },
    actions:{

    }

});
 
export default store;

