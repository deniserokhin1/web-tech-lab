/* eslint-disable i18next/no-literal-string */
import { type FC, useEffect, useState } from 'react'
import { Button } from '../Button'
import { ButtonTheme } from '../Button/Button'

interface bugButtonProps {
    className?: string
}

export const BugButton: FC<bugButtonProps> = () => {
    const [error, setError] = useState<boolean>(false)

    const throwError = (): void => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Button onClick={throwError} theme={ButtonTheme.OUTLINE}>
            Выбросить ошибку
        </Button>
    )
}
