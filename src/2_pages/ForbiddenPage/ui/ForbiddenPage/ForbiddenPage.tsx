import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { PageWrapper } from '@/3_widgets/PageWrapper'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Card } from '@/6_shared/ui/Card'
import { Text, TextAlign } from '@/6_shared/ui/Text'

import cls from './ForbiddenPage.module.scss'

const namespace = __IS_DEV__ ? 'translation' : ''

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props
    const { t } = useTranslation(namespace)

    return (
        <PageWrapper className={classNames(cls.container, {}, [className])}>
            <Text title={t('У вас нет доступа к этой странице.')} align={TextAlign.LEFT} />
        </PageWrapper>
    )
})

export default ForbiddenPage
