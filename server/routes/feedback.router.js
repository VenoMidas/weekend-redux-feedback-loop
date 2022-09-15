const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST /feedback
router.post('/', (req, res) => {
    const feedback = req.body;
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((results) => {
            res.send(results)
        }).catch((error) => {
            console.log('Error in POST /feedback', error);
            res.sendStatus(500);
        });
});


module.exports = router;