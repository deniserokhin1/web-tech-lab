import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/1_app/App'
import { ErrorBoundary } from '@/1_app/providers/ErrorBoundary'
import { StoreProvider } from '@/1_app/providers/StoreProvider'
import { ThemeProvider } from '@/1_app/providers/ThemeProvider'
import '@/1_app/styles/index.scss'
import '@/6_shared/config/i18n/i18n'

const domNode = document.getElementById('root')

if (!domNode) throw new Error('Root не найден.')

const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
)
