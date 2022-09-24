const router = require("express").Router();
const assignmentSubmission = require("../controllers/assignmentSubmission");

router.get("/", assignmentSubmission.index);
router.post("/", assignmentSubmission.create);
router.get("/:id/edit",assignmentSubmission.edit);
router.put("/:id",assignmentSubmission.update);
router.delete("/:id",assignmentSubmission.delete);
router.get("/:id",assignmentSubmission.show);

module.exports = router;
