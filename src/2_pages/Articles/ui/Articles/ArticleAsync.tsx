/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { lazy } from 'react'

export const ArticleAsync = lazy(
    // @ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./Articles')), 1000)),
)
