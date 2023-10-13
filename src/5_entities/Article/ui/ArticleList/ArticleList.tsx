import { classNames } from '6_shared/lib'
import { Text } from '6_shared/ui/Text/Text'
import { memo, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
    className?: string
    articles?: IArticle[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    padding?: string | number
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles = [], isLoading, view = ArticleView.TILE, target, padding } = props

    const namespace = __IS_DEV__ ? 'translation' : 'articles-list'
    const { t } = useTranslation(namespace)

    const skeletons = (view: ArticleView): JSX.Element[] => {
        return new Array(view === ArticleView.ROW ? 3 : 9)
            .fill(1)
            .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)
    }

    const renderArticle = (article: IArticle, view: ArticleView): JSX.Element => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
            padding={padding}
            
        />
    )

    const mods = {}

    if (!isLoading && !articles.length) {
        return <Text title={t('articles-list.Статьи не найдены')} />
    }

    return (
        <div className={classNames(cls[view], mods, [className])}>
            {articles?.map((i) => renderArticle(i, view))}
            {isLoading && skeletons(view)}
        </div>
    )
})
