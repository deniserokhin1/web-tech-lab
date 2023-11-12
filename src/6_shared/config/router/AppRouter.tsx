import { Suspense, memo } from 'react'

import { Route, Routes } from 'react-router-dom'

import {
    type AppRoutesProps,
    routeConfig,
} from '@/1_app/providers/Router/config/routeConfig'
import { useTheme } from '@/1_app/providers/ThemeProvider'
import { PageLoader } from '@/3_widgets/PageLoader'
import { classNames } from '@/6_shared/lib'

import { RequireAuth } from './RequireAuth'

const renderWithWrapper = (route: AppRoutesProps): JSX.Element => {
    const element = <>{route.element}</>

    return (
        <Route
            element={
                route.authOnly ? (
                    <RequireAuth roles={route.roles}>{element}</RequireAuth>
                ) : (
                    route.element
                )
            }
            path={route.path}
            key={route.path}
        />
    )
}

export const AppRouter = memo((): JSX.Element => {
    const { stateSidebar } = useTheme()
    const mods = { open: stateSidebar }

    return (
        <Suspense fallback={<PageLoader stateSideBar={!!stateSidebar} />}>
            {
                <div className={classNames('pageWrapper', mods)}>
                    <Routes>
                        {Object.values(routeConfig).map(renderWithWrapper)}
                    </Routes>
                </div>
            }
        </Suspense>
    )
})
