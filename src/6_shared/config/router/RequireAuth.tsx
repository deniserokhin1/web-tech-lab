import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getUserAuthData } from '5_entities/User'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}
