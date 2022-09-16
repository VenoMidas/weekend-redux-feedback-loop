import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ProgressStepper from "../ProgressStepper/ProgressStepper";

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feeling);

    const handleChange = (event) => {
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <ProgressStepper stepProp={1} />
            <h1>How are you feeling today?</h1>
            <h3>Rate 1 through 5</h3>
            <h5>* Required *</h5>
            <button onClick={goBack} >Go Back</button>
            <input required type="number" value={feeling} onChange={handleChange} min='1' max='5' />
            <button disabled={feeling > 0 && feeling < 6 ? false : true} onClick={() => history.push('/understanding')} >Next - Understanding</button>
        </>
    );
};

export default Feeling;