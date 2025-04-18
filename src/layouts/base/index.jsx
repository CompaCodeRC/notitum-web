import Navbar from "./navbar";
import Checkout from "@components/checkout";

import styles from "./styles.module.scss";

export default function BaseLayout({ children }) {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <div className={styles.content}>
                {children}
            </div>
        </>
    );
}