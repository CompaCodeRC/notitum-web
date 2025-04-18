import { RiHome9Fill, RiShoppingBag4Fill, RiNotificationFill, RiPencilFill, RiUser3Fill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

import Input from "@components/elements/field/input";
import Search from "@components/search";
import Container from "@components/elements/layout/container";
import { Flex, Row } from "@components/elements/layout/flex";

import styles from "./styles.module.scss";

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;

    const menu = [
        {
            name: "Inicio",
            icon: RiHome9Fill,
            href: "/",
        },
        {
            name: "Servicios",
            icon: RiShoppingBag4Fill,
            href: "/services",
        },
    ]

    return (
        <div className={styles.nav}>
            <Container>
                <Flex align="center">
                    <Row col={2}>
                        <div className={styles.logo}>
                            <img src="/general/logo.png" alt="Logo" />
                        </div>
                    </Row>
                    <Row col={5}>
                        <div className={styles.search}>
                            <Search />
                        </div>
                    </Row>
                    <Row col={3}>
                        <div className={styles.options}>
                            <div className={styles.item}>
                                <img src="/lang/es.webp" alt="ES" height={14} />
                            </div>
                            <div className={styles.item}>
                                <RiPencilFill size={18} />
                            </div>
                            <div className={styles.item}>
                                <RiNotificationFill size={18} />
                            </div>
                            <div className={styles.item}>
                                <RiUser3Fill size={18} />
                            </div>
                        </div>
                    </Row>
                </Flex>
            </Container>
        </div>
    );
}