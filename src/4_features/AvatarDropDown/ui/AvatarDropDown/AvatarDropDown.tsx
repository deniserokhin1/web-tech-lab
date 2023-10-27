import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/5_entities/User'
import { routePath } from '@/6_shared/const/router'
import { Avatar } from '@/6_shared/ui/Avatar'
import { Dropdown } from '@/6_shared/ui/Popups'

const namespace = __IS_DEV__ ? 'translation' : 'namespace'

interface AvatarDropDownProps {
    className?: string
}

export const AvatarDropDown = memo((props: AvatarDropDownProps) => {
    const { className } = props
    const { t } = useTranslation(namespace)
    const dispatch = useAppDispatch()

    const authData = useAppSelector(getUserAuthData)
    const isAdmin = useAppSelector(isUserAdmin)
    const isManager = useAppSelector(isUserManager)

    const isAdminPanelAvaliable = isAdmin || isManager

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (!authData) return null

    return (
        <Dropdown
            direciotn="right"
            items={[
                ...(isAdminPanelAvaliable
                    ? [
                          {
                              content: t('Админка'),
                              href: routePath.admin_panel(),
                          },
                      ]
                    : []),
                {
                    content: t('Профиль'),
                    href: routePath.profile(authData.id),
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={35} src={authData.avatar} border={true} />}
            className={className}
        />
    )
})
