import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const FeedbackItem = ({ feedback, deleteFeedback }) => {

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
                        onClick={() => deleteFeedback(feedback.id)}
                    />
                </TableCell>
            </TableRow>
        </>
    );
};

export default FeedbackItem;