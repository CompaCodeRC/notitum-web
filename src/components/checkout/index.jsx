import { useSelector, useDispatch } from "react-redux";
import { RiArrowLeftLine, RiSecurePaymentFill, Ri24HoursLine, RiLock2Fill, RiForward30Line, RiDeleteBin5Line } from "react-icons/ri";

import Modal from "@components/elements/layout/modal";
import CustomerStep from "./steps/customer";
import SelectPaymentStep from "./steps/select_payment";

import { set_step, set_modal, remove_item } from "@store/actions/checkout";

import styles from "./styles.module.scss";

export default function Checkout() {
    const dispatch = useDispatch();
    const checkout_state = useSelector(state => state.checkout);
    return (
        <Modal isOpen={checkout_state.modal}>
            <div className={styles.header}>
                {checkout_state.step === 0 && <div onClick={() => dispatch(set_modal(false))}><RiArrowLeftLine size={20}/> Elegir otro producto</div>}
                {checkout_state.step === 1 && <div onClick={() => dispatch(set_step(0))}><RiArrowLeftLine size={20}/> Cambiar correo</div>}
                {checkout_state.step === 2 && <div onClick={() => dispatch(set_step(1))}><RiArrowLeftLine size={20}/> Cambiar método de pago</div>}
            </div>
            <div className={styles.body}>
                <div className={styles.steps}>
                    {checkout_state.step === 0 && <CustomerStep />}
                    {checkout_state.step === 1 && <SelectPaymentStep />}
                </div>
                <div className={styles.summary}>
                    <div className={styles.details}>
                        <div className={styles.title}>Resumen del pedido</div>
                        <hr />
                        <div className={styles.receipt}>ID de Compra: 00000</div>
                    </div>
                    <div className={styles.products}>
                        {checkout_state.cart.map(item => (
                            <div key={item.id}>
                                <div className={styles.name}>
                                    {item.name} <br /> {item.plan}
                                    <div className={styles.remove}><RiDeleteBin5Line size={20} onClick={() => dispatch(remove_item(item.id))}/></div>
                                </div>
                                <b>$ {item.price.toFixed(2)}</b>
                            </div>
                        ))}
                        <div className={styles.total}>
                            <div>Total</div>
                            <b>$ {checkout_state?.cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</b>
                        </div>
                    </div>
                    <div className={styles.security}>
                        <div>
                            <div><RiSecurePaymentFill size={70} color="#52a54b"/></div>
                            <div>
                                <b>Pago Seguro</b>
                                <div className={styles.description}>Su compra está protegida por un cifrado SSL de 258 bits</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.items}>
                    <div>
                        <div><Ri24HoursLine size={30}/></div>
                        <div className={styles.description}>Soporte rápido 24/7</div>
                    </div>
                    <div>
                        <div><RiLock2Fill size={30}/></div>
                        <div className={styles.description}>Pago Seguro</div>
                    </div>
                    <div>
                        <div><RiForward30Line size={30}/></div>
                        <div className={styles.description}>30 Dias de garantía</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}