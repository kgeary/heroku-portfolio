const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// matches /api/contact
router.route("/contact")
  .post(contactController.sendEmail);

module.exports = router;
