import React from "react";  
import { useSelector } from 'react-redux';
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId)|| { name: 'Unknown User' };
    return (
        <span>
            <p>by  {author.name}</p>
        </span>
    );
}
export default PostAuthor;