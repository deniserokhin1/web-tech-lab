import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n/i18nForTests'
import { type Decorator } from '@storybook/react'

export const I18nDecorator: Decorator = (StoryComponent) => (
    <I18nextProvider i18n={i18n}>
        <StoryComponent />
    </I18nextProvider>
)
