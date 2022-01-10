require("../config/dbConfig");
const artistModel = require("../models/artists");

const artisteTest = [
  {
    name: "toto",
    isBand: true,
    description: "LalaLalaLAaaaa",
  },
];

(async function createToto() {
  try {
    const delatedCount = await artistModel.deleteMany();
    console.log(`success : ${delatedCount} artiste create`);
    const res = await artistModel.insertMany(artisteTest);
    console.log(`success : ${res.length} toto in database`);
    process.exit;
  } catch (error) {
    console.log(error);
    console.error(error);
  }
})();
