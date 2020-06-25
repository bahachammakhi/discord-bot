const mongoose = require("mongoose");

/**
 * contact Schema
 * @private
 */

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  deadline: {
    type: String,
  },
});

// contactSchema.pre("save", function (next) {
//   // eslint-disable-next-line no-console
//   console.log("Saving Donation..");
//   next();
// });

/**
 * @typedef taskSchema
 */

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
