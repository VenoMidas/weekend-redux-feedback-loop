import { useHistory } from "react-router-dom";

function Supported() {
    const history = useHistory();

    return (
        <>
            <h1>How well are you being supported?</h1>
            <label htmlFor="support">Rate 1-5 </label>
            <input required type="number" for='support' min='1' max='5' />
            <button onClick={() => history.push('/comments')} >Next - comments</button>
        </>
    );
};

export default Supported;