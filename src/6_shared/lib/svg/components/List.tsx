import { type FC } from 'react'

import { type ISvgOptions } from '../types'

export const List: FC<ISvgOptions> = (props) => {
    const { pathFill } = props

    return (
        <svg
            fill={pathFill}
            width="30px"
            height="30px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M228,128.00037a12.00028,12.00028,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12.00028,12.00028,0,0,1,228,128.00037Zm-188-52H216a12,12,0,0,0,0-24H40a12,12,0,1,0,0,24Zm176,104H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
        </svg>
    )
}
