import { type Theme } from '1_app/providers/ThemeProvider'
import { type ReactElement } from 'react'

export const ThemeDecorator =
    (theme: Theme) =>
        (StoryComponent: () => JSX.Element): ReactElement => (
            <div className={`storybook ${theme}`}>
                <StoryComponent />
            </div>
        )

export const ClearButtonDecorator = (StoryComponent: () => ReactElement): ReactElement => (
    <div className={`dark`}>
        <StoryComponent />
    </div>
)
