import { lazyWithPreload } from 'react-lazy-with-preload'

export const AboutAsync = lazyWithPreload(() => import('./About'))
