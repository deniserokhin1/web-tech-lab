/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { type FC, lazy } from 'react'
import { type LoginFrormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFrormProps>>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, spaced-comment
    //@ts-ignore
    () =>
        new Promise((resolve) => setTimeout(() => resolve(import('./LoginForm')), 1000)),
)
