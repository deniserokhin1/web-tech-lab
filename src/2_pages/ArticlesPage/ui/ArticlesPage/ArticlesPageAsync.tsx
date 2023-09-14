import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
    // @ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./ArticlesPage')), 1000)),
)
