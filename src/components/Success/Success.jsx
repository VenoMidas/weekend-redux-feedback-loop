import { useHistory } from "react-router-dom";

function Success() {
    const history = useHistory();

    return (
        <>
            <h1>Thank you for your feedback!</h1>
            <h3>Your feedback has been submited successfully!</h3>
            <br />
            <button onClick={() => history.push('/feeling')} >New Survey</button>
        </>

    );
};

export default Success;