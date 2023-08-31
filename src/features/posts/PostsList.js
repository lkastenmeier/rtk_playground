import React from "react";
import { useSelector } from 'react-redux';
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section>
            <h4>Posts</h4>
            {orderedPosts.map((post) => (
                <article className="post-excerpt" key={post.id}>
                    <h6>{post.title}</h6>
                    <p>{post.content.substring(0, 100)}</p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <ReactionButtons post={post} />
                </article>
            ))}
        </section>
    );
}
export default PostsList;