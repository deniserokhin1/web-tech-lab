import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import ThemeProvider from './theme/ThemeProvider'

const domNode = document.getElementById('root')

const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)
