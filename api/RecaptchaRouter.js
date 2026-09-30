const express = require('express');

const router = express.Router()

router.post('/', async (req, res) => {

    const response = req.get('g-recaptcha-response');

    if (!response) {
        return res.sendStatus(401);
    }

    try {
        const secret = process.env.RECAPTCHA_LEGAL_COMPLIANCE;

        const params = new URLSearchParams({secret, response});

        const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?${params}`, {method: 'POST'});

        const data = await verifyRes.json();

        if (data.success) {
            console.log('do stuff here', req.body)
            return res.sendStatus(200)
        } else {
            return res.sendStatus(400);
        }
    } catch (error) {
        res.status(500).send(error.toString());
    }
})

module.exports = router;
