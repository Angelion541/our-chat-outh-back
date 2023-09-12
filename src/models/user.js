const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  mood: {
    type: String,
  }
});

// eslint-disable-next-line new-cap
const User = new mongoose.model("User", userSchema);
module.exports = User;
