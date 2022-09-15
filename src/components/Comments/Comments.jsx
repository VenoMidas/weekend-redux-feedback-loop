import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const comments = useSelector(store => store.comments);

    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    };

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <h5>* Optional *</h5>
            <input type="text" value={comments} onChange={handleChange} />
            <button onClick={() => history.push('/review')} >Next - Review</button>
        </>
    );
};

export default Comments;