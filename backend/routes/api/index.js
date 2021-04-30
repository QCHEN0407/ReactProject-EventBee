const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const purchasesRouter = require('./purchases.js');
const bookmarksRouter = require('./bookmarks.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/events', eventsRouter);

router.use('/purchases', purchasesRouter);

router.use('/bookmarks', bookmarksRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));




module.exports = router;
