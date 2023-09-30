import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import axios from 'axios'

export const $api = axios.create({
    baseURL: __API__,
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    }
    return config
})
