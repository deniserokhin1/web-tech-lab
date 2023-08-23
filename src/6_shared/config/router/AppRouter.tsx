import type { FC } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfigArray } from '1_app/providers/Router/config/routeConfig'

interface AppRouterProps {}

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

export const AppRouter: FC<AppRouterProps> = () => {
    const routes = useRoutes(routeConfigArray)

    return (
        <div>
            <Suspense fallback={<Loading />}>{routes}</Suspense>
        </div>
    )
}

const Loading = () => <h2>🌀 Loading...</h2>
