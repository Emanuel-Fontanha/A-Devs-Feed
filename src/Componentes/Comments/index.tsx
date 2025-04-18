import styles from "./styles.module.css"
import deleteButton from "../../assets/delete-button.png"
import LikeButton from "../LikeButton"

interface ICommentary {
    name: string;
    photo: string;
    commentText: string;

    deleteComment: () => void
}

export default function Comments ({name, photo, commentText, deleteComment}: ICommentary) {
    
    return (
        <div className={styles.container}>
            <img className={styles.profilePic} src={photo} alt="Profile Picture" />

            <div className={styles.subContainer}>
                <div className={styles.comment}>
                    <div className={styles.infoDiv}>
                        <div className={styles.info}>
                            <h4 className={styles.title4}>{name}</h4>
                            <p className={styles.published}>Há cerca de 45min</p>
                        </div>
                        <button 
                            className={styles.deleteButton}
                            onClick={() => deleteComment()}>
                            <img src={deleteButton} alt="Delete"/>
                        </button>

                    </div>
                    <p className={styles.text}>{commentText}</p>

                </div>
                <LikeButton/>
            </div>
        </div>
    )
}