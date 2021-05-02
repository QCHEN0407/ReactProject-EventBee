const express = require('express');
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const { Event, Ticket, Tag } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

    let events = await Event.findAll();

    return res.json(events);
}));


router.get('/category/:categoryId', asyncHandler(async (req, res) => {

    let categoryId = parseInt(req.params.categoryId, 10);
    let tags = await Tag.findAll({
        where: {category_id: categoryId},
        include: {model: Event}
    });

    return res.json(tags.map(tag => tag.Event));
}));


router.get('/search/:searchString', asyncHandler(async (req, res) => {

    let searchString = req.params.searchString;
    let events = await Event.findAll({
        where: {
            title: {
                [Op.iLike]: `%${searchString}%`
            }
        }
    });

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
