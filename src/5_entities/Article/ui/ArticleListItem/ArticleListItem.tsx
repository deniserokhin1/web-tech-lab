import { type HTMLAttributeAnchorTarget, memo, useRef } from 'react'

import { useTranslation } from 'react-i18next'

import { routePath } from '@/6_shared/const/router'
import { useGetMainColor } from '@/6_shared/hooks/useGetMainColor'
import { useHover } from '@/6_shared/hooks/useHover'
import { IconComponent, classNames } from '@/6_shared/lib'
import { AppImage } from '@/6_shared/ui/AppImage'
import { AppLink } from '@/6_shared/ui/AppLink'
import { Avatar } from '@/6_shared/ui/Avatar'
import { ButtonTheme, Button } from '@/6_shared/ui/Button'
import { Card } from '@/6_shared/ui/Card'
import { Skeleton } from '@/6_shared/ui/Skeleton'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import {
    ArticleDataType,
    type ArticleText,
    ArticleView,
    type IArticle,
} from '../../model/types/article'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
    className?: string
    article: IArticle
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    padding?: string | number
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.ROW,
        target,
        padding,
    } = props
    const ref = useRef<HTMLDivElement>(null)

    const namespace = __IS_DEV__ ? 'translation' : 'articles-list'
    const { t } = useTranslation(namespace)

    const mods = {}

    const [bindHover] = useHover()

    const color = useGetMainColor(ref, '--secondary-color')

    const types = (
        <Text
            text={article?.type.join(', ')}
            className={cls.types}
            minWidth={true}
            align={TextAlign.LEFT}
        />
    )

    const views = (
        <>
            <Text
                text={article?.views.toString()}
                className={cls.views}
                minWidth={true}
            />

            <IconComponent name="eye" pathFill={color} />
        </>
    )

    if (view === ArticleView.ROW) {
        const textBlock = article?.data.find(
            (item) => item.type === ArticleDataType.TEXT,
        ) as ArticleText

        return (
            <div
                className={classNames(cls[view], mods, [className])}
                {...bindHover}
                ref={ref}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article?.user.avatar} size={30} />

                        <Text
                            text={article?.user.username}
                            className=""
                            minWidth={true}
                        />

                        <Text
                            text={article?.dataCreate}
                            className={cls.date}
                            minWidth={true}
                        />
                    </div>

                    <Text
                        title={article?.title}
                        minWidth={true}
                        align={TextAlign.LEFT}
                    />

                    {types}

                    <AppImage
                        src={article?.img}
                        className={cls.img}
                        fallback={<Skeleton borderRadius="6px" height={300} />}
                        errorFallback={
                            <Skeleton borderRadius="6px" height={300} />
                        }
                    />

                    {textBlock && (
                        <ArticleTextBlock block={textBlock} short={true} />
                    )}

                    <div>
                        <AppLink
                            to={routePath.article_details(article.id)}
                            target={target}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('articles-list.Читать далее')}
                            </Button>
                        </AppLink>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink to={routePath.article_details(article.id)} target={target}>
            <div
                className={classNames(cls[view], mods, [className])}
                {...bindHover}
                ref={ref}
            >
                <Card className={cls.card} padding={padding} maxHeight={true}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={
                                <Skeleton minHeight={157} borderRadius="4px" />
                            }
                            errorFallback={
                                <Skeleton minHeight={157} borderRadius="4px" />
                            }
                            src={article?.img}
                            className={cls.img}
                        />
                    </div>

                    <Text
                        text={article?.dataCreate}
                        className={cls.date}
                        minWidth={true}
                    />

                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>

                    <Text
                        text={article?.title}
                        align={TextAlign.LEFT}
                        className={cls.title}
                    />
                </Card>
            </div>
        </AppLink>
    )
})
