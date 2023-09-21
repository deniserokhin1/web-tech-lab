import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticleTextBlock.module.scss'
import { type ArticleText } from '../../model/types/article'
import { Text, TextAlign } from '6_shared/ui/Text/Text'

interface ArticleTextBlockProps {
    className?: string
    block?: ArticleText
    short?: boolean
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { className, block, short = false } = props

    if (!block) return null
    const { paragraphs, title } = block

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {title && <Text title={title} align={TextAlign.LEFT} />}

            {short ? (
                <Text text={paragraphs[0]} align={TextAlign.LEFT} />
            ) : (
                paragraphs?.map((i, index) => (
                    <Text text={i} key={index} align={TextAlign.LEFT} />
                ))
            )}
        </div>
    )
})
