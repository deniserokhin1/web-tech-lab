import { type Theme } from '1_app/providers/ThemeProvider'
import { type Decorator } from '@storybook/react'

export const ThemeDecorator =
    (theme: Theme): Decorator =>
        (StoryComponent) => (
            <div className={`storybook ${theme}`}>
                <StoryComponent />
            </div>
        )

export const ClearButtonDecorator: Decorator = (StoryComponent) => (
    <div className={`dark`}>
        <StoryComponent />
    </div>
)

export const AppLinkLightDecorator: Decorator = (StoryComponent) => (
    <div className={`light`}>
        <StoryComponent />
    </div>
)

export const AppLinkDarkDecorator: Decorator = (StoryComponent) => (
    <div className={`dark`}>
        <StoryComponent />
    </div>
)
