import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import StartIcon from '@mui/icons-material/Start';

function Home() {
    // use history for navigation
    const history = useHistory();

    // display a button that starts survey
    return (
        <>
            <Button
                variant="outlined"
                color="success"
                size="large"
                endIcon={<StartIcon />}
                onClick={() => history.push('/step/feeling')}
            >
                Start Survey
            </Button>
        </>

    );
};

export default Home;