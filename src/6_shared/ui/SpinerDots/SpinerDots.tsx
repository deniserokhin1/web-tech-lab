import styles from './SpinerDots.module.scss'

export const SpinerDots = (): JSX.Element => {
    return (
        <div className={styles.div_spiner}>
            <svg
                className="svg"
                width={100}
                height={50}
                viewBox={'0 0 1 25'}
            >
                <circle className={styles.spinner_qM83} cx="4" cy="12" r="3" />
                <circle
                    className={[styles.spinner_qM83, styles.spinner_oXPr].join(' ')}
                    cx="12"
                    cy="12"
                    r="3"
                />
                <circle
                    className={[styles.spinner_qM83, styles.spinner_ZTLf].join(' ')}
                    cx="20"
                    cy="12"
                    r="3"
                />
            </svg>
        </div>
    )
}
