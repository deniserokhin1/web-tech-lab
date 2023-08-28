import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfigArray } from '1_app/providers/Router/config/routeConfig'
import { PageLoader } from '3_widgets/PageLoader'

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

export const AppRouter = (): JSX.Element => {
    const routes = useRoutes(routeConfigArray)

    return (
        <Suspense fallback={<PageLoader />}>
            {<div className="pageWrapper">{routes}</div>}
        </Suspense>
    )
}
