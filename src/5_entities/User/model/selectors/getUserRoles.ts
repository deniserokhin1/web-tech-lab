import { createSelector } from '@reduxjs/toolkit'

import { type StateSchema } from '@/1_app/providers/StoreProvider'

import { UserRole } from '../types/user'

export const getUserRoles = (state: StateSchema): UserRole[] | undefined =>
    state.user.authData?.roles

export const isUserAdmin = createSelector(
    getUserRoles,
    (roles) => roles?.includes(UserRole.ADMIN),
)
export const isUserManager = createSelector(
    getUserRoles,
    (roles) => roles?.includes(UserRole.MANAGER),
)
