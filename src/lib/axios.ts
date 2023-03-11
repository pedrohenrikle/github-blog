import axios from 'axios'

export const userAPI = axios.create({
  baseURL: 'https://api.github.com/users/',
})

