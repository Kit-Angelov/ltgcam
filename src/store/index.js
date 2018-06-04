import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        basketState: false,
    },
    mutations: {
        fill(state, {type, items}) {
            state[type] = items;
        },
        check(state){
            var basketLS = localStorage.getItem('basket');
            if (basketLS.length > 0){
                state['basketState'] = true;
            }
        }
    },
    actions: {
        fillBasket({commit}){
            commit('fill', {type: 'basketState', items: true});
        },
        checkBasket({commit}){
            commit('check');
        }
    }
})

export default store