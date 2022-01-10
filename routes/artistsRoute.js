var express = require("express");
var router = express.Router();
const ArtistModel = require("../models/artists");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.render("dashboard/artists/list.hbs", {
    artists: await ArtistModel.find(),
    css: ["artists"],
  });
});

router.get("/create", (req, res, next) => {
  res.render("dashboard/artists/create.hbs");
});

router.post("/create", async (req, res, next) => {
  try {
    const inBand = req.body.isBand === "on" ? true : false;
    const artist = {
      name: req.body.name,
      isBand: inBand,
      description: req.body.description,
    };
    console.log("req.body whaaat? >>>", req.body);
    await ArtistModel.create(artist);
    res.redirect("/dashboard/artists");
  } catch (err) {
    next(err);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  await ArtistModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/dashboard/artists");
    })
    .catch((e) => console.error(e));
});

router.get("/:id/update", async (req, res, next) => {
  await ArtistModel.findById(req.params.id)
    .then((artist) => {
      console.log(artist)
      res.render("dashboard/artists/update.hbs", { artist });
    })
    .catch((e) => console.error(e));
});

router.post("/:id/update", async (req, res, next) => {
  await ArtistModel.findByIdAndUpdate(id, req.body, { new: true })
    .then((editedArtist) => {
      console.log(editedArtist);
      res.redirect("/dashboard/artist");
    })
    .catch((e) => console.error(e));
});

module.exports = router;
