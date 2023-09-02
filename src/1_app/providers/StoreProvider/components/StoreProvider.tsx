import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createRedxuStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props

    const store = createRedxuStore(initialState)

    return <Provider store={store}>{children}</Provider>
}
