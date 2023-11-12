import { lazyWithPreload } from 'react-lazy-with-preload'

export const ProfilePageAsync = lazyWithPreload(() => import('./ProfilePage'))
