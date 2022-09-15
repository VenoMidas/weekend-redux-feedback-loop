import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store)

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feedback.feeling,
                understanding: feedback.understanding,
                support: feedback.support,
                comments: feedback.comments
            }
        }).then((response) => {
            history.push('/success')
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <h1>Summary:</h1>
            <h3>Feeling rating : {feedback.feeling}</h3>
            <h3>Understanding Rating: {feedback.understanding}</h3>
            <h3>Supported Rating: {feedback.support}</h3>
            <h3>Comments: {feedback.comments}</h3>
            <button onClick={goBack} >Go Back</button>
            <button onClick={handleSubmit} >Submit</button>
        </>
    );
};

export default Review;