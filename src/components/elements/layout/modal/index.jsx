import ReactModal from 'react-modal';
import { LuMinimize2 } from "react-icons/lu";

import styles from "./styles.module.scss";

export default function Modal({ children, isOpen, onClose, title }) {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose}>
            <div className={styles.modal}>
                {(title || onClose) && <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.close} onClick={onClose}>
                        <LuMinimize2/>
                    </div>
                </div>}
                {children}
            </div>
        </ReactModal>
    )
}