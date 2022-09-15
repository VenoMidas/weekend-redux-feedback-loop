import { useHistory } from "react-router-dom";

function Understanding() {
    const history = useHistory();

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <label htmlFor="understanding">Rate 1-5 </label>
            <input required type="number" for='understanding' min='1' max='5' />
            <button onClick={() => history.push('/supported')} >Next - supported</button>
        </>
    );
};

export default Understanding;