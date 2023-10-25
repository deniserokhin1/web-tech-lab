import { rtkAPI } from '@/6_shared/api/rtkApi'

import { type INotification } from '../model/types/notification'

const notificationsApi = rtkAPI.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
})

export const useNotifications = notificationsApi.useGetNotificationsQuery
