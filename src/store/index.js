import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = new Vuex.Store({
    state:{
        cartList:[]
    },  
    getters,
    mutations,
    actions
});
 
export default store;

