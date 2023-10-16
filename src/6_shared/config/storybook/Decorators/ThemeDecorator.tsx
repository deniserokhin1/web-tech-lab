import { ThemeProvider, type Theme } from '@/1_app/providers/ThemeProvider'
import { type Decorator } from '@storybook/react'

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (StoryComponent) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`storybook ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
