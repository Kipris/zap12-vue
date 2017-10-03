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
  logOut() {
    return new Promise((resolve, reject) => {
      axios.post('logout')
      .then(res => resolve(res))
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
