/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { type FC, lazy } from 'react'
import { type LoginFrormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFrormProps>>(
    // @ts-ignore
    () =>
        new Promise((resolve) => setTimeout(() => resolve(import('./LoginForm')), 1000)),
)
