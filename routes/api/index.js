const router = require("express").Router();
const articleRoutes = require("./articles");

console.log("articles api routes included");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
