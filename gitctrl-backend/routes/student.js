const router = require("express").Router();
const student = require("../controllers/student");

router.get("/", student.index);
router.post("/", student.create);
// router.patch("/:id/edit",student.update);
router.patch("/:id",student.update);
router.get("/:id",student.show);

module.exports = router;
