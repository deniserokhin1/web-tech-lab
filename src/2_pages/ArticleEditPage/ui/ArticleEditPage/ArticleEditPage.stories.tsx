import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { StoreDecorator } from '@/6_shared/config/storybook/Decorators/StoreDecorator'

const meta = {
    title: '2_pages/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
