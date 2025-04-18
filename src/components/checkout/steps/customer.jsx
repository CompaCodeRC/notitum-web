import { useDispatch } from "react-redux";
import { toast } from "react-stacked-toast";

import Input from "@components/elements/field/input";
import Button from "@components/elements/button";
import { set_step } from "@store/actions/checkout";

import styles from "./styles.module.scss";

export default function CustomerStep() {
    const dispatch = useDispatch();

    const on_submit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!email) return toast.warning("El correo no puede estar vacío");
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return toast.warning("El correo no es válido");
        dispatch(set_step(1));
    }
    return (
        <form className={styles.container} onSubmit={on_submit}>
            <div className={styles.title}>Ingresa tu correo</div>
            <div style={{ width: "100%" }}>
                <Input id="email" placeholder="Correo" />
            </div>
            <div className={styles.note}>
                Aquí se enviara todos los detalles de acceso a tu servicio
            </div>
            <div>
                <Button variant="primary" size="md" type="submit">Continuar</Button>
            </div>
        </form>
    )
}