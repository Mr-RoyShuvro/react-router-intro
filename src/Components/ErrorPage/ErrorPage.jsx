import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!</h1>
            <p>Page Not Found...</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div>
                {
                    error.status === 404 && <div>
                        <p>Please go back home.</p>
                        <Link to="/"><button style={{ padding: " 5px", backgroundColor: "red" }}>Go Back Home</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;