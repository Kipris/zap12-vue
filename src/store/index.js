import Vue from 'vue'
import Vuex from 'vuex'

import Cart from './Cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    Cart
  }
})

export default store
