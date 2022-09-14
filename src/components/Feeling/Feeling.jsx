import { Link } from "react-router-dom";

function Feeling() {
    return (
        <>
            <h1>How are you feeling today?</h1>
            <label htmlFor="feeling">Rate 1-5 </label>
            <input required type="number" for="feeling" min='1' max='5' />
            <Link to='/understanding'>
                <button>Next - Understanding</button>
            </Link>
        </>
    );
};

export default Feeling;