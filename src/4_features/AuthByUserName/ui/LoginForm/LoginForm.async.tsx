import { type FC } from 'react'

import { lazyWithPreload } from 'react-lazy-with-preload'

import { type LoginFrormProps } from './LoginForm'

export const LoginFormAsync = lazyWithPreload<FC<LoginFrormProps>>(() => import('./LoginForm'))
