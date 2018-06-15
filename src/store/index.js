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
            var basketLS = JSON.parse(localStorage.getItem('basket'));
            if (basketLS.length > 0){
                state['basketState'] = true;
            } else {
                state['basketState'] = false;
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