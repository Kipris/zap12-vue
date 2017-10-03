import Vue from 'vue'
import Vuex from 'vuex'

import Cart from './Cart'
import Auth from './Auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    Cart,
    Auth
  }
})

export default store
