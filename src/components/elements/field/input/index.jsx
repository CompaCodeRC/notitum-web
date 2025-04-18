import styles from "./styles.module.scss";

export default function Input({ id, placeholder, ref }) {
    return (
        <div className={styles.input}>
            <input id={id} name={id} type="text" placeholder={placeholder} ref={ref}/>
        </div>
    );
}