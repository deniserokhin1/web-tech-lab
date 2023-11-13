import { ArticleCodeBlock } from '../../ui/ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../../ui/ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../../ui/ArticleTextBlock/ArticleTextBlock'
import { ArticleData, ArticleDataType } from '../types/article'

export const renderArticleBlock = (block: ArticleData): JSX.Element | null => {
    const { type, id } = block

    switch (type) {
        case ArticleDataType.CODE:
            return <ArticleCodeBlock block={block} key={id} />
        case ArticleDataType.IMAGE:
            return <ArticleImageBlock block={block} key={id} />
        case ArticleDataType.TEXT:
            return <ArticleTextBlock block={block} key={id} />
        default:
            return null
    }
}
