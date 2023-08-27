/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { lazy } from 'react'

export const AboutAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, spaced-comment
    //@ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./About')), 300)),
)
