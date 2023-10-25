import { Suspense } from 'react'

import { type Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'

import i18n from '../../../config/i18n/i18n'

export const TranslationDecorator: Decorator = (StoryComponent) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
)
