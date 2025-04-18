import styles from "./styles.module.css"
import selfPicture from "../../assets/me-picture.jpg"

export default function SelfCard() {
    return (
        <div className={styles.div}>
            <img src={selfPicture} alt="Foto minha" className={styles.image}/>
            <h1 className={styles.title1}>Emanuel Fontanha</h1>
            <h2 className={styles.title2}>Dev Front-end</h2>
        </div>
    )
}