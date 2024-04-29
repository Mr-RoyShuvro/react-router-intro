import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: "2px solid red",
        borderRadius: "20px",
        padding: "10px"
    }
    const showDetails = {
        marginLeft : "10px",
        backgroundColor : "maroon"
    }
    const handleShowDetails =() => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <h3>Title:{title}</h3>
            {/* <p><small>Details: {body}</small></p> */}
            <Link to={`/post/${id}`}>Details</Link>
            <button onClick ={handleShowDetails} style={showDetails}>Click to Show Details</button>
        </div>
    );
};

export default Post;