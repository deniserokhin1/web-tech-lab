import { type FC } from 'react'
import { type ISvgOptions } from '../types'

export const BurgerMenu: FC<ISvgOptions> = (props) => {
    const { pathFill } = props

    return (
        <svg
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.612506 0.0239132C0.258278 0.106369 0 0.415775 0 0.757692C0 1.04448 0.187171 1.32043 0.461858 1.43857C0.561248 1.48131 0.668302 1.50335 0.77649 1.50335H10.4981C19.9439 1.50335 20.3895 1.50118 20.5163 1.45462C20.6812 1.39402 20.8833 1.19381 20.9518 1.02296C20.989 0.93025 20.9997 0.842724 20.9918 0.694298C20.9822 0.513361 20.9699 0.476703 20.8754 0.346931C20.8172 0.267133 20.7255 0.173478 20.6715 0.138825C20.4384 -0.0108482 21.1113 -0.00173735 10.5007 0.00124527C5.10918 0.00279081 0.659512 0.0129859 0.612506 0.0239132ZM0.612506 5.77216C0.227596 5.8621 -0.0248418 6.1955 0.00692307 6.57196C0.0294861 6.8395 0.177598 7.04758 0.43901 7.17884C0.534361 7.22673 0.639585 7.25167 0.746286 7.25167H10.4981H20.2716C20.3642 7.25167 20.4558 7.23205 20.5403 7.19408C21.0344 6.97209 21.1569 6.34271 20.7765 5.98062C20.7202 5.92709 20.6152 5.85562 20.5432 5.82183C20.4568 5.78135 20.3627 5.76034 20.2674 5.7603L10.555 5.75627C5.13365 5.75405 0.659512 5.76118 0.612506 5.77216ZM0.612506 11.5205C0.227539 11.6105 -0.0248418 11.9438 0.00692307 12.3203C0.0294861 12.5878 0.177598 12.7959 0.43901 12.9272C0.534361 12.9751 0.639585 13 0.746286 13H10.4981H20.2693C20.3635 13 20.4566 12.9804 20.5428 12.9424C20.7011 12.8728 20.8525 12.7336 20.9257 12.5906C21.0005 12.4445 21.0159 12.1128 20.9544 11.9746C20.8899 11.8297 20.7047 11.6471 20.5461 11.5721C20.4579 11.5303 20.3615 11.5087 20.2638 11.5086L10.555 11.5046C5.13365 11.5023 0.659512 11.5095 0.612506 11.5205Z"
                fill={pathFill}
            />
        </svg>
    )
}