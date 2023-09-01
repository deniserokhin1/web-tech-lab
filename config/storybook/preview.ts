import type { Preview } from '@storybook/react'
import { StyleDecorator } from '6_shared/config/storybook/Decorators/StyleDecorator'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { RouterDecorator } from '6_shared/config/storybook/Decorators/RouterDecorator'
import { I18nDecorator } from '6_shared/config/storybook/Decorators/i18nextDecorator'
import { Theme } from '1_app/providers/ThemeProvider'
import { ContextDecorator } from '6_shared/config/storybook/Decorators/ContextDecorator'

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
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        I18nDecorator,
        ContextDecorator
    ],
}

export default preview
