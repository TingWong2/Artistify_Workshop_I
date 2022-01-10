var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/artists", function (req, res, next) {
  console.log(res);
  res.render("dashboard/artists.hbs");
});

module.exports = router;
