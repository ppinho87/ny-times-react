const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
	.get(articlesController.findAll)
	.post(articlesController.create);

router.get("api/test", (req,res) => {
	console.log("testing")
	res.send("testing");
});

router 
	.route("/:id")
	.get(articlesController.findById)
	.put(articlesController.update)
	.delete(articlesController.remove);

module.exports = router;