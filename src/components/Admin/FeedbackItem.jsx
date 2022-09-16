
const FeedbackItem = ({ feedback }) => {

    return (
        <>
            <tr>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
            </tr>
        </>
    );
};

export default FeedbackItem;