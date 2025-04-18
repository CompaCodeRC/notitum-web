import CardService from "./elements/card";

import styles from "./styles.module.scss";

export default function ServicesView() {
    const data = [
        {
            id: "netflix",
            name: "Netflix",
            plan: "Mensual",
            price: 1.99,
            img: "/services/netflix.png",
            color: "#ea3427"
        },
        {
            id: "prime_video",
            name: "Prime Video",
            plan: "Anual",
            price: 3,
            img: "/services/prime_video.png",
            color: "#4da9df"
        },
        {
            id: "youtube",
            name: "Youtube",
            plan: "Anual",
            price: 2,
            img: "/services/youtube.png",
            color: "#ea3323"
        },
        {
            id: "spotify",
            name: "Spotify",
            plan: "Anual",
            price: 1,
            img: "/services/spotify.png",
            color: "#62d567"
        },
        {
            id: "crunchyroll",
            name: "Crunchyroll",
            plan: "Anual",
            price: 3,
            img: "/services/crunchyroll.png",
            color: "#e99040"
        }
    ]
    return (
        <div className={styles.services}>
            {data.map(item => (
                <CardService key={item.id} {...item} />
            ))}
        </div>
    )
}