import axios from '@/APIMock/api'
// import Vue from 'vue'

const state = {
  profile: {}
}
const getters = {
}
const mutations = {
  setProfile(state, payload) {
    state.profile = payload
  },
  clearProfile(state) {
    state.profile = {}
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
  updatePhones(state, { phone1, phone2 }) {
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
        console.log(res)
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  updatePassword(state, { oldPassword, newPassword }) {
    return new Promise((resolve, reject) => {
      axios.put('password', {
        current_password: oldPassword,
        new_password: newPassword
      }, { withCredentials: true })
      .then((res) => {
        console.log(res)
        resolve(res)
      })
      .catch(err => reject(err))
    })
  },
  restoreEmail(state, { email }) {
    return new Promise((resolve, reject) => {
      resolve(email)
      reject('kdsa')
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
