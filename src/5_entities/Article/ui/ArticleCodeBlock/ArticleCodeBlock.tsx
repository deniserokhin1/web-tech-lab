import { memo } from 'react'
import { Code } from '@/6_shared/ui/Code/Code'
import { type ArticleCode } from '../../model/types/article'

interface ArticleCodeBlockProps {
    className?: string
    block?: ArticleCode
}

export const ArticleCodeBlock = memo((props: ArticleCodeBlockProps) => {
    const { block } = props

    if (!block) return null
    const { code } = block

    return <Code text={code} />
})
