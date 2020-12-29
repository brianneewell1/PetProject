const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-Routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
