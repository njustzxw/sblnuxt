import Vue from 'vue'
import Vuex from 'vuex'

// import app from './modules/app'
import goods from './modules/goods'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        goods
    },
})

export default store