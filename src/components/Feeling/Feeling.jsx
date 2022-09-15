import { useHistory } from "react-router-dom";

function Feeling() {
    const history = useHistory();

    return (
        <>
            <h1>How are you feeling today?</h1>
            <label htmlFor="feeling">Rate 1-5 </label>
            <input required type="number" for="feeling" min='1' max='5' />
            <button onClick={() => history.push('/understanding')} >Next - Understanding</button>
        </>
    );
};

export default Feeling;