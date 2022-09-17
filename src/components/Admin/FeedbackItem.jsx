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
import Checkbox from '@mui/material/Checkbox';

const FeedbackItem = ({ feedback, deleteFeedback, flagItem }) => {
    // setters and getters
    const [open, setOpen] = useState(false);

    // setOpen to true on click to display dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    // setOpen to false on click to hide dialog
    const handleClose = () => {
        setOpen(false);
    };

    // displays feedback item in table rows/cells
    // includes a dialog box that shows/hide on button click
    return (
        <>
            <TableRow>
                <TableCell>
                    <Checkbox checked={feedback.flagged} onClick={(event) => flagItem(feedback.id, event.target.checked)} />
                </TableCell>
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