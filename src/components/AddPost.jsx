import { useContext } from "react"
import { Context } from "../Context/Context"

export default function AddPostButton(){
    const { AddPost } = useContext(Context)
    return (
        <div className="AddPostButton">
            <button onClick={() => AddPost()}>Добавить POST</button>
        </div>
    )
}