
export default function AddPostButton({AddPost}){
    return (
        <div className="AddPostButton">
            <button onClick={() => AddPost()}>Добавить POST</button>
        </div>
    )
}