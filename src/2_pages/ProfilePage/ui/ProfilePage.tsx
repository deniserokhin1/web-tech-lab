import { PageWrapper } from '@/3_widgets/PageWrapper'
import { EditableProfileCard } from '@/4_features/EditableProfileCard'
import { Card } from '@/6_shared/ui/Card/Card'
import { VStack } from '@/6_shared/ui/Stack/VStatck/VStack'
import { memo } from 'react'

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
