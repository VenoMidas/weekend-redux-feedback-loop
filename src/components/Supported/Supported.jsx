import { Link } from "react-router-dom";

function Supported() {
    return (
        <>
            <h1>How well are you being supported?</h1>
            <label htmlFor="support">Rate 1-5 </label>
            <input required type="number" for='support' min='1' max='5' />
            <Link to='/comments'>
                <button>Next - comments</button>
            </Link>
        </>
    );
};

export default Supported;