const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Bookmark, Registration, Event, Ticket } = require('../../db/models');
const models = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

//Bookmark
router.get('/:id(\\d+)/bookmarkedEvents', asyncHandler(async (req,res) => {
  let userId = parseInt(req.params.id, 10);
  let bookmarkedEvents = await Bookmark.findAll({
    where: {user_id:userId},
    include: {model:Event}
  });
  return res.json(bookmarkedEvents);

}));

router.get('/:id(\\d+)/purchasedTickets', asyncHandler(async (req,res) => {
  let userId = parseInt(req.params.id, 10);
  let purchasedTickets = await Registration.findAll({
    where: {user_id:userId},
    include: {model: Ticket, include: [{model: Event}]}
  });
 
  return res.json(purchasedTickets);

}));

module.exports = router;
