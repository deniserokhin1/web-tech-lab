import { memo } from 'react'
import { classNames } from '6_shared/lib'
import cls from './ArticleCodeBlock.module.scss'
import { Code } from '6_shared/ui/Code/Code'
import { type ArticleCode } from '5_entities/Article/model/types/article'

interface ArticleCodeBlockProps {
    className?: string
    block?: ArticleCode
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { className, block } = props

    if (!block) return null
    const { code } = block

    const mods = {}

    return <Code text={code} />
})
