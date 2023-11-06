import { type FC, lazy } from 'react'

import { type LoginFrormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFrormProps>>(() => import('./LoginForm'))
