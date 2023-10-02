import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { ArticleType } from '../../model/types/article'

const meta = {
    title: '5_entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        value: ArticleType.ALL,
    },
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}

export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
