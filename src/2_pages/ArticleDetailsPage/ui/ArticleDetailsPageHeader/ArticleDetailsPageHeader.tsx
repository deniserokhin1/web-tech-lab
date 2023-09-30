import { memo, useCallback, useRef } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import cls from './ArticleDetailsPageHeader.module.scss'
import { Button } from '6_shared/ui/Button'
import { RoutePath } from '1_app/providers/Router/config/routeConfig'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '1_app/providers/StoreProvider'
import { getCanArticleEdit } from '2_pages/ArticleDetailsPage/model/selectors/article'
import { getArticleDetailsData } from '5_entities/Article'
import { getUIMainColor } from '4_features/UI/model/selectors/getUI'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const ref = useRef<HTMLDivElement>(null)
    const canArticleEdit = useAppSelector(getCanArticleEdit)
    const article = useAppSelector(getArticleDetailsData)
    const primaryColor = useAppSelector(getUIMainColor)

    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(RoutePath.article_details + article?.id + '/edit')
    }, [article?.id, navigate])

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])} ref={ref}>
            <Button onClick={onBackToList} className={classNames(cls.systemButton)}>
                <IconComponent name="back" pathFill={primaryColor} />
            </Button>

            {canArticleEdit && (
                <Button
                    onClick={onEditArticle}
                    className={classNames(cls.systemButton, {}, [cls.editButton])}
                >
                    <IconComponent name="edit" pathFill={primaryColor} />
                </Button>
            )}
        </div>
    )
})
