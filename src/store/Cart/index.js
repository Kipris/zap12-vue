import axios from '@/APIMock/api'
// import Vue from 'vue'

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
  setCartItem(state, { detailToAdd }) {
    // const detailToCart = detail
    // Vue.set(detailToCart, 'amount', 1)
    // Vue.set(detailToCart, 'selectedPrice', selectedPrice)
    // state.cartItems.push(detailToCart)
    state.cartItems.push(detailToAdd)
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
  changeAmount(state, { bookId, sign }) {
    const detail = state.cartItems.find(item => item.bookId === bookId)
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
      // _sort: 'storageAmount',
      // _order: 'desc',
      // _limit: 24
      limit: 24
    }
    // if (state.search.carModel) {
    //   params.carModel_like = state.search.carModel
    // }
    // if (state.search.detailProducer) {
    //   params.detailProducer = state.search.detailProducer
    // }
    // if (state.search.detailType) {
    //   params.detailType = state.search.detailType
    // }
    if (state.search.carModel) {
      params.q = state.search.carModel
    }
    axios.get('/search', {
      params
    })
    .then((res) => {
      commit('setDetails', res.data.products)
    })
    .catch(() => {})
  },
  getDetail({ state, commit }, payload) {
    axios.get('search/product', {
      params: {
        id: payload
      }
    })
    .then((res) => {
      commit('selectDetail', res.data.currentCode)
      commit('setAnalogs', res.data.analogs)
    })
    .catch(() => {})
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
    .catch(() => {})
  },
  addToCart({ state, commit }, { detail, bookId, offerPrice }) {
    const detailToAdd = {
      bookId,
      amount: 1,
      name: detail.name,
      offerPrice
    }
    if (state.cartItems.find(item => item.bookId === detailToAdd.bookId)) {
      commit('changeAmount', { bookId, sign: '+' })
    } else {
      commit('setCartItem', { detailToAdd })
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
