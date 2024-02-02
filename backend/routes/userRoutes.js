const express = require("express");
const {
  registerUser,
  allUsers,
  authUser,
} = require("../controllers/userControllers");
const {protect} = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/").get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
