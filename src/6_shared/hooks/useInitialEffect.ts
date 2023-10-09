import { useEffect } from 'react'

export const useInitialEffect = (callback: () => void): void => {
    useEffect(() => {
        if (__PROJECT__ === ('storybook' || 'jest')) return
        callback()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
