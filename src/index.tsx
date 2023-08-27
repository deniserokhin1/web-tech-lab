import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '1_app/App'
import { ThemeProvider } from '1_app/providers/ThemeProvider'
import '6_shared/config/i18n/i18n'

const domNode = document.getElementById('root')

const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
)
