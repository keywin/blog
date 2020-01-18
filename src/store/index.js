import Vue from 'vue'
import Vuex from 'vuex'

import VUEX_ASIDE from './aside'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        VUEX_ASIDE
    }
})