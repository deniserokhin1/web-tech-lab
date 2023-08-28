import { type RouteObject, type RouteProps } from 'react-router-dom'
import { About } from '2_pages/About'
import { Main } from '2_pages/Main'
import { NotFoundPage } from '2_pages/NotFoundPage'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: 'about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
}

export const routeConfigArray: RouteObject[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <Main />,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <About />,
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
]
