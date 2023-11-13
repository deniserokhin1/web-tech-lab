import { memo } from 'react'

import { PageWrapper } from '@/3_widgets/PageWrapper'
import { ArticlesProjectList } from '@/4_features/ArticlesProjectList'
import { VStack } from '@/6_shared/ui/Stack'

import cls from './About.module.scss'

const About = memo((): JSX.Element => {
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
