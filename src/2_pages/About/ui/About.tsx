import { memo } from 'react'

import { useTranslation } from 'react-i18next'

import { PageWrapper } from '@/3_widgets/PageWrapper'
import { ArticlesProjectList } from '@/4_features/ArticlesProjectList'
import { VStack } from '@/6_shared/ui/Stack'

import cls from './About.module.scss'

const About = memo((): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <PageWrapper>
            <VStack gap="16">
                <div className={cls.content}>
                    <ArticlesProjectList />
                </div>
            </VStack>
        </PageWrapper>
    )
})

export default About
