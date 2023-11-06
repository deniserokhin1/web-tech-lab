import { useContext } from 'react'

import {
    LOCAL_STORAGE_STATE_SIDEBAR,
    LOCAL_STORAGE_THEME_KEY,
    Sidebar,
    Theme,
    ThemeContext,
} from './ThemeContext'

export interface UseThemeResult {
    toggleTheme: VoidFunction
    theme: Theme
    stateSidebar: Sidebar
    toggleSidebar: VoidFunction
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme, setStateSideBar, stateSidebar } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        let newTheme: Theme
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK
                break

            case Theme.DARK:
                newTheme = Theme.GREEN
                break

            case Theme.GREEN:
                newTheme = Theme.RED
                break

            case Theme.RED:
                newTheme = Theme.ORANGE
                break

            case Theme.ORANGE:
                newTheme = Theme.CIAN
                break

            case Theme.CIAN:
                newTheme = Theme.BLACK
                break

            case Theme.BLACK:
                newTheme = Theme.LIGHT
                break

            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    const toggleSidebar = (): void => {
        const newState = stateSidebar === Sidebar.OPEN ? Sidebar.CLOSE : Sidebar.OPEN
        setStateSideBar?.(newState)
        localStorage.setItem(LOCAL_STORAGE_STATE_SIDEBAR, newState)
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
        stateSidebar: stateSidebar || Sidebar.CLOSE,
        toggleSidebar,
    }
}
