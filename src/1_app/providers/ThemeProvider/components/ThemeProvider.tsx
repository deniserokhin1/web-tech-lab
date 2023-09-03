import { useState, useMemo, type FC, type ReactNode } from 'react'
import {
    LOCAL_STORAGE_STATE_SIDEBAR,
    LOCAL_STORAGE_THEME_KEY,
    Sidebar,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext'

export interface ThemeProviderProps {
    children: ReactNode
    initialTheme?: Theme
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const defaultStateSidebar =
    (localStorage.getItem(LOCAL_STORAGE_STATE_SIDEBAR) as Sidebar) || Sidebar.CLOSE

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
    const [stateSidebar, setStateSideBar] = useState<Sidebar>(defaultStateSidebar)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
            stateSidebar,
            setStateSideBar,
        }),
        [theme, stateSidebar],
    )

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
