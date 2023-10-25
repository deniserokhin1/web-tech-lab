import { memo } from 'react'

import { classNames } from '@/6_shared/lib'
import { Avatar } from '@/6_shared/ui/Avatar'
import { Text } from '@/6_shared/ui/Text'

import { type ArticleImage } from '../../model/types/article'

import cls from './ArticleImageBlock.module.scss'

interface ArticleImageBlockProps {
    className?: string
    block?: ArticleImage
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const { className, block } = props

    if (!block) return null

    const { src, title } = block

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            <Avatar height={300} width="100%" src={src} borderRadius={'8px'} />
            <Text text={title} />
        </div>
    )
})
