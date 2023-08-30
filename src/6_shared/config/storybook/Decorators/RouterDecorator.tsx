import { type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: () => ReactElement): ReactElement => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
)
