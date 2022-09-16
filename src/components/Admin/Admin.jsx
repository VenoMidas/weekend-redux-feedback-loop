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
    const [feedbackArray, setFeedbackArray] = useState([]);

    useEffect(() => {
        getFeedback();
    }, []);

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
                                <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} deleteFeedback={deleteFeedback} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Admin