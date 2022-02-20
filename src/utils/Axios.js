import axios from 'axios'

const instance = axios.create({
    baseURL: '' // The API URL
})

export default instance