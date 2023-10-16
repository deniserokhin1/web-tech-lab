import { ThemeProvider } from '@/1_app/providers/ThemeProvider'
import { type Decorator } from '@storybook/react'

export const ContextDecorator: Decorator = (StoryComponent) => (
    <ThemeProvider>
        <StoryComponent />
    </ThemeProvider>
)
