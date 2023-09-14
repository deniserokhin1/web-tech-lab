import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticleTextBlock.module.scss'
import { type ArticleText } from '../../model/types/article'
import { Text, TextAlign } from '6_shared/ui/Text/Text'

interface ArticleTextBlockProps {
    className?: string
    block?: ArticleText
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { className, block } = props

    if (!block) return null
    const { paragraphs, title } = block

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {title && <Text title={title} align={TextAlign.LEFT} />}

            {paragraphs?.map((i, index) => (
                <Text text={i} key={index} align={TextAlign.LEFT} />
            ))}
        </div>
    )
})
