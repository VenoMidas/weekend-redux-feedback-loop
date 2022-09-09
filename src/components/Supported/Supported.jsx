import { Link } from "react-router-dom";

function Supported() {
    return (
        <>
            <h1>This is the Supported component</h1>
            <Link to='/comments'>
                <button>Next - comments</button>
            </Link>
        </>
    );
};

export default Supported;