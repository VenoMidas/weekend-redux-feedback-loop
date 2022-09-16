import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackItem from './FeedbackItem';

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


    return (
        <>
            <h1>Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedbackArray.map(feedbackItem => (
                            <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} />
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};

export default Admin