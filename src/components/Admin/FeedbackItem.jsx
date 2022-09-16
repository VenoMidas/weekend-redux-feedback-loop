
const FeedbackItem = ({ feedback }) => {

    return (
        <>
            <li>
                <div>Feeling: {feedback.feeling}</div>
                <div>Understanding: {feedback.understanding}</div>
                <div>Support: {feedback.support}</div>
                <div>Comments: {feedback.comments}</div>
            </li>
        </>
    );
};

export default FeedbackItem;