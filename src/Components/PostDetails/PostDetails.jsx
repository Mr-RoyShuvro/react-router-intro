import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body, title} = post;
    const navigate = useNavigate();
    // const params = useParams();
    const {postId} = useParams();
    console.log(postId);
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>{id}</h3>
            <h4>Title: {title}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back Home</button>
        </div>
    );
};

export default PostDetails;