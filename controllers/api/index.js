const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/users', userRoutes)
router.user('/books', bookRoutes)

module.exports = router;