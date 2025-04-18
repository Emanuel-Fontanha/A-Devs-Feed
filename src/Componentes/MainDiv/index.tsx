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