import { type FC } from 'react'
import styles from './SpinerDots.module.scss'
import { classNames } from '6_shared/lib'

export enum SpinerDotsTheme {
    DEFAULT = 'default',
    INVERT = 'invert',
}

interface SpinerDotsProps {
    theme?: SpinerDotsTheme
}

export const SpinerDots: FC<SpinerDotsProps> = (props): JSX.Element => {
    const { theme = SpinerDotsTheme.DEFAULT } = props
    return (
        <div className={styles.div_spiner}>
            <svg className="svg" width={50} height={50} viewBox={'0 0 23 24'}>
                <circle
                    className={classNames(styles.spinner_qM83, {}, [styles[theme]])}
                    cx="4"
                    cy="12"
                    r="3"
                />
                <circle
                    className={[
                        styles.spinner_qM83,
                        styles.spinner_oXPr,
                        styles[theme],
                    ].join(' ')}
                    cx="12"
                    cy="12"
                    r="3"
                />
                <circle
                    className={[
                        styles.spinner_qM83,
                        styles.spinner_ZTLf,
                        styles[theme],
                    ].join(' ')}
                    cx="20"
                    cy="12"
                    r="3"
                />
            </svg>
        </div>
    )
}
