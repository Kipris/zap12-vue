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
  addToCart(state, payload) {
    const detailToCart = payload
    Vue.set(detailToCart, 'amount', 1)
    state.cartItems.push(detailToCart)
  },
  removeFromCart() {
    console.log('This detail should be removed')
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
    console.log('analogs payload', payload)
    axios.get('/details', {
      params: {
        _sort: 'storageAmount',
        _order: 'desc',
        _limit: 24,
        id: payload
      }
    })
    .then((res) => {
      console.log('analogs res', res)
      commit('setAnalogs', res.data)
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
