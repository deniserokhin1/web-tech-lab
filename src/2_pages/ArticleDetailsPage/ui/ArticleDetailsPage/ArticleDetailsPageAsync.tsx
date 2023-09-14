import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(
    // @ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000)),
)
