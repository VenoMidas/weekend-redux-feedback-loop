import { Link } from "react-router-dom";

function Review() {
    return (
        <>
        <h1>This is the Review component</h1>
        <Link to='/'>
            <button>Submit - home</button>
        </Link>
        </>
    );
};

export default Review;