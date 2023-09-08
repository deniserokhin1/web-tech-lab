import { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import {
    type ReduxStoreWidthManager,
    type StateSchemaKey,
} from '1_app/providers/StoreProvider'
import { type Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from '1_app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props

    const { reducerManager } = useStore() as ReduxStoreWidthManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return children
}
