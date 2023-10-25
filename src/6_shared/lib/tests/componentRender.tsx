import { type ReactNode } from 'react'

import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type RenderResult, render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { type StateSchema, StoreProvider } from '@/1_app/providers/StoreProvider'
import { ThemeProvider } from '@/1_app/providers/ThemeProvider'
import i18nForTests from '@/6_shared/config/i18n/i18nForTests'

export interface renderWithRouterOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOptions = {},
): RenderResult => {
    const { initialState, route = '/', asyncReducers } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState as StateSchema}
                asyncReducers={asyncReducers}
            >
                <ThemeProvider>
                    <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>,
    )
}
