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
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    const toggleSidebar = (): void => {
        const newState = stateSidebar === Sidebar.OPEN ? Sidebar.CLOSE : Sidebar.OPEN
        setStateSideBar(newState)
        localStorage.setItem(LOCAL_STORAGE_STATE_SIDEBAR, newState)
    }

    return { theme, toggleTheme, stateSidebar, toggleSidebar }
}
