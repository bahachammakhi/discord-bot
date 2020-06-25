const mongoose = require("mongoose");

/**
 * vote Schema
 * @private
 */

const voteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  count1: {
    type: String,
    default: "0",
  },
  count2: {
    type: String,
    default: "0",
  },
});

// contactSchema.pre("save", function (next) {
//   // eslint-disable-next-line no-console
//   console.log("Saving Donation..");
//   next();
// });

/**
 * @typedef voteSchema
 */

const Vote = mongoose.model("Vote", voteSchema);
module.exports = Vote;
