import React, { FC, SVGProps, memo } from 'react'

import { classNames } from '@/6_shared/lib/classNames/classNames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted, ...otherProps } = props

    // const mods = {
    //     [cls.inverted]: inverted,
    // }

    return <Svg className={classNames('', {}, [className])} {...otherProps} />
})
