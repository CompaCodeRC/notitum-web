import { RiSearch2Fill } from "react-icons/ri";

import styles from "./styles.module.scss";

export default function Search() {
    return (
        <div className={styles.input}>
            <RiSearch2Fill size={20}/>
            <input type="text" placeholder={"Buscar..."} />
        </div>
    );
}