import '1_app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '1_app/App'
import { ThemeProvider } from '1_app/providers/ThemeProvider'
import '6_shared/config/i18n/i18n'
import { ErrorBoundary } from '1_app/providers/ErrorBoundary'
import { StoreProvider } from '1_app/providers/StoreProvider'

const domNode = document.getElementById('root')

const root = createRoot(domNode)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
)
