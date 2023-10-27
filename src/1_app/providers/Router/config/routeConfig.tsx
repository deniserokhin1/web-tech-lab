import { type RouteObject, type RouteProps } from 'react-router-dom'

import { About } from '@/2_pages/About'
import { AdminPanelPage } from '@/2_pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/2_pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/2_pages/ArticleEditPage'
import { ArticlesPage } from '@/2_pages/ArticlesPage'
import { ForbiddenPage } from '@/2_pages/ForbiddenPage'
import { Main } from '@/2_pages/Main'
import { NotFoundPage } from '@/2_pages/NotFoundPage'
import { ProfilePage } from '@/2_pages/ProfilePage'
import { UserRole } from '@/5_entities/User'
import { AppRoutes, routePath } from '@/6_shared/const/router'

export type AppRoutesProps = RouteProps &
    RouteObject & {
        authOnly?: boolean
        roles?: UserRole[]
    }

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    main: {
        path: routePath.main(),
        element: <Main />,
    },
    about: {
        path: routePath.about(),
        element: <About />,
    },
    profile: {
        path: routePath.profile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    articles: {
        path: routePath.articles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    article_details: {
        path: routePath.article_details(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    article_create: {
        path: routePath.article_create(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    article_edit: {
        path: routePath.article_edit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    admin_panel: {
        path: routePath.admin_panel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    forbidden: {
        path: routePath.forbidden(),
        element: <ForbiddenPage />,
        authOnly: true,
    },
    not_found: {
        path: routePath.not_found(),
        element: <NotFoundPage />,
    },
}

// export const routeConfigArray: AppRoutesProps[] = [
//     {
//         path: routePath[AppRoutes.MAIN],
//         element: <Main />,
//     },
//     {
//         path: routePath[AppRoutes.ABOUT],
//         element: <About />,
//     },
//     {
//         path: routePath[AppRoutes.PROFILE],
//         element: <ProfilePage />,
//         authOnly: true,
//     },
//     {
//         path: routePath[AppRoutes.NOT_FOUND],
//         element: <NotFoundPage />,
//     },
// ]
