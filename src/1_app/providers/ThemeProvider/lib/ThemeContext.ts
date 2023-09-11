import { createContext } from 'react'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
    GREEN = 'green'
}

export enum Sidebar {
    OPEN = 'open',
    CLOSE = '',
}

export interface IThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
    stateSidebar?: Sidebar
    setStateSideBar?: (state: Sidebar) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
export const LOCAL_STORAGE_STATE_SIDEBAR = 'sidebar'
