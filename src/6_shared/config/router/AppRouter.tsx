import { Route, Routes } from 'react-router-dom'
import { Suspense, memo } from 'react'
import {
    type AppRoutesProps,
    routeConfig,
} from '1_app/providers/Router/config/routeConfig'
import { PageLoader } from '3_widgets/PageLoader'
import { useTheme } from '1_app/providers/ThemeProvider'
import { classNames } from '6_shared/lib'
import { RequireAuth } from './RequireAuth'

export const AppRouter = memo((): JSX.Element => {
    const renderWithWrapper = (route: AppRoutesProps): JSX.Element => {
        const element = <>{route.element}</>
        return (
            <Route
                element={
                    route.authOnly ? <RequireAuth>{element}</RequireAuth> : route.element
                }
                path={route.path}
                key={route.path}
            />
        )
    }

    const { stateSidebar } = useTheme()
    const mods = { open: stateSidebar }

    return (
        <Suspense fallback={<PageLoader stateSideBar={!!stateSidebar} />}>
            {
                <div className={classNames('pageWrapper', mods)}>
                    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
                </div>
            }
        </Suspense>
    )
})
