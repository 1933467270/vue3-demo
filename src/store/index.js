/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-04-27 17:56:50
 * @LastEditors: Wsl
 * @LastEditTime: 2020-04-28 10:36:27
 */
import Vuex from 'vuex';

export default Vuex.createStore({
    state: {
        test: {
            a: 1
        }
    },
    mutations: {
        setTestA(state, value) {
            state.test.a = value
        }
    },
    actions: {
    },
    modules: {
    },
});
