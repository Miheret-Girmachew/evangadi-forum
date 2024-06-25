const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddlewares");

const {
  newanswer,
  getanswers,
  updateanswer,
  deleteanswer,
} = require("../controller/answerController");

router.post("/newanswer", authMiddleware, newanswer);

router.get("/getanswers/:question_id", authMiddleware, getanswers);
router.put("/updateanswer/:answer_id", authMiddleware, updateanswer);

router.delete("/deleteanswer/:answer_id", authMiddleware, deleteanswer);

module.exports = router;
