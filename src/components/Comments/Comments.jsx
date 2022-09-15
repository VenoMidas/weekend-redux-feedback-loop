import { useHistory } from "react-router-dom";

function Comments() {
    const history = useHistory();

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <label htmlFor="comments">Optional: </label>
            <input type="text" for='comments' />
            <button onClick={() => history.push('/review')} >Next - Review</button>
        </>
    );
};

export default Comments;