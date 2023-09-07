import { lazy } from 'react'

export const ProfilePageAsync = lazy(
    // @ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./ProfilePage')), 1000)),
)
