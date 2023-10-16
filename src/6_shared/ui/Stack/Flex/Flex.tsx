import { classNames } from '@/6_shared/lib'
import cls from './Flex.module.scss'
import { type ReactNode } from 'react'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    between: cls.justifyBetween,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
}

export interface FlexProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction: FlexDirection
    gap?: FlexGap
    max?: boolean
}

export const Flex = (props: FlexProps): JSX.Element => {
    const {
        className,
        children,
        align = 'center',
        direction = 'row',
        justify = 'center',
        gap,
        max,
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ]

    const mods = {
        [cls.max]: max,
    }

    return <div className={classNames(cls.container, mods, classes)}>{children}</div>
}
