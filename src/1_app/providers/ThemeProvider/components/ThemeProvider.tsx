import { useState, useMemo, FC, ReactNode } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

export interface ThemeProviderProps {
    children: ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    )

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
