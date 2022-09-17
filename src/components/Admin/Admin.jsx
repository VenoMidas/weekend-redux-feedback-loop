import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Admin = () => {
    // setters and getters
    const [feedbackArray, setFeedbackArray] = useState([]);

    // useEffect calls getFeedback on page load
    useEffect(() => {
        getFeedback();
    }, []);

    /**
     * @api {GET} /feedback Request feedback information
     * @apiName getFeedback
     * @apiGroup Feedback
     * @apiVersion 0.1.0
     * 
     * @apiSuccess {Number} id The id of the feedback object
     * @apiSuccess {Number} feeling The "feeling" rating
     * @apiSuccess {Number} understanding The "understanding" rating
     * @apiSuccess {Number} support The "support" rating
     * @apiSuccess {String} [comments] Any comments that were left
     * @apiSuccess {Boolean} flagged=false Is the feedback flaged?
     * @apiSuccess {Date} date The date the feedback was submitted
     * 
     * @apiSuccessExample Example data on success:
     * {
     *  id: 1,
     *  feeling: 4,
     *  understanding: 4,
     *  support: 5,
     *  comments: 'Doing Great!',
     *  flagged: false,
     *  date: 2022-09-16
     * }
     */
    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackArray(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    /**
     * @api {DELETE} /feedback/:id Delete feedback object
     * @apiName deleteFeedback
     * @apiGroup Feedback
     * @apiVersion 0.1.0
     * 
     * @apiParam {Number} feedbackId The id of the user
     * 
     * @apiError SomethingWentWrong An error returned on the DELETE /feedback/:id
     */
    const deleteFeedback = (feedbackId) => {
        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then((response) => {
            getFeedback();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong');
        });
    };

    /**
     * @api {PUT} /feedback/flagged/:id Update feedback object
     * @apiName putFeedback
     * @apiGroup Feedback
     * @apiVersion 0.1.0
     * 
     * @apiParam {Number} feedbackId The id of the user
     * @apiParam {Boolean} flagged The status of "flagged"
     * 
     * @apiError SomethingWentWrong An error returned on the PUT /feedback/flagged/:id
     */
    function flagItem(feedbackId, flagged) {
        axios({
            method: 'PUT',
            url: `/feedback/flagged/${feedbackId}`,
            data: {
                flagged: flagged,
            }
        }).then((response) => {
            getFeedback();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        });
    };

    // return a table with the feedbackArray mapped into table rows/data
    return (
        <>
            <Typography variant="h3" gutterBottom>Results</Typography>
            <TableContainer component={Paper} elevation={6}>
                <Table
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '75%',
                            lg: '75%',
                            xl: '75%',
                        },
                        ml: 'auto',
                        mr: 'auto',
                    }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Flag for review</TableCell>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Understanding</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            feedbackArray.map(feedbackItem => (
                                <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} deleteFeedback={deleteFeedback} flagItem={flagItem} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Admin