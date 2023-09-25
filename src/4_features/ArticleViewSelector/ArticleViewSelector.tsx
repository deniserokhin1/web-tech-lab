import { memo, useRef } from 'react'
import { IconComponent, classNames } from '6_shared/lib'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '5_entities/Article'
import { type IconComponentName } from '6_shared/lib/svg/types'
import { Button } from '6_shared/ui/Button'
import { useGetMainColor } from '6_shared/hooks/useGetMainColor'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

interface ViewSelectors {
    view: ArticleView
    icon: IconComponentName
}

const viewTypes: ViewSelectors[] = [
    {
        view: ArticleView.TILE,
        icon: 'grid',
    },
    {
        view: ArticleView.ROW,
        icon: 'list',
    },
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props
    const ref = useRef<HTMLDivElement>(null)

    // const onClick = (newView: ArticleView) => () => {
    //     onViewClick?.(newView)
    // }

    const color = useGetMainColor(ref, '--primary-color')

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])} ref={ref}>
            {viewTypes.map((viewType, index) => (
                <Button
                    onClick={() => onViewClick?.(viewType.view)}
                    key={index}
                    className={classNames(cls.noSelected, {
                        [cls.selected]: viewType.view === view,
                    })}
                >
                    <IconComponent name={viewType.icon} pathFill={color} />
                </Button>
            ))}
        </div>
    )
})
