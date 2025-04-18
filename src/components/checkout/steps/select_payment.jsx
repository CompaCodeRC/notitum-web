import { useDispatch, useSelector } from "react-redux";

import Input from "@components/elements/field/input";
import Button from "@components/elements/button";
import { set_step, set_payment } from "@store/actions/checkout";

import styles from "./styles.module.scss";

export default function SelectPaymentStep() {
    const dispatch = useDispatch();
    const checkout_state = useSelector(state => state.checkout);

    const method_payments = [
        {
            id: "credit_card",
            name: "Tarjetas",
            img: "/method_payments/credit_card.png",
        },
        {
            id: "paypal",
            name: "Paypal",
            img: "/method_payments/paypal.png",
        },
        {
            id: "binance",
            name: "Binance",
            img: "/method_payments/binance.png",
        },
        {
            id: "yape",
            name: "Yape",
            img: "/method_payments/yape.webp",
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.title}>Elige tu método de pago</div>
            <div className={styles.method_payments}>
                {method_payments.map(method => (
                    <div className={`${styles.item} ${checkout_state.payment.method === method.id ? styles.active : ""}`} onClick={() => dispatch(set_payment({ method: method.id }))}>
                        <div>{method.name}</div>
                        <div className={styles.image}><img src={method.img} alt={method.name} /></div>
                    </div>
                ))}
            </div>
            <div>
                <Button variant="primary" size="md" onClick={() => dispatch(set_step(1))}>Continuar</Button>
            </div>
        </div>
    )
}