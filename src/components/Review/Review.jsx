import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store)

    return (
        <>
            <h1>Summary:</h1>
            <h3>Feeling rating : {feedback.feeling}</h3>
            <h3>Understanding Rating: {feedback.understanding}</h3>
            <h3>Supported Rating: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <button onClick={() => history.push('/')} >Submit - home</button>
        </>
    );
};

export default Review;