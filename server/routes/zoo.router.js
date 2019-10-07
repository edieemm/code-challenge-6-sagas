const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    let queryText = `SELECT "species".species_name, "class".class_name
    FROM "species"
    JOIN "class" on "class".id = "species".class_id;`
    pool.query(queryText)
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT movie query', err);
            res.sendStatus(500);
        });
    
});

module.exports = router;