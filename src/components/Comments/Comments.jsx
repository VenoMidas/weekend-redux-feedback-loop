import { Link } from "react-router-dom";

function Comments() {
    return (
        <>
            <h1>This is the Comments component</h1>
            <Link to='/review'>
                <button>Next - Review</button>
            </Link>
        </>
    );
};

export default Comments;