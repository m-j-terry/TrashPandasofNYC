const client = require('../../server')
const express = require('express');
const router = express.Router();
// INDEX
router.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT name, total FROM grand_totals');
        console.log(result); 
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// GET
router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name)
        const result = await client.query('SELECT * FROM ' + req.params.name);
        console.log(result.rows); 
        res.status(200).json(result.rows)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = router