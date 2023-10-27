import { type FC, type ReactNode, useEffect } from 'react'

import { type Reducer } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'

import {
    StateSchema,
    type ReduxStoreWidthManager,
    type StateSchemaKey,
} from '@/1_app/providers/StoreProvider'
import { useAppDispatch } from '@/1_app/providers/StoreProvider'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props

    const store = useStore() as ReduxStoreWidthManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducer()

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey]

            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({ type: `@INIT ${name} reducer` })
            }
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return children
}
