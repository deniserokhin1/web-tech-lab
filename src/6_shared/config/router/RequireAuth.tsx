import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getUserAuthData, getUserRoles } from '5_entities/User'
import { type UserRole } from '5_entities/User/model/types/user'
import { useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
    children: JSX.Element
    roles?: UserRole[]
}

export function RequireAuth(props: RequireAuthProps): JSX.Element {
    const { children, roles } = props
    const auth = useAppSelector(getUserAuthData)
    const userRole = useAppSelector(getUserRoles)
    const location = useLocation()

    const hasRequireRole = useMemo(() => {
        if (!roles) return true

        return roles.some((requireRole) => userRole?.includes(requireRole))
    }, [roles, userRole])

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    if (!hasRequireRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    }

    return children
}
