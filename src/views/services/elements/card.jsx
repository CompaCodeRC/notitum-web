import { useDispatch } from "react-redux";

import { add_item, set_modal } from "@store/actions/checkout";

import styles from "./styles.module.scss";

export default function CardService({ id, name, plan, price, img, color }) {
    const dispatch = useDispatch();

    const on_click = () => {
        dispatch(add_item({
            id: id,
            name: name,
            plan: plan,
            price: price,
            img: img,
            color: color
        }))
        dispatch(set_modal(true))
    }
    return (
        <div className={styles.item} style={{ backgroundColor: (color+"47" || "#ea342747"), borderColor: color || "#ea3427" }} onClick={on_click}>
            <div className={styles.header}>
                <div className={styles.name}>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.description}>
                        {plan}
                    </div>
                </div>
                <div className={styles.price}>
                    <div className={styles.currency}>
                        $
                    </div>
                    <div className={styles.amount}>
                        {price.toFixed(2)}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.image}>
                    <img src={img || "/general/gambo_logo.png"} alt="gambo"/>
                </div>
            </div>
        </div>
    )
}