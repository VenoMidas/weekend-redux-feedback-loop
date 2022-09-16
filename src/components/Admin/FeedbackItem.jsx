import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const FeedbackItem = ({ feedback }) => {

    return (
        <>
            <TableRow>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
            </TableRow>
        </>
    );
};

export default FeedbackItem;