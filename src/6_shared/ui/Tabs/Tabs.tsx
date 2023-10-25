import { type ReactNode, useCallback } from 'react'

import { classNames } from '@/6_shared/lib'

import { Card, CardTheme } from '../Card/Card'

import cls from './Tabs.module.scss'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: Array<TabItem<T>>
    value: string
    onTabClick: (type: T) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>): JSX.Element => {
    const { className, onTabClick, tabs, value } = props

    const clickHandler = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab.value)
    }, [onTabClick])

    const mods = {}

    return (
        <div className={classNames(cls.container, mods, [className])}>
            {tabs.map((tab, idx) => (
                <Card
                    className={cls.tab}
                    key={idx}
                    theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.DEFAULT}
                    onClick={clickHandler(tab)}
                    smallPadding={true}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
