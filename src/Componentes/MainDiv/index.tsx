// This is the MAIN-DIV COMPONENT that will be used in the APP.TSX file.
// Styling names are used to partially describe each part and/or element of the component.


import RicardoCard from "../RicardoCard"
import SelfCard from "../SelfCard"
import ThaisCard from "../ThaisCard"
import styles from "./styles.module.css"

export default function MainDiv() {
    return (
        <div className={styles.mainDiv}>
            <SelfCard />
            <div className={styles.subDiv}>
                <ThaisCard />
                <RicardoCard />
            </div>
        </div>
    )
}