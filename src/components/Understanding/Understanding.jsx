import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();
    const understanding = useSelector(store => store.understanding);

    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <h3>Rate 1 through 5</h3>
            <h5>* Required *</h5>
            <input required type="number" value={understanding} onChange={handleChange} min='1' max='5' />
            <button onClick={() => history.push('/supported')} >Next - supported</button>
        </>
    );
};

export default Understanding;