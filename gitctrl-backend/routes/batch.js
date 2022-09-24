const router = require("express").Router();
const batch = require("../controllers/batch");

router.get("/", batch.index);
router.post("/", batch.create);
router.get("/:id/edit",batch.edit);
router.put("/:id",batch.update);
router.delete("/:id",batch.delete);
router.get("/:id",batch.show);

module.exports = router;
