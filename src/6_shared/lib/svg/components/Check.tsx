import { type FC } from 'react'

import { type ISvgOptions } from '../types'

export const Check: FC<ISvgOptions> = (props) => {
    const { pathFill } = props

    return (
        <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Interface / Check_Big">
                <path
                    id="Vector"
                    d="M4 12L8.94975 16.9497L19.5572 6.34326"
                    stroke={pathFill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}
