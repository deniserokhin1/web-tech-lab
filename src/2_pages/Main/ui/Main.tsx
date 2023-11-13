import { MouseEvent, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch } from '@/1_app/providers/StoreProvider'
import {
    TechnologiesListModal,
    TechnologiesList,
    fetchTechnologiesList,
    technologiesListReducer,
} from '@/4_features/TechnologiesList'
import { useInitialEffect } from '@/6_shared/hooks/useInitialEffect'
import { DynamicModuleLoader, ReducersList } from '@/6_shared/lib/components/DynamicModuleLoader'
import { Card } from '@/6_shared/ui/Card'
import { VStack } from '@/6_shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/6_shared/ui/Text'

import cls from './Main.module.scss'

const reducers: ReducersList = {
    technologiesList: technologiesListReducer,
}

const Main = (): JSX.Element => {
    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    const [showModal, setShowModal] = useState(false)

    const onToggleModal = (): void => {
        setShowModal((prev) => !prev)
    }

    const openList = (e: MouseEvent): void => {
        e.preventDefault()
        onToggleModal()
    }

    const onHover = (): void => {
        TechnologiesList.preload()
    }

    useInitialEffect(() => {
        dispatch(fetchTechnologiesList())
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <VStack gap="16">
                <Text title={t('Главная страница')} align={TextAlign.LEFT} />
                <Card className={cls.cardWidth}>
                    <Text size={TextSize.M} align={TextAlign.LEFT} text={t('Добро пожаловать')}>
                        <a className={cls.a} onClick={openList} onMouseEnter={onHover}>
                            {t('здесь')}
                        </a>
                    </Text>
                </Card>
                <TechnologiesListModal isOpen={showModal} onClose={onToggleModal} />
            </VStack>
        </DynamicModuleLoader>
    )
}

export default Main
