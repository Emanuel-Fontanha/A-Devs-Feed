import styles from "./styles.module.css"

export default function Header () {
    return (
        <header className={styles.heading}>
            <h1 className={styles.title}>A Dev's Feed</h1>
        </header>
    )
}