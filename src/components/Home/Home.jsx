import { Link } from "react-router-dom";

function Home() {
    return (
        <Link to='/feeling'>
            <button>Start Survey</button>
        </Link>
    );
};

export default Home;