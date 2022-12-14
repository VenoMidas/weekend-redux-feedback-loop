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

function Comments() {
    // use history for navigation
    const history = useHistory();
    // dispatch for redux
    const dispatch = useDispatch();
    // set variable for comments from redux store
    const comments = useSelector(store => store.comments);

    // dispatch payload to set_comments
    const handleChange = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    };

    // for "go back" navigation
    const goBack = () => {
        history.goBack();
    };

    // displays the Progress stepper and comment form and nav buttons
    return (
        <>
            <ProgressStepper stepProp={4} />
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
                    <Typography variant="h3" gutterBottom>Any comments you want to leave?</Typography>
                    <br />
                    <TextField
                        sx={{ width: 1 / 2 }}
                        type="text"
                        value={comments}
                        onChange={handleChange}
                        label="Optional"
                        variant="filled"
                        multiline
                        rows={4}
                    />
                </CardContent>

                <CardActions disableSpacing>
                    <Button onClick={goBack} startIcon={<ArrowBackIcon />}>Go Back</Button>
                    <Button
                        onClick={() => history.push('/step/review')}
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

export default Comments;