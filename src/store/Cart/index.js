import axios from '@/APIMock/api'


const state = {
  cartItems: [],
  details: [],
  search: {
    carModel: [],
    detailProducer: []
  }
}
const getters = {

}
const mutations = {
  addToCart(state, payload) {
    state.cartItems.push(payload)
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
  changeAmount(state, payload) {
    const detail = state.cartItems.find(item => item.id === payload.id)
    if (payload.sign === '+') {
      detail.amount += 1
    } else if (payload.sign === '-') {
      detail.amount -= 1
    }
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
      params.carModel = state.search.carModel
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
