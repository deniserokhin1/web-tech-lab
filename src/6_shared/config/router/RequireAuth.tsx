import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { Main } from '2_pages/Main'
import { getUserAuthData } from '5_entities/User'
import { useNavigate } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    const auth = useAppSelector(getUserAuthData)
    const navigate = useNavigate()

    if (!auth) {
        navigate(RoutePath.main)
        return <Main />
    }

    return children
}
