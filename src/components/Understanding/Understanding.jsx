import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Understanding() {
    // use history for navigation
    const history = useHistory();
    // dispatch for redux
    const dispatch = useDispatch();
    // set variable for understanding from redux store
    const understanding = useSelector(store => store.understanding);

    // dispatch payload to set_understanding
    const handleChange = (event) => {
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    };

    // for "go back" navigation
    const goBack = () => {
        history.goBack();
    };

    // displays the Progress stepper and understanding form and nav buttons
    return (
        <>
            <ProgressStepper stepProp={2} />
            <Card
                elevation={6}
                sx={{
                    width: {
                        xs: '100%',
                        sm: '75%',
                        md: '60%',
                        lg: '60%',
                        xl: '60%',
                    },
                    ml: 'auto',
                    mr: 'auto',
                    mt: 5,
                }}>
                <CardContent>
                    <Typography variant="h3" gutterBottom>How well are you understanding the content?</Typography>
                    <br />
                    <TextField
                        sx={{ width: 1 / 2 }}
                        required
                        type="number"
                        value={understanding}
                        onChange={handleChange}
                        label="Required"
                        variant="standard"
                        error={understanding < 1 | understanding > 5 ? true : false}
                        helperText="Rate 1 through 5."
                        InputProps={{ inputProps: { min: 1, max: 5 } }}
                    />
                </CardContent>

                <CardActions disableSpacing>
                    <Button onClick={goBack} startIcon={<ArrowBackIcon />}>Go Back</Button>
                    <Button
                        disabled={understanding > 0 && understanding < 6 ? false : true}
                        onClick={() => history.push('/step/supported')}
                        sx={{ ml: 'auto' }}
                        color='success'
                        endIcon={<ArrowForwardIcon />}
                    >
                        Next
                    </Button>
                </CardActions>

            </Card>
        </>
    );
};

export default Understanding;