import { memo } from 'react'

import { AppRoutes } from '../const/router'

export type SortOrder = 'asc' | 'desc'

export const typedMemo: <T>(c: T) => T = memo

export type RouteFunction<Params extends any[] = any[]> = (
    ...args: Params
) => string

export interface RouteParams {
    main: []
    about: []
    profile: [string]
    articles: []
    article_details: [string]
    article_create: []
    article_edit: [string]
    admin_panel: []
    forbidden: []
    not_found: []
}

export type Routes = {
    [K in AppRoutes]: RouteFunction<RouteParams[K]>
}
