import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StartIcon from '@mui/icons-material/Start';

function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch({ type: 'CLEAR_ALL' });
        history.push('/feeling');
    };

    return (
        <>
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
                    <Typography variant="h3" gutterBottom>Thank you for your feedback!</Typography>
                    <Typography variant="body1" gutterBottom>Your feedback has been submited successfully!</Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <Button
                        onClick={handleButton}
                        variant="outlined"
                        color="success"
                        size="large"
                        sx={{ ml: 'auto', mr: 'auto' }}
                        endIcon={<StartIcon />}
                    >
                        New Survey
                    </Button>
                </CardActions>

            </Card>
        </>
    );
};

export default Success;