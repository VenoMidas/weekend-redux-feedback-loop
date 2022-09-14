import { Link } from "react-router-dom";

function Comments() {
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <label htmlFor="comments">Optional: </label>
            <input type="text" for='comments' />
            <Link to='/review'>
                <button>Next - Review</button>
            </Link>
        </>
    );
};

export default Comments;