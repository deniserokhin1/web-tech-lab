import { type FC } from 'react'
import { type ISvgOptions } from '../types'

export const Grid: FC<ISvgOptions> = (props) => {
    const { pathFill } = props

    return (
        <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.1"
                d="M21 12H12V3H15.024C19.9452 3 21 4.05476 21 8.976V12Z"
                fill={pathFill}
            />
            <path
                opacity="0.1"
                d="M3 15.024V12H12V21H8.976C4.05476 21 3 19.9452 3 15.024Z"
                fill={pathFill}
            />
            <path
                d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
                stroke={pathFill}
                strokeWidth="2"
            />
            <path
                d="M12 3V21"
                stroke={pathFill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 12L3 12"
                stroke={pathFill}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
