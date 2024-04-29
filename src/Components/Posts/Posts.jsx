import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h3>Posts are here:{posts.length}</h3>
            <div className="users">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;