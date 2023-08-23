import { lazy } from 'react'

export const MainAsync = lazy(
    //@ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./Main')), 1000))
)
