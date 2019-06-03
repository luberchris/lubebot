const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  chats: { type: Number, default: 0 },
  lubes: { type: Number, default: 0 },
  sub: { type: Boolean, default: false },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  class: { type: String, default: "" },
  stats: {
    type: Object,
    default: {
      AC: 0,
      HP: 0,
      STR: 0,
      DEX: 0,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0,
      hit: 0,
      damage: "",
      save: []
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
