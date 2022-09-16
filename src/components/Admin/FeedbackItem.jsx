import { useState } from 'react';
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FeedbackItem = ({ feedback, deleteFeedback }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <TableRow>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell align="right">
                    <DeleteForeverIcon
                        sx={{
                            cursor: "pointer",
                        }}
                        color="error"
                        onClick={handleClickOpen}
                    />
                </TableCell>
            </TableRow>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    {"Delete this item?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This will permanantly delete this feedback item.
                        <br />
                        This cannot be undone!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Go Back</Button>
                    <Button
                        color="error"
                        onClick={() => deleteFeedback(feedback.id)}
                        autoFocus
                    >
                        DELETE
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FeedbackItem;