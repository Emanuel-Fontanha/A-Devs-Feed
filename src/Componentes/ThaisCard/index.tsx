// This is the THAIS-CARD COMPONENT that will be used in the main page.
// Styling and function names are used to partially describe each part and/or element of the component.


import styles from "./styles.module.css"
import Thais from "../../assets/pup01.jpg"
import Comments from "../Comments"
import { useState, FormEvent, useRef } from "react"

export default function ThaisCard() {
    
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [commentText, setCommentText] = useState("")
    const [listComments, setListComments] = useState<string[]>([])
    // the listComments variable, at first, is not an empty array of ICommentary objects because the only property used in the comments is the text property, so it should start as an empty array of texts (strings)
    
    function createComment (text: string) {
        setListComments([text, ...listComments])
        setCommentText("")
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"
        }
    }

    function textAreaHeightBooster (e: FormEvent<HTMLTextAreaElement>) {

        // This function is used to increase the input's height according to the user's text height
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
                    <img src={Thais} alt="Thaís Gomes" className={styles.image}/>
                    <div className={styles.subOne}>
                        <h3 className={styles.title1}>Thaís Gomes</h3>
                        <h4 className={styles.title2}>Designer</h4>
                    </div>
                </div>
                <p className={styles.published}>Publicado há 1h</p>
            </div>

            <div className={styles.divTwo}>
                <p className={styles.text}>Lorem Ipsum</p>
                <p className={styles.text}>Dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. </p>
                <p className={styles.text}>Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
            </div>

            <div className={styles.divThree}>
                <h3 className={styles.title3}>Deixe seu feedback</h3>
                <textarea
                    className={styles.inputSpace}
                    placeholder="No que você está pensando?..."
                    ref = {textAreaRef}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)} // controls the text value
                    onInput={(e) => textAreaHeightBooster(e)} // controls the text area height
                />
                <button
                    className={styles.commentButton}
                    onClick={() => createComment(commentText)}>
                    Comentar
                </button>
            </div>

            <div>
                {
                    listComments.map((item, index) => (

                        // Dynamic rendering of each object (a comment) in the listComments array
                        <Comments
                            key={index}
                            name="Dr. Bananas"
                            photo="src/assets/commentAny.jpg"
                            commentText= {item}
                            deleteComment={() => commentEraser(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}