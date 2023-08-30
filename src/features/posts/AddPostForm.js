import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


const AddPostForm = () => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavedPostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
        }
        setTitle('');
        setContent('');
        setUserId('');
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);


    return (
        <section>
            <h6>Add a New Post</h6>
            <form>
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavedPostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm;