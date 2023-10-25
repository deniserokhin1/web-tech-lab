import { PageWrapper } from '@/3_widgets/PageWrapper'
import { classNames } from '@/6_shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/6_shared/ui/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AdminPanelPage.module.scss'

const namespace = __IS_DEV__ ? 'translation' : ''

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props
    const { t } = useTranslation(namespace)

    return (
        <PageWrapper className={classNames(cls.container, {}, [className])}>
            <Text title={t('Админ панель')} align={TextAlign.LEFT} />
        </PageWrapper>
    )
})

export default AdminPanelPage
