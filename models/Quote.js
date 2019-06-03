const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  quote: String,
  when: { type: Date, default: Date.now() }
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;