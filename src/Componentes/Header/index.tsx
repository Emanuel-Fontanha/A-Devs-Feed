// This is the HEADER COMPONENT that will be used in the APP.TSX file.
// Styling names are used to partially describe each part and/or element of the component.


import styles from "./styles.module.css"

export default function Header () {
    return (
        <header className={styles.heading}>
            <h1 className={styles.title}>A Dev's Feed</h1>
        </header>
    )
}