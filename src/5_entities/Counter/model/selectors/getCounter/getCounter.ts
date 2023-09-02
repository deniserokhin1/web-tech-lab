import { type StateSchema } from '1_app/providers/StoreProvider'
import { type CounterSchema } from '../../types/counterSchema'

export const getCounter = (state: StateSchema): CounterSchema => state.counter
