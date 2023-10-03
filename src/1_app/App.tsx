import { useTheme } from '1_app/providers/ThemeProvider'
import { AppRouter } from '6_shared/config'
import { Navbar } from '3_widgets/Navbar'
import { classNames } from '6_shared/lib'
import { Suspense, useEffect, useRef } from 'react'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'
import { Sidebar } from '3_widgets/Sidebar'
import { useAppDispatch, useAppSelector } from './providers/StoreProvider/config/store'
import { getUserInited, userActions } from '5_entities/User'
import { uiActions } from '4_features/UI'

export const App = (): JSX.Element => {
    const { theme } = useTheme()
    const mods = {}

    const dispatch = useAppDispatch()
    const { setMainColor, setSecondaryColor } = uiActions
    const { initAuthData } = userActions
    const inited = useAppSelector(getUserInited)

    const mainRef = useRef<HTMLDivElement>(null)
    const color = useGetMainColor(mainRef)
    const primaryColor = useGetMainColor(mainRef, '--primary-color')
    const secondaryColor = useGetMainColor(mainRef, '--secondary-color')

    useEffect(() => {
        dispatch(initAuthData())
        dispatch(setMainColor(primaryColor))
        dispatch(setSecondaryColor(secondaryColor))
    }, [color, dispatch, initAuthData, primaryColor, secondaryColor, setMainColor, setSecondaryColor])

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
