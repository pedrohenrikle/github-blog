import axios from 'axios'

export const userAPI = axios.create({
  baseURL: 'https://api.github.com/users/',
})

export const searchAPI = axios.create({
  baseURL: 'https://api.github.com/search/issues'
})
