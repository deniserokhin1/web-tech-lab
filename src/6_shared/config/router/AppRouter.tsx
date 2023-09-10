import { useRoutes } from 'react-router-dom'
import { Suspense, memo, useMemo } from 'react'
import { routeConfig, routeConfigArray } from '1_app/providers/Router/config/routeConfig'
import { PageLoader } from '3_widgets/PageLoader'
import { useTheme } from '1_app/providers/ThemeProvider'
import { classNames } from '6_shared/lib'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getUserAuthData } from '5_entities/User'

// export const AppRouter: FC<AppRouterProps> = () => {
//     return (
//         <div>
//             <Suspense fallback={<Loading />}>
//                 <Routes>
//                     {Object.values(routeConfig).map(({ element, path }) => (
//                         <Route path={path} element={element} key={path} />
//                     ))}
//                 </Routes>
//             </Suspense>
//         </div>
//     )
// }

export const AppRouter = memo((): JSX.Element => {
    const isAuth = useAppSelector(getUserAuthData)

    const routeConfigArray = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])

    const routes = useRoutes(routeConfigArray)

    const { stateSidebar } = useTheme()

    const mods = {
        open: stateSidebar,
    }

    return (
        <Suspense fallback={<PageLoader stateSideBar={!!stateSidebar} />}>
            {<div className={classNames("pageWrapper", mods)}>{routes}</div>}
        </Suspense>
    )
})
