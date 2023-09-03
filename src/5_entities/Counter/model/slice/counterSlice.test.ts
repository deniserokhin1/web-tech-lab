import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from '../types/counterSchema'

const { decrement, increment } = counterActions

describe('counterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 }

        expect(counterReducer(state, increment())).toEqual({ value: 11 })
    })
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }

        expect(counterReducer(state, decrement())).toEqual({ value: 9 })
    })
    test('empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({
            value: -1,
        })
    })
})
