import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createRedxuStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props

    const store = createRedxuStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
