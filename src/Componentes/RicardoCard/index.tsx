import styles from "./styles.module.css"
import Ricardo from "../../assets/pup02.jpg"
import Comments from "../Comments"
import { FormEvent, useRef, useState } from "react"

interface ICommentary {
    name: string,
    photo: string,
    textComment: string,
}

export default function RicardoCard() {
    
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [commentText, setCommentText] = useState("")
    const [listComments, setListComments] = useState<ICommentary[]>([
        {
            name: "Felyppe Nunes",
            photo: "src/assets/pup03.jpg",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        },
        {
            name: "Mellany Carter",
            photo: "src/assets/pup04.jpg",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        },
        {
            name: "Jessy Logan",
            photo: "src/assets/pup05.jpg",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        }
    ])
    
    function CreateComment (text: string) {
        const aux: ICommentary = {
            name: "Usuário",
            photo: "src/assets/commentAny.jpg",
            textComment: text,
        }
        setListComments([aux, ...listComments])
        setCommentText("")
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"
        }
    }

    function textAreaHeightBooster (e: FormEvent<HTMLTextAreaElement>) {
        const aux = e.currentTarget
        aux.style.height = "auto"
        aux.style.height = aux.scrollHeight + "px"
    }

    function commentEraser (index: number) {
        setListComments(listComments.filter((_, item) => item !== index))
    }

    return (
        <div className={styles.card}>
            <div className={styles.divOne}>
                <div className={styles.info}>
                    <img src={Ricardo} alt="Ricardo Siqueira" className={styles.image}/>
                    <div className={styles.subOne}>
                        <h3 className={styles.title1}>Ricardo Siqueira</h3>
                        <h4 className={styles.title2}>Dev Back-end</h4>
                    </div>
                </div>
                <p className={styles.published}>Publicado há 1h</p>
            </div>

            <div className={styles.divTwo}>
                <p className={styles.text}>Lorem ipsum</p>
                <p className={styles.text}>dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. </p>
                <p className={styles.text}>Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
            </div>

            <div className={styles.divThree}>
                <h3 className={styles.title3}>Deixe seu feedback</h3>
                <textarea
                    className={styles.inputSpace}
                    placeholder="No que você está pensando?..."
                    ref = {textAreaRef}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onInput={(e) => textAreaHeightBooster(e)}
                />
                <button
                    className={styles.commentButton}
                    onClick={() => CreateComment(commentText)}>
                    Comentar
                </button>
            </div>

            <div className={styles.divFour}>
                {
                    listComments.map((aux, index) => (
                        <Comments
                            key={index}
                            name= {aux.name} 
                            photo= {aux.photo} 
                            commentText= {aux.textComment}
                            deleteComment={() => commentEraser(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}