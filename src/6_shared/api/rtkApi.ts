import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const rtkAPI = createApi({
    reducerPath: 'rtkAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
            if (token) headers.set('authorization', token)
            return headers
        },
    }),
    endpoints: (build) => ({}),
})
