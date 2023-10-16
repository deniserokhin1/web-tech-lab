import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'
import { Theme } from '@/1_app/providers/ThemeProvider'
import { ThemeDecorator } from '@/6_shared/config/storybook/Decorators/ThemeDecorator'
import { article } from '../../mocks/data'
import { ArticleView } from '../../model/types/article'

const meta = {
    title: '5_entities/ArticleList',
    component: ArticleList,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        articles: new Array(16).fill(0).map((i, index) => ({ ...article, id: index.toString() })),
    },
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const Light_Tile: Story = {
    args: {
        view: ArticleView.TILE,
    },
}

export const Light_Tile_Loading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.TILE,
    },
}

export const Light_Row: Story = {
    args: {
        view: ArticleView.ROW,
    },
}

export const Light_Row_Loading: Story = {
    args: {
        view: ArticleView.ROW,
        isLoading: true,
    },
}

export const Dark_Tile: Story = {
    args: {
        view: ArticleView.TILE,
    },
}
Dark_Tile.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Tile_Loading: Story = {
    args: {
        isLoading: true,
        view: ArticleView.TILE,
    },
}
Dark_Tile_Loading.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Row: Story = {
    args: {
        view: ArticleView.ROW,
    },
}
Dark_Row.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark_Row_Loading: Story = {
    args: {
        view: ArticleView.ROW,
        isLoading: true,
    },
}
Dark_Row_Loading.decorators = [ThemeDecorator(Theme.DARK)]
