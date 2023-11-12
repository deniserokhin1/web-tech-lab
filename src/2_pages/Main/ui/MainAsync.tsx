import { lazyWithPreload } from 'react-lazy-with-preload'

export const MainAsync = lazyWithPreload(() => import('./Main'))
