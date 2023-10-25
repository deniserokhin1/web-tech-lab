import { memo } from 'react'

import { PageWrapper } from '@/3_widgets/PageWrapper'
import { EditableProfileCard } from '@/4_features/EditableProfileCard'
import { Card } from '@/6_shared/ui/Card'
import { VStack } from '@/6_shared/ui/Stack'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    return (
        <PageWrapper>
            <Card>
                <VStack gap="16" align="center">
                    <EditableProfileCard />
                </VStack>
            </Card>
        </PageWrapper>
    )
})

export default ProfilePage
