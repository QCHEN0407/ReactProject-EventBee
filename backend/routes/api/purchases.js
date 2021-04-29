const express = require('express');
const asyncHandler = require('express-async-handler');

const { Event, Ticket, Registration } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    const { user_id, ticket_id, quantity } = req.body;
    const registration = await Registration.create({
        user_id,
        ticket_id,
        quantity,
    });

    return res.json(`Successfully Purchased ${quantity} Tickets with id: ${ticket_id} for User: ${user_id}`);
}));




module.exports = router;
