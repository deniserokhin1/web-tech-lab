// import cls from './ProfilePage.module.scss'
import { memo, useEffect } from 'react'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from '5_entities/Profile'
import { useAppDispatch } from '1_app/providers/StoreProvider'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <ProfileCard />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
