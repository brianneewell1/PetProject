const router = require('express').Router();
const petRoutes = require('./petRoutes');
const ownerRoutes = require('./ownerRoutes');

router.use('/pet', petRoutes);
router.use('/owner', ownerRoutes);

module.exports = router;