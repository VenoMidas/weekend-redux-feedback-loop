import { Link } from "react-router-dom";

function Feeling() {
    return (
        <>
            <h1>This is the Feeling component</h1>
            <Link to='/understanding'>
                <button>Next - Understanding</button>
            </Link>
        </>
    );
};

export default Feeling;