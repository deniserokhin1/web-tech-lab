import { lazy } from 'react'

export const MainAsync = lazy(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error, spaced-comment
    //@ts-ignore
    () => new Promise((resolve) => setTimeout(() => resolve(import('./Main')), 1000)),
)
