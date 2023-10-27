import { memo, useCallback } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { getUIMainColor } from '@/4_features/UI'
import { getArticleDetailsData } from '@/5_entities/Article'
import { routePath } from '@/6_shared/const/router'
import { IconComponent, classNames } from '@/6_shared/lib'
import { Button } from '@/6_shared/ui/Button'

import { getCanArticleEdit } from '../../model/selectors/article'

import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props
        const canArticleEdit = useAppSelector(getCanArticleEdit)
        const article = useAppSelector(getArticleDetailsData)
        const primaryColor = useAppSelector(getUIMainColor)

        const navigate = useNavigate()

        const onBackToList = useCallback(() => {
            navigate(routePath.articles())
        }, [navigate])

        const onEditArticle = useCallback(() => {
            if (article) navigate(routePath.article_edit(article.id))
        }, [article, navigate])

        const mods = {}

        return (
            <div className={classNames(cls.container, mods, [className])}>
                <Button
                    onClick={onBackToList}
                    className={classNames(cls.systemButton)}
                >
                    <IconComponent name="back" pathFill={primaryColor} />
                </Button>

                {canArticleEdit && (
                    <Button
                        onClick={onEditArticle}
                        className={classNames(cls.systemButton, {}, [
                            cls.editButton,
                        ])}
                    >
                        <IconComponent name="edit" pathFill={primaryColor} />
                    </Button>
                )}
            </div>
        )
    },
)
