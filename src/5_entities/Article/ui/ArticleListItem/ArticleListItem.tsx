import { type HTMLAttributeAnchorTarget, memo, useRef } from 'react'
import { IconComponent, classNames } from '@/6_shared/lib'
import cls from './ArticleListItem.module.scss'
import {
    ArticleDataType,
    type ArticleText,
    ArticleView,
    type IArticle,
} from '../../model/types/article'
import { Text, TextAlign } from '@/6_shared/ui/Text'
import { Card } from '@/6_shared/ui/Card'
import { useHover } from '@/6_shared/hooks/useHover'
import { useGetMainColor } from '@/6_shared/hooks/useGetMainColor'
import { Avatar } from '@/6_shared/ui/Avatar'
import { useTranslation } from 'react-i18next'
import { ButtonTheme, Button } from '@/6_shared/ui/Button'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { RoutePath } from '@/1_app/providers/Router/config/routeConfig'
import { AppLink } from '@/6_shared/ui/AppLink'

interface ArticleListItemProps {
    className?: string
    article?: IArticle
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    padding?: string | number
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view = ArticleView.ROW, target, padding } = props
    const ref = useRef<HTMLDivElement>(null)
    // const navigate = useNavigate()

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

                    <Text title={article?.title} minWidth={true} align={TextAlign.LEFT} />

                    {types}

                    <img src={article?.img} className={cls.img} />

                    {textBlock && <ArticleTextBlock block={textBlock} short={true} />}

                    <div>
                        <AppLink
                            to={`${RoutePath.article_details + article?.id}`}
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
        <AppLink to={`${RoutePath.article_details + article?.id}`} target={target}>
            <div
                className={classNames(cls[view], mods, [className])}
                {...bindHover}
                ref={ref}
            >
                <Card className={cls.card} padding={padding}>
                    <div className={cls.imageWrapper}>
                        <img src={article?.img} className={cls.img} />
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
