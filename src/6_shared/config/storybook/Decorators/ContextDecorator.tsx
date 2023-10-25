import { type Decorator } from '@storybook/react'

import { ThemeProvider } from '@/1_app/providers/ThemeProvider'

export const ContextDecorator: Decorator = (StoryComponent) => (
    <ThemeProvider>
        <StoryComponent />
    </ThemeProvider>
)
