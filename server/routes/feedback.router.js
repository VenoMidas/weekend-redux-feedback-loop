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

// GET /feedback
router.get('/', (req, res) => {
    let queryText = 'SELECT * from "feedback" ORDER BY "id" DESC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// DELETE /feedback
router.delete('/:id', (req, res) => {
    let queryText = 'DELETE FROM "feedback" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});


module.exports = router;