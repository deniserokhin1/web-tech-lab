import { Routes } from '../types'

export type AppRoutes =
    | 'main'
    | 'about'
    | 'profile'
    | 'articles'
    | 'article_details'
    | 'article_create'
    | 'article_edit'
    | 'admin_panel'
    | 'forbidden'
    | 'not_found'

export const routePath: Routes = {
    about: () => '',
    main: () => '',
    article_edit: (id) => `/articles/${id}/edit`,
    article_details: (id) => `/articles/${id}`,
    article_create: () => '/articles/new',
    forbidden: () => '/forbidden',
    articles: () => '/articles',
    profile: (id) => `/profile/${id}`,
    admin_panel: () => 'admin',
    not_found: () => '*',
}
