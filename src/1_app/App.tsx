import './styles/index.scss'
import { useTheme } from '1_app/providers/ThemeProvider'
import { AppRouter } from '6_shared/config'
import { Navbar } from '3_widgets/Navbar'
import { classNames } from '6_shared/lib'
import { Suspense, useRef } from 'react'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'
import { Sidebar } from '3_widgets/Sidebar'

export const App = (): JSX.Element => {
    const { theme } = useTheme()
    const mods = {}

    const mainRef = useRef(null)
    const color = useGetMainColor(mainRef, theme)

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
