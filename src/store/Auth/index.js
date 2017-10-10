import axios from '@/APIMock/api'
// import Vue from 'vue'

const state = {
  profile: {},
  userCars: [],
  ordersCount: 0,
  ordersHistory: []
}
const getters = {
}
const mutations = {
  setProfile(state, payload) {
    state.profile = payload
  },
  clearProfile(state) {
    state.profile = {}
  },
  setUserCars(state, payload) {
    state.userCars = payload
  },
  addGarageCar(state, payload) {
    state.userCars.push(payload)
  },
  deleteUserCar(state, { id }) {
    const carIndex = state.userCars.findIndex(car => car.id === id)
    state.userCars.splice(carIndex, 1)
  },
  setOrdersCount(state, { count }) {
    state.ordersCount = count
  },
  setOrdersHistory(state, { orders }) {
    state.ordersHistory = orders
  }
}
const actions = {
  logIn({ state, commit, dispatch }, { login, password }) {
    return new Promise((resolve, reject) => {
      axios.post('login', {
        login,
        password
      }, { withCredentials: true })
      .then(() => dispatch('getProfile'))
      .then(res => resolve(res))
      .catch((err) => {
        reject(err.response.data.message)
      })
    })
  },
  register({ state }, { email, password, tel, name }) {
    return new Promise((resolve, reject) => {
      axios.post('registration', {
        password,
        name,
        phone1: tel,
        email
      })
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  },
  logOut({ commit }) {
    return new Promise((resolve, reject) => {
      axios.post('logout')
      .then((res) => {
        commit('clearProfile')
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  getProfile({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('profile', { withCredentials: true })
      .then((res) => {
        commit('setProfile', res.data)
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  updatePhones(ctx, { phone1, phone2 }) {
    const data = {}
    if (phone1.length > 0) {
      data.phone1 = phone1
    }
    if (phone2.length > 0) {
      data.phone2 = phone2
    }
    return new Promise((resolve, reject) => {
      axios.put('phones', data, { withCredentials: true })
      .then((res) => {
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  updatePassword(ctx, { oldPassword, newPassword }) {
    return new Promise((resolve, reject) => {
      axios.put('password', {
        current_password: oldPassword,
        new_password: newPassword
      }, { withCredentials: true })
      .then((res) => {
        resolve(res)
      })
      .catch(err => reject(err.response.data.message))
    })
  },
  restoreEmail(ctx, { email }) {
    return new Promise((resolve, reject) => {
      resolve(email)
      reject('kdsa')
    })
  },
  loadGarage({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('cars/list', { withCredentials: true })
      .then((res) => {
        commit('setUserCars', res.data)
        resolve(res.data)
      })
      .catch(err => reject(err))
    })
  },
  addCar({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('cars/add', {
        brand: payload.brand,
        model: payload.model,
        modification: payload.modification,
        year: payload.year,
        vin: payload.vin
      }, { withCredentials: true })
      .then((res) => {
        commit('addGarageCar', res.data)
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  deleteCar({ commit }, { id }) {
    return new Promise((resolve, reject) => {
      axios.delete(`cars/delete/${id}`, { withCredentials: true })
      .then((res) => {
        commit('deleteUserCar', { id })
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  loadOrdersHistory({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('order/list', { withCredentials: true })
      .then((res) => {
        commit('setOrdersCount', { count: res.data.totalFound })
        commit('setOrdersHistory', { orders: res.data.orders })
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  contact(ctx, { email, name, message }) {
    return new Promise((resolve, reject) => {
      axios.post('contacts', {
        email, name, message
      }, { withCredentials: true })
      .then(res => resolve(res))
      .catch(err => reject(err))
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
