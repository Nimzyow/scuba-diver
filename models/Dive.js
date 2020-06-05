const mongoose = require("mongoose");

const DiveSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  diveDetails: {
    type: String,
  },
  numberOfDives: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("dive", DiveSchema);
