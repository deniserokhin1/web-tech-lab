import { FC, SVGProps, memo } from 'react'

import { classNames } from '@/6_shared/lib/classNames/classNames'

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props

    return <Svg className={classNames('', {}, [className])} {...otherProps} />
})
