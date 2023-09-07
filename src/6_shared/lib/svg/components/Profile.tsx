import { type FC } from 'react'
import { type ISvgOptions } from '../types'

export const Profile: FC<ISvgOptions> = (props) => {
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
                d="M12 3C9.51472 3 7.5 5.01472 7.5 7.5C7.5 9.98528 9.51472 12 12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3Z"
                fill={pathFill || '#F4EFEF'}
            />
            <path
                d="M16.5 13.5L7.5 13.5C6.46774 13.5 5.48769 13.9465 4.89696 14.6693C4.27533 15.43 4.10333 16.4973 4.77316 17.4874C6.21072 19.6122 8.97039 21 12 21C15.0296 21 17.7893 19.6122 19.2268 17.4874C19.8967 16.4973 19.7247 15.43 19.103 14.6693C18.5123 13.9465 17.5323 13.5 16.5 13.5Z"
                fill={pathFill || '#F4EFEF'}
            />
        </svg>
    )
}
