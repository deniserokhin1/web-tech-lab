import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { article } from '../../mocks/data'
import { type ArticleView } from '../../model/types/article'

const meta = {
    title: '5_entities/ArticleListItem',
    component: ArticleListItem,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        article,
    },
} satisfies Meta<typeof ArticleListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Light_Row: Story = {
    args: {},
}

export const Light_Tile: Story = {
    args: {
        view: 'tile' as ArticleView,
    },
}

export const Dark_Row: Story = {
    args: {},
}
Dark_Row.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Tile: Story = {
    args: {
        view: 'tile' as ArticleView,
    },
}
Dark_Tile.decorators = [ThemeDecorator(Theme.DARK)]
