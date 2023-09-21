import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from '5_entities/Article/ui/ArticleList/ArticleList'
import { article } from '5_entities/Article/mocks/data'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className } = props

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <ArticleList
                articles={new Array(16)
                    .fill(0)
                    .map((i, index) => ({ ...article, id: index.toString() }))}
            />
        </div>
    )
})

export default ArticlesPage
