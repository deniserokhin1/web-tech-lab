import { memo } from 'react'

import { useAppSelector } from '@/1_app/providers/StoreProvider'
import { PageLoader } from '@/3_widgets/PageLoader'
import { SpinerDotsTheme } from '@/6_shared/ui/SpinerDots'
import { Text, TextAlign, TextTheme } from '@/6_shared/ui/Text'

import {
    getTechnologyListData,
    getTechnologyListIsLoading,
} from '../model/selectors/getTechnologyList'

import cls from './TechnologiesList.module.scss'

interface TechnologiesListProps {
    className?: string
}

const TechnologiesList = memo((props: TechnologiesListProps) => {
    const data = useAppSelector(getTechnologyListData) || []
    const isLoading = useAppSelector(getTechnologyListIsLoading)

    if (isLoading) {
        return <PageLoader theme={SpinerDotsTheme.INVERT} big={false} />
    }

    return (
        <div className={cls.container}>
            {data.map(({ id, title }) => (
                <Text
                    text={title}
                    align={TextAlign.LEFT}
                    key={id}
                    theme={TextTheme.DEFAULT_INVERT_PRIMARY}
                />
            ))}
        </div>
    )
})

export default TechnologiesList
