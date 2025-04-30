// This is the SELF-CARD COMPONENT that will be used in the main page to show my informations.
// Styling names are used to partially describe each part and/or element of the component.


import styles from "./styles.module.css"
import selfPicture from "../../assets/me-picture.jpg"

export default function SelfCard() {
    return (
        <div className={styles.div}>
            <img src={selfPicture} alt="Foto minha" className={styles.image}/>
            <h1 className={styles.name}>Emanuel Fontanha</h1>
            <h2 className={styles.title1}>Dev Front-end</h2>
        </div>
    )
}