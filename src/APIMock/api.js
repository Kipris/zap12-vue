import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://localhost:1337/api.zap12.ru/v1/'
  // baseURL: 'http://api.zap12.ru/v1/'
})

export default api
