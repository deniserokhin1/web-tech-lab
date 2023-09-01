import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '6_shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { type RenderResult, render } from '@testing-library/react'
import { ThemeProvider } from '1_app/providers/ThemeProvider'

export interface renderWithRouterOPtions {
    route?: string
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOPtions = {},
): RenderResult => {
    const { route = '/' } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <ThemeProvider>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </ThemeProvider>
        </MemoryRouter>,
    )
}
