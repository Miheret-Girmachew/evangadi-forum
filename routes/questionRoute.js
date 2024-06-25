const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddlewares");

const {
  newquestion,
  getquestions,
  getquestionbyid,
  updatequestion,
  deletequestion,
} = require("../controller/questionController");

router.post("/newquestion", authMiddleware, newquestion);

router.get("/getquestions", authMiddleware, getquestions);

router.get("/getquestionbyid/:question_id", authMiddleware, getquestionbyid);
router.put("/updatequestion/:question_id", authMiddleware, updatequestion);

router.delete("/deletequestion/:question_id", authMiddleware, deletequestion);

module.exports = router;
