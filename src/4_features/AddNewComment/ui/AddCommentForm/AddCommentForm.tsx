import { memo, useCallback } from 'react'

import { useTranslation } from 'react-i18next'

import { useAppDispatch, useAppSelector } from '@/1_app/providers/StoreProvider'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/6_shared/lib/components/DynamicModuleLoader'
import { ButtonTheme, Button } from '@/6_shared/ui/Button'
import { Input } from '@/6_shared/ui/Input'
import { HStack } from '@/6_shared/ui/Stack'

import { getAddCommentText } from '../../model/selectors/getAddCommentForm'
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slice/addCommentFormSlice'

import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addNewCommentReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { onSendComment } = props
    const commentText = useAppSelector(getAddCommentText)
    const dispatch = useAppDispatch()

    const namespace = __IS_DEV__ ? 'translation' : 'article-details'
    const { t } = useTranslation(namespace)

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value))
        },
        [dispatch],
    )

    const onSendHandler = useCallback(() => {
        onSendComment(commentText || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, commentText])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack gap="16" max={true}>
                <Input
                    value={commentText}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария')}
                    className={cls.borderInput}
                />
                <Button
                    children={t('Отправить')}
                    theme={ButtonTheme.BACKGROUND}
                    onClick={onSendHandler}
                    disabled={commentText === ''}
                />
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
