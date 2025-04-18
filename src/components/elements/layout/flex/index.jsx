import styles from "./styles.module.scss";

export const Flex = ({ children, align, justify, gap }) => {
    return (
        <div className={styles.flex} style={{alignItems: align, gap: gap+'rem', justifyContent: justify}}>
            {children}
        </div>
    );
}

export const Row = ({ children, col }) => {
    return (
        <div className={styles.row} style={{flex: ((col || 5) * 10) + '%', width: (col || 5) * 10 + '%'}}>
            {children}
        </div>
    );
}