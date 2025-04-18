import style from "./styles.module.css"
import likeButton from "../../assets/like-button.png"
import { useState } from "react"

export default function LikeButton () {

    const [counter, setCounter] = useState(0)
    const [like, setLike] = useState(false)

    function handleClick() {
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
