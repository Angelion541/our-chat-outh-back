const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      unique: true,
      match: [/[a-z0-9]+@[a-z0-9]+/, "user email is not valid!"],
    },
    password: {
      type: String,
    },
    mood: {
      type: String,
      enum: ["1", "2","3","4","5"],
    },
    userLikePets: [{ type: Schema.Types.ObjectId, ref: "notice" }],
    userAddPet: [{ type: Schema.Types.ObjectId, ref: "userAddPet" }],
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("users", schema);

module.exports = {
  User,
};
