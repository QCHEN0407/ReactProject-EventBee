const express = require('express');
const asyncHandler = require('express-async-handler');

const { Event } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    
    let events = await Event.findAll();
    
    return res.json(events);
}));


module.exports = router;