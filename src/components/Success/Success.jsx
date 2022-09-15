import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch({ type: 'CLEAR_ALL' });
        history.push('/feeling');
    };

    return (
        <>
            <h1>Thank you for your feedback!</h1>
            <h3>Your feedback has been submited successfully!</h3>
            <br />
            <button onClick={handleButton} >New Survey</button>
        </>

    );
};

export default Success;