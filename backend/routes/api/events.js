const express = require('express');
const asyncHandler = require('express-async-handler');

const { Event, Ticket } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

    let events = await Event.findAll();

    return res.json(events);
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    let eventId = parseInt(req.params.id, 10);
    let event = await Event.findByPk(eventId);

    return res.json(event);
}));

router.get('/:id(\\d+)/tickets', asyncHandler(async (req, res) => {

    let eventId = parseInt(req.params.id, 10);
    let tickets = await Ticket.findAll({
        where: { event_id:eventId },
    });

    return res.json(tickets);
}));


module.exports = router;
