import { useTheme } from '1_app/providers/ThemeProvider'
import { AppRouter } from '6_shared/config'
import { Navbar } from '3_widgets/Navbar'
import { classNames } from '6_shared/lib'
import { Suspense, useEffect, useRef } from 'react'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'
import { Sidebar } from '3_widgets/Sidebar'
import { useAppDispatch, useAppSelector } from './providers/StoreProvider/config/store'
import { getUserInited, userActions } from '5_entities/User'

export const App = (): JSX.Element => {
    const { theme } = useTheme()
    const mods = {}

    const mainRef = useRef<HTMLDivElement>(null)
    const color = useGetMainColor(mainRef)

    const dispatch = useAppDispatch()
    const { initAuthData } = userActions
    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch, initAuthData])

    return (
        <div className={classNames('main', mods, [theme])} ref={mainRef}>
            <Suspense>
                <Navbar />

                <div className="content">
                    <Sidebar color={color} />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
