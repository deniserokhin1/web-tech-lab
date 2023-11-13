import { useState, type FC, useEffect } from 'react'

import { classNames } from '@/6_shared/lib'

import styles from './SpinerDots.module.scss'

export enum SpinerDotsTheme {
    DEFAULT = 'default',
    INVERT = 'invert',
}

interface SpinerDotsProps {
    theme?: SpinerDotsTheme
}

export const SpinerDots: FC<SpinerDotsProps> = (props): JSX.Element => {
    const { theme = SpinerDotsTheme.DEFAULT } = props
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
    }, [])

    const mods = {
        [styles.show]: show,
    }

    return (
        <div className={classNames(styles.div_spiner, mods)}>
            <svg className="svg" width={50} height={50} viewBox={'0 0 23 24'}>
                <circle
                    className={classNames(styles.spinner_qM83, {}, [styles[theme]])}
                    cx="4"
                    cy="12"
                    r="3"
                />
                <circle
                    className={[styles.spinner_qM83, styles.spinner_oXPr, styles[theme]].join(' ')}
                    cx="12"
                    cy="12"
                    r="3"
                />
                <circle
                    className={[styles.spinner_qM83, styles.spinner_ZTLf, styles[theme]].join(' ')}
                    cx="20"
                    cy="12"
                    r="3"
                />
            </svg>

            {/* <svg className={classNames(styles.spinner, {}, [styles[theme]])} viewBox="0 0 50 50">
                <circle
                    className={styles.path}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg> */}
        </div>
    )
}
