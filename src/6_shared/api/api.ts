import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import axios from 'axios'

console.log('start $api')

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
})