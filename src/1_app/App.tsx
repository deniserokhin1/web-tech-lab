import { useTheme } from '1_app/providers/ThemeProvider'
import { AppRouter } from '6_shared/config'
import { Navbar } from '3_widgets/Navbar'
import { classNames } from '6_shared/lib'
import { Suspense, useEffect, useRef } from 'react'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'
import { Sidebar } from '3_widgets/Sidebar'
import { useAppDispatch } from './providers/StoreProvider/config/store'
import { userActions } from '5_entities/User'

export const App = (): JSX.Element => {
    const { theme } = useTheme()
    const mods = {}

    const mainRef = useRef(null)
    const color = useGetMainColor(mainRef, theme)

    const dispatch = useAppDispatch()
    const { initAuthData } = userActions

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch, initAuthData])

    return (
        <div className={classNames('main', mods, [theme])} ref={mainRef}>
            <Suspense>
                <Navbar />

                <div className="content">
                    <Sidebar color={color} />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
