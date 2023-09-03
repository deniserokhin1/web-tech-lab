import { Button } from '6_shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = (): JSX.Element => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const { decrement, increment } = counterActions

    const handlerIncrement = (): void => {
        dispatch(increment())
    }

    const handlerDecrement = (): void => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>

            <Button data-testid="increment-btn" onClick={handlerIncrement}>+</Button>
            <Button data-testid="decrement-btn" onClick={handlerDecrement}>-</Button>
        </div>
    )
}
