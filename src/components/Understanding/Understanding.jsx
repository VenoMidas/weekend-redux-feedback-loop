import { Link } from "react-router-dom";

function Understanding() {
    return (
        <>
            <h1>This is the Understanding component</h1>
            <Link to='/supported'>
                <button>Next - supported</button>
            </Link>
        </>
    );
};

export default Understanding;