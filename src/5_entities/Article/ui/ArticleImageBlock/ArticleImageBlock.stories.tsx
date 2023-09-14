import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlock } from './ArticleImageBlock'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'

const meta = {
    title: '/ArticleImageBlock',
    component: ArticleImageBlock,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
