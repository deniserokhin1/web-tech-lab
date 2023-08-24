import { lazy } from 'react'

export const AboutAsync = lazy(
    //@ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./About')), 300))
)
