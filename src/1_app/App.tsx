import { Suspense, useEffect, useRef } from 'react'

import { useTheme } from '@/1_app/providers/ThemeProvider'
import { MobilePage } from '@/2_pages/MobilePage'
import { Navbar } from '@/3_widgets/Navbar'
import { Sidebar } from '@/3_widgets/Sidebar'
import { uiActions } from '@/4_features/UI'
import { getUserInited, userActions } from '@/5_entities/User'
import { AppRouter } from '@/6_shared/config'
import { useDetectDevice } from '@/6_shared/hooks/useDetectDevice'
import { useGetMainColor } from '@/6_shared/hooks/useGetMainColor'
import { classNames } from '@/6_shared/lib'

import { useAppDispatch, useAppSelector } from './providers/StoreProvider/config/store'

export const App = (): JSX.Element => {
    const { theme } = useTheme()

    const dispatch = useAppDispatch()
    const { setPrimaryColor, setSecondaryColor, setBgColor } = uiActions
    const { initAuthData } = userActions
    const inited = useAppSelector(getUserInited)

    const mainRef = useRef<HTMLDivElement>(null)
    const bgColor = useGetMainColor(mainRef)
    const primaryColor = useGetMainColor(mainRef, '--primary-color')
    const secondaryColor = useGetMainColor(mainRef, '--secondary-color')

    useEffect(() => {
        dispatch(initAuthData())
        dispatch(setPrimaryColor(primaryColor))
        dispatch(setSecondaryColor(secondaryColor))
        dispatch(setBgColor(bgColor))
    }, [
        bgColor,
        dispatch,
        initAuthData,
        primaryColor,
        secondaryColor,
        setBgColor,
        setPrimaryColor,
        setSecondaryColor,
    ])

    const isMobile = useDetectDevice()

    return (
        <div className={classNames('main', {}, [theme])} ref={mainRef}>
            {isMobile ? (
                <MobilePage />
            ) : (
                <Suspense>
                    <Navbar />

                    <div className="content">
                        <Sidebar color={bgColor} />
                        {inited && <AppRouter />}
                    </div>
                </Suspense>
            )}
        </div>
    )
}
