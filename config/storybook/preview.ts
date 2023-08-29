import { StyleDecorator } from '../../src/6_shared/config/storybook/StyleDecorator/StyleDecorator'
import type { Preview } from '@storybook/react'
import '../../src/1_app/styles/index.scss'
import { ThemeDecorator } from '../../src/6_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/1_app/providers/ThemeProvider'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
}

export default preview
