const router = require("express").Router();
const classroom = require("../controllers/classroom");

router.get("/", classroom.index);
router.post("/", classroom.create);
router.get("/:id/edit",classroom.edit);
router.put("/:id",classroom.update);
router.delete("/:id",classroom.delete);
router.get("/:id",classroom.show);

module.exports = router;
