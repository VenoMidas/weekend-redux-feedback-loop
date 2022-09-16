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

function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();
    const support = useSelector(store => store.support);

    const handleChange = (event) => {
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <ProgressStepper stepProp={3} />
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
                    <Typography variant="h3" gutterBottom>How well are you being supported?</Typography>
                    <br />
                    <TextField
                        required
                        type="number"
                        value={support}
                        onChange={handleChange}
                        label="Required"
                        variant="standard"
                        error={support < 1 | support > 5 ? true : false}
                        helperText="Rate 1 through 5."
                        InputProps={{ inputProps: { min: 1, max: 5 } }}
                    />
                </CardContent>

                <CardActions disableSpacing>
                    <Button onClick={goBack} startIcon={<ArrowBackIcon />}>Go Back</Button>
                    <Button
                        disabled={support > 0 && support < 6 ? false : true}
                        onClick={() => history.push('/comments')}
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

export default Supported;