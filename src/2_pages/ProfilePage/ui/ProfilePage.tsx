// import cls from './ProfilePage.module.scss'
import { memo } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import { profileReducer } from '5_entities/Profile'

interface ProfilePageProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props
    const mods = {}

    const namespace = __IS_DEV__ ? 'translation' : 'profile'
    const { t } = useTranslation(namespace)

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', mods, [className])}>
                {t('profile.Профиль')}
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
