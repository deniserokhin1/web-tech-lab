import { memo, useCallback } from 'react'
import { classNames } from '6_shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './AddCommentForm.module.scss'
import { Input } from '6_shared/ui/Input'
import { Button } from '6_shared/ui/Button'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '6_shared/lib/components/DynamicModuleLoader'
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slice/addCommentFormSlice'
import { useAppDispatch, useAppSelector } from '1_app/providers/StoreProvider'
import { getAddCommentText } from '../../model/selectors/getAddCommentForm'
import { ButtonTheme } from '6_shared/ui/Button/Button'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addNewCommentReducer,
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props
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

    const mods = {}

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.container, mods, [className])}>
                <Input
                    value={commentText}
                    onChange={onCommentTextChange}
                    placeholder={t('article-details.Введите текст комментария')}
                    className={cls.borderInput}
                />
                <Button
                    children={t('article-details.Отправить')}
                    theme={ButtonTheme.BACKGROUND}
                    onClick={onSendHandler}
                    disabled={commentText === ''}
                />
            </div>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm