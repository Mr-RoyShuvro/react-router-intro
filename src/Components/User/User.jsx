import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: "2px solid maroon",
        borderRadius: "20px",
        padding: "10px"
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button>Click</button>
            </Link>
        </div>
    );
};

export default User;