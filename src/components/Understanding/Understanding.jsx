import { Link } from "react-router-dom";

function Understanding() {
    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <label htmlFor="understanding">Rate 1-5 </label>
            <input required type="number" for='understanding' min='1' max='5' />
            <Link to='/supported'>
                <button>Next - supported</button>
            </Link>
        </>
    );
};

export default Understanding;