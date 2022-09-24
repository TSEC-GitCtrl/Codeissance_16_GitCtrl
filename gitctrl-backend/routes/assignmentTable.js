const router = require("express").Router();
const assignmentTable = require("../controllers/assignmentTable");

router.get("/", assignmentTable.index);
router.post("/", assignmentTable.create);
router.get("/:id/edit",assignmentTable.edit);
router.put("/:id",assignmentTable.update);
router.delete("/:id",assignmentTable.delete);
router.get("/:id",assignmentTable.show);

module.exports = router;
