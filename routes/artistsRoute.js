var express = require("express");
var router = express.Router();
const artistModel = require("../models/artists");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(res);
  res.render("dashboard/artists/list.hbs");
});

router.get("/create", (req, res, next) => {
  res.render("dashboard/artists/create.hbs");
});

router.post("/create", async (req, res, next) => {
  try {
    await artistModel.create(req.body);
    res.redirect("/dashboard/artists");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
