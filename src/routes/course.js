const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.post("/create", courseController.storage);
router.get("/:slug", courseController.index);
router.get("/", courseController.show);

module.exports = router;
