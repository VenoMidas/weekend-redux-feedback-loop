import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();

    return (
        <>
            <button onClick={() => history.push('/feeling')} >Start Survey</button>
        </>

    );
};

export default Home;