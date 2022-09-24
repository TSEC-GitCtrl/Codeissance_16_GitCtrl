const router = require("express").Router();
const notice = require("../controllers/notice");

router.get("/", notice.index);
router.post("/", notice.create);
router.get("/:id/edit",notice.edit);
router.put("/:id",notice.update);
router.delete("/:id",notice.delete);
router.get("/:id",notice.show);

module.exports = router;
