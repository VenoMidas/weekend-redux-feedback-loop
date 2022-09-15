import { useHistory } from "react-router-dom";

function Review() {
    const history = useHistory();

    return (
        <>
            <h1>This is the Review component</h1>
            <button onClick={() => history.push('/')} >Submit - home</button>
        </>
    );
};

export default Review;