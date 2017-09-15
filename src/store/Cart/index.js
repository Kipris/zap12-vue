import axios from '@/APIMock/api'
import Vue from 'vue'

const state = {
  cartItems: [],
  details: [],
  analogDetails: [],
  reloadedSelectedDetail: {},
  search: {
    carModel: [],
    detailProducer: [],
    detailType: ''
  }
}
const getters = {

}
const mutations = {
  setCartItem(state, { detail, selectedPrice }) {
    const detailToCart = detail
    Vue.set(detailToCart, 'amount', 1)
    Vue.set(detailToCart, 'selectedPrice', selectedPrice)
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
  setDetailType(state, payload) {
    state.search.detailType = payload
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
    if (state.search.detailType) {
      params.detailType = state.search.detailType
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
  addToCart({ state, commit }, { detail, selectedPrice }) {
    if (state.cartItems.find(item => item.id === detail.id)) {
      commit('changeAmount', { detailId: detail.id, sign: '+' })
    } else {
      commit('setCartItem', { detail, selectedPrice })
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
