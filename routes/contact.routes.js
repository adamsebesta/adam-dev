const contact = require("../controllers/contact.controller.js");
var router = require("express").Router();


// get billableRates with associated filters
router.post("/contact", contact.newRequest);

module.exports = router