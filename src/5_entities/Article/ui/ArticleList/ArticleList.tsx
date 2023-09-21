import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticleList.module.scss'
import { ArticleView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles?: IArticle[]
    isLoading?: boolean
    view?: ArticleView
}

const skeletons = (view: ArticleView): JSX.Element[] => {
    return new Array(view === ArticleView.ROW ? 3 : 9).fill(1).map((_, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ))
}

const renderArticle = (article: IArticle, view: ArticleView): JSX.Element => (
    <ArticleListItem article={article} view={view} key={article.id} />
)

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles = [], isLoading, view = ArticleView.TILE } = props

    const mods = {}

    if (isLoading) {
        return (
            <div className={classNames(cls[view])}>
                {skeletons(view)}
            </div>
        )
    }

    return (
        <div className={classNames(cls[view], mods, [className])}>
            {articles?.map((i) => renderArticle(i, view))}
        </div>
    )
})
