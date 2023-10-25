import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { USER_LOCALSTORAGE_KEY } from '@/6_shared/const/localStorage'

export const rtkAPI = createApi({
    reducerPath: 'rtkAPI',
    refetchOnMountOrArgChange: 30,
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
