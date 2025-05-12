// This is the LIKE-BUTTON COMPONENT that will be used in the COMMENTS component to show the like button.
// Since the like factor is a boolean, you can only have either 1 or 0 likes.
// Styling and function names are used to partially describe each part and/or element of the component.


import style from "./styles.module.css"
import likeButton from "../../assets/like-button.png"
import { useState } from "react"

export default function LikeButton () {

    const [counter, setCounter] = useState(0)
    const [like, setLike] = useState(false)

    function handleClick() { 
        
        // Handle's click event by checking the current state of the like variable
        // If true, set's the counter to 0, removing your like
        // If false, set's the counter to 1, adding your like
        
        if (like) {
            setCounter(counter - 1)
        } else {
            setCounter(counter + 1)
        }
        setLike(!like)
    }

    return (
        <button className={style.likeButton} onClick={handleClick}>
            <img src={likeButton} alt="Like" />
            Like • {counter}
        </button>
    )
}
