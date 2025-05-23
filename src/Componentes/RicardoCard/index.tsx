// This is the RICARDO-CARD COMPONENT that will be used in the main page.
// Styling and function names are used to partially describe each part and/or element of the component.


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

        // the listComments variable starts with an array of 3 default objects (comments)

        {
            name: "Felyppe Nunes",
            photo: "src/assets/pup03.jpg",
            textComment: "Ex laboriosam dolorem non tempore earum et voluptatem suscipit",
        },
        {
            name: "Mellany Carter",
            photo: "src/assets/pup04.jpg",
            textComment: "Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
        },
        {
            name: "Jessy Logan",
            photo: "src/assets/pup05.jpg",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        }
    ])
    
    function createComment (text: string) {

        // Creates a new comment by:
        // 1. Attributing the parameters to an object
        // 2. Adding it to the beggining of the listComments array

        const aux: ICommentary = {
            name: "Dr. Bananas",
            photo: "src/assets/commentAny.jpg",
            textComment: text,
        }
        setListComments([aux, ...listComments]) // Spread operator used to put the object at the start of the listComments array
        setCommentText("")
        if (textAreaRef.current) { // If the textAreaRef is not null, resets the height of the text area to default
            textAreaRef.current.style.height = "auto" 
        }
    }

    function textAreaHeightBooster (e: FormEvent<HTMLTextAreaElement>) {

        // Does so the input's height is increased according to the user's text height
        const aux = e.currentTarget
        aux.style.height = "auto"
        aux.style.height = aux.scrollHeight + "px" // Turns the current height of the text area into the new height
        // The "+ px" converts the measuring unit in the scrollHeight to pixels
    }

    function commentEraser (index: number) {

        // Erases a comment by filtering the listComments array and removing the selected comment
        // The index parameter is the index of the comment to be removed
        setListComments(
            listComments.filter((_, item) => item !== index) 
        )
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
                    onClick={() => createComment(commentText)}>
                    Comentar
                </button>
            </div>

            <div className={styles.divFour}>
                {
                    listComments.map((aux, index) => (

                        // Dynamic rendering of each object (a comment) in the listComments array
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