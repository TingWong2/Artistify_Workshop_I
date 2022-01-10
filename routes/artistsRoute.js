var express = require("express");
var router = express.Router();
const ArtistModel = require("../models/artists");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.render("dashboard/artists/list.hbs", {
    artists:  await ArtistModel.find(),
    css: ['artists'],
  });
});

router.get("/create", (req, res, next) => {
  res.render("dashboard/artists/create.hbs");
});



router.post("/create", async (req, res, next) => {
  try {
    const inBand = req.body.isBand === 'on' ? true : false;
    const artist = {
      name: req.body.name,
      isBand: inBand,
      description: req.body.description
    }
    console.log('req.body whaaat? >>>', req.body);
    await ArtistModel.create(artist);
    res.redirect("/dashboard/artists");
  } catch (err) {
    next(err);
  }
});



























module.exports = router;
