const router = require('express').Router();
const apiRoutes = require("./apiRoutes")
const htmlRoutes = require("./htmlRoutes")

// HTML Routes
router.use("/", htmlRoutes)

// API Routes
router.use("/api", apiRoutes)

module.exports = router;