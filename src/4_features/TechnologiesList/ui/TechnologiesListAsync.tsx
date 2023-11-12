import { lazyWithPreload } from 'react-lazy-with-preload'

export const TechnologiesListAsync = lazyWithPreload(() => import('./TechnologiesList'))
