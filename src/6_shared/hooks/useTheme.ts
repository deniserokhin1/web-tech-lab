import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '1_app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

export interface UseThemeResult {
    toggleTheme: VoidFunction
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
