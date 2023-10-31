import { ImgHTMLAttributes, ReactNode, memo, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
    fallback?: ReactNode
    errorFallback?: ReactNode
}

export const AppImage = memo((props: AppImageProps) => {
    const { className, src, fallback, errorFallback, alt = '', ...otherProps } = props

    const [isLoading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useLayoutEffect(() => {
        const img = new Image()
        img.src = src ?? ''
        img.onload = () => setLoading(false)
        img.onerror = () => {
            setLoading(false)
            setHasError(true)
        }
    }, [src])

    if (isLoading && fallback) return fallback

    if (hasError && errorFallback) return errorFallback

    return <img className={className} src={src} alt={alt} {...otherProps} />
})
