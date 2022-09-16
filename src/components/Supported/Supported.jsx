import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ProgressStepper from "../ProgressStepper/ProgressStepper";

function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();
    const support = useSelector(store => store.support);

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <ProgressStepper stepProp={3} />
            <h1>How well are you being supported?</h1>
            <h3>Rate 1 through 5</h3>
            <h5>* Required *</h5>
            <button onClick={goBack} >Go Back</button>
            <input required type="number" value={support} onChange={handleChange} min='1' max='5' />
            <button disabled={support > 0 && support < 6 ? false : true} onClick={() => history.push('/comments')} >Next - comments</button>
        </>
    );
};

export default Supported;