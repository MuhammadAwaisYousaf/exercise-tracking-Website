const jwt = require("jsonwebtoken"); // import jwt token for unique token
const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//we are genrating token

signUpSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      (SECRET_KEY =
        "PAKISTANISAUNIQUELYDIVERSECOUNTRYWITHARICHCULTURALHERITAGE")
    );

    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongoose.model("newUserSignup", signUpSchema);
