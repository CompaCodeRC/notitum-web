import Loader from '@components/animations/loader';

import styles from './styles.module.scss';

export default function Button({ children, variant, size, onLoading, disabled, ...restProps }) {
    return (
        <>
            <button className={`${styles.button} ${onLoading ? styles.loading : ""} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`} {...restProps}>
                {onLoading && <div className={styles.spinner}><Loader/></div>}
                <span className={styles.text}>{children}</span>
            </button>
        </>
    )
}

// Variants: primary, success, danger, warning, info, dark