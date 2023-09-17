import { memo, useCallback } from 'react'
import { classNames } from '6_shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import CopyIcon from '6_shared/assets/copy.svg'
import { Button } from '6_shared/ui/Button'

import { ButtonTheme } from '../Button/Button'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <div className={cls.container}>
            <pre className={classNames(cls.code, {}, [className])}>
                <Button className={cls.copyButton} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                    <CopyIcon opacity={0.8} />
                </Button>
                <code>{text}</code>
            </pre>
        </div>
    )
})
