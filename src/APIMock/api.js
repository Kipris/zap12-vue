import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://api.zap12.ru/v1/',
  timeout: 5000
})

export default api
