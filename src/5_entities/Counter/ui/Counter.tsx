import { Button } from '6_shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounter } from '../model/selectors/getCounter/getCounter'

export const Counter = (): JSX.Element => {
    const dispatch = useDispatch()
    const { value } = useSelector(getCounter)

    const { decrement, increment } = counterActions

    const handlerIncrement = (): void => {
        dispatch(increment())
    }

    const handlerDecrement = (): void => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>{value}</h1>

            <Button onClick={handlerIncrement}>+</Button>
            <Button onClick={handlerDecrement}>-</Button>
        </div>
    )
}
