import { type FC } from 'react'

import { type ISvgOptions } from '../types'

export const Down: FC<ISvgOptions> = (props) => {
    const { pathFill } = props

    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 10L12 15L17 10"
                stroke={pathFill}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
