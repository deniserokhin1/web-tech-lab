import { memo } from 'react'

import { AppImage } from '@/6_shared/ui/AppImage'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { VStack } from '@/6_shared/ui/Stack'
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

    return (
        <VStack gap="16" max={true} className={className}>
            <AppImage
                fallback={<Skeleton className={cls.img} />}
                errorFallback={<Skeleton className={cls.img} />}
                className={cls.img}
                src={src}
            />
            <Text text={title} maxWidth={true} />
        </VStack>
    )
})
