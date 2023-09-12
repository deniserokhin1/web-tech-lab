/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { lazy } from 'react'

export const ArticleDeatilsAsync = lazy(
    // @ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./ArticleDeatils')), 1000)),
)
