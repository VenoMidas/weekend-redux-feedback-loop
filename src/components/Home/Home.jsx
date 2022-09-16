import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import StartIcon from '@mui/icons-material/Start';

function Home() {
    const history = useHistory();

    return (
        <>
            <Button
                variant="outlined"
                color="success"
                size="large"
                endIcon={<StartIcon />}
                onClick={() => history.push('/feeling')}
            >
                Start Survey
            </Button>
        </>

    );
};

export default Home;