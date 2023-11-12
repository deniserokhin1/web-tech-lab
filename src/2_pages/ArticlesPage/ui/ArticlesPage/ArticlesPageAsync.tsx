import { lazyWithPreload } from 'react-lazy-with-preload'

export const ArticlesPageAsync = lazyWithPreload(() => import('./ArticlesPage'))
