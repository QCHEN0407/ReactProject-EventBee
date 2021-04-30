const express = require('express');
const asyncHandler = require('express-async-handler');

const { Event, User, Bookmark} = require('../../db/models');

const router = express.Router();

router.post('/create', asyncHandler(async (req, res) => {
    const {user_id, event_id} = req.body;
    const newBookmark = await Bookmark.create({
        user_id,
        event_id,
    });
    return res.json(newBookmark);
}));


router.delete('/delete', asyncHandler(async (req, res) => {
    const {user_id, event_id} = req.body;
    const deletedBookmark = await Bookmark.destroy({
        where: {
            user_id,
            event_id,
        }
    });
    return res.json({user_id, event_id});
}));

module.exports = router;
