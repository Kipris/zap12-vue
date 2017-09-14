import axios from '@/APIMock/api'
import Vue from 'vue'

const state = {
  cartItems: [],
  details: [],
  analogDetails: [],
  reloadedSelectedDetail: {},
  search: {
    carModel: [],
    detailProducer: []
  }
}
const getters = {

}
const mutations = {
  setCartItem(state, payload) {
    const detailToCart = payload
    Vue.set(detailToCart, 'amount', 1)
    state.cartItems.push(detailToCart)
  },
  setInventory(state, payload) {
    state.cartItems = payload
  },
  removeFromCart(state, { id }) {
    const itemToRemove = state.cartItems.findIndex(ci => ci.id === id)
    state.cartItems.splice(itemToRemove, 1)
  },
  setDetails(state, payload) {
    state.details = payload
  },
  setModelFilter(state, payload) {
    state.search.carModel = payload
  },
  setProducerFilter(state, payload) {
    state.search.detailProducer = payload
  },
  changeAmount(state, { detailId, sign }) {
    const detail = state.cartItems.find(item => item.id === detailId)
    if (sign === '+') {
      detail.amount += 1
    } else if (sign === '-' && detail.amount > 1) {
      detail.amount -= 1
    }
  },
  setAnalogs(state, payload) {
    state.analogDetails = payload
  },
  selectDetail(state, payload) {
    state.reloadedSelectedDetail = payload
  }
}
const actions = {
  getDetails({ state, commit }) {
    const params = {
      _sort: 'storageAmount',
      _order: 'desc',
      _limit: 24
    }
    if (state.search.carModel) {
      params.carModel_like = state.search.carModel
    }
    if (state.search.detailProducer) {
      params.detailProducer = state.search.detailProducer
    }
    axios.get('/details', {
      params
    })
    .then((res) => {
      commit('setDetails', res.data)
    })
    .catch(err => console.log(err))
  },
  getDetail({ state, commit }, payload) {
    axios.get('/details', {
      params: {
        id: payload
      }
    })
    .then((res) => {
      commit('selectDetail', res.data[0])
    })
    .catch(err => console.log(err))
  },
  getAnalogs({ state, commit }, payload) {
    axios.get('/details', {
      params: {
        _sort: 'storageAmount',
        _order: 'desc',
        _limit: 24,
        id: payload
      }
    })
    .then((res) => {
      commit('setAnalogs', res.data)
    })
    .catch(err => console.log(err))
  },
  getInventory({ commit }) {
    axios.get('/user')
    .then((res) => {
      const ids = res.data.inventory.map(inv => inv.detailId)
      return new Promise((resolve, reject) => {
        axios.get('/details', {
          params: {
            _sort: 'storageAmount',
            _order: 'desc',
            _limit: 24,
            id: ids
          }
        })
        .then((details) => {
          resolve(details.data)
        })
        .catch(err => reject(err))
      })
    })
    .then((res) => {
      res.forEach(invItem => commit('setCartItem', invItem))
    })
  },
  addToCart({ state, commit }, payload) {
    if (state.cartItems.find(item => item.id === payload.id)) {
      commit('changeAmount', { detailId: payload.id, sign: '+' })
    } else {
      commit('setCartItem', payload)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
