import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store)

    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feedback.feeling,
                understanding: feedback.understanding,
                support: feedback.support,
                comments: feedback.comments
            }
        }).then((response) => {
            history.push('/success')
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        });
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <ProgressStepper stepProp={5} />
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
                    <Typography variant="h3" gutterBottom>Summary:</Typography>
                    <Typography variant="body1" gutterBottom>Feeling rating : {feedback.feeling}</Typography>
                    <Typography variant="body1" gutterBottom>Understanding Rating: {feedback.understanding}</Typography>
                    <Typography variant="body1" gutterBottom>Supported Rating: {feedback.support}</Typography>
                    <Typography variant="body1" gutterBottom>Comments: {feedback.comments}</Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <Button onClick={goBack} startIcon={<ArrowBackIcon />}>Go Back</Button>
                    <Button
                        onClick={handleSubmit}
                        sx={{ ml: 'auto' }}
                        color='success'
                        endIcon={<ArrowForwardIcon />}
                    >
                        Submit
                    </Button>
                </CardActions>

            </Card>
        </>
    );
};

export default Review;