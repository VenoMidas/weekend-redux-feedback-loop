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
            <h1>This is the admin page</h1>
            <ul>
                {
                    feedbackArray.map(feedbackItem => (
                        <FeedbackItem key={feedbackItem.id} feedback={feedbackItem} />
                    ))
                }
            </ul>
        </>
    );
};

export default Admin