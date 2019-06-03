const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounterSchema = new Schema({
  player: Object,
  monster: Object
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;