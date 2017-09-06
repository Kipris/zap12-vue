import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
'http://localhost:3000' :
'https://localhost:3000'

const api = axios.create({
  baseURL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

export default api
