import { type RouteObject, type RouteProps } from 'react-router-dom'
import { About } from '2_pages/About'
import { Main } from '2_pages/Main'
import { NotFoundPage } from '2_pages/NotFoundPage'
import { ProfilePage } from '2_pages/ProfilePage'

type AppRoutesProps = RouteProps & RouteObject & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.PROFILE]: 'profile',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
}

export const routeConfigArray: AppRoutesProps[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main />,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />,
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
]
