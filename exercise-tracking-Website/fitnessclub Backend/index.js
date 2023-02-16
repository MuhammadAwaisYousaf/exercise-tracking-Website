const jwt = require("jsonwebtoken"); // import jwt token for unique token
const cookieParser = require("cookie-parser"); //parse the cookies

const bcrypt = require("bcrypt"); //import for encryption and decription
const express = require("express");
const app = express();

//connect back end and front end
const cors = require("cors");
app.use(cors());

app.use(cookieParser()); //use the cookieparser in app

//Connected the Port
app.listen(4000, () => {
  console.log("Port is connected at port 4000");
});

//for database connect
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/excerciseTrackingApp"),
  {
    useNewUrlParser: true,
  };

mongoose.connection.once("open", () => {
  console.log("Database is connected");
});

//import model for addExcersice
const addExcersiceModel = require("./Models/addExcersice");

const bodyparser = require("body-parser"); //middleware for the process data sent in an HTTP request body
app.use(bodyparser.json());

//Apply opertions
app.post("/addexcersice", async (req, res) => {
  try {
    const addexcersice = await addExcersiceModel(req.body);
    await addexcersice.save();
    res.send(addexcersice);
  } catch (error) {
    console.log(error);
  }
});

// get all data
app.get("/addexcersiceByEmail/:getEmail", async (req, res) => {
  try {
    const getAddExcersice = await addExcersiceModel.find({
      email: req.params.getEmail,
    });
    res.send(getAddExcersice);
  } catch (error) {
    console.log(error);
  }
});

//get data by id
app.get("/addexcersice/:id", async function (req, res) {
  const data = await addExcersiceModel.findById(req.params.id);
  res.send(data);
});

app.delete("/addexcersice/:id", async function (req, res) {
  const data = await addExcersiceModel.findByIdAndRemove(req.params.id);
  res.send(data);
});

app.put("/addexcersice/:id", async (req, res) => {
  const data = await addExcersiceModel.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  res.send(data);
});

//----------------------------------------------------------------

//Import model for SignUp data
const newUserSignup = require("./Models/newUserSignup");

app.post("/signupnewuser", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const encyrptedPassword = await bcrypt.hash(req.body.password, 10);
    const password = encyrptedPassword;

    newUserSignup.findOne({ email: email }, async (err, user) => {
      if (user) {
        res.send({ message: "User already exist!" });
      } else {
        const user = await new newUserSignup({
          username,
          email,
          password: password,
        });
        user.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "SignUp Successfully!" });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//---------------------------------------------------------

app.post("/login", async (req, res) => {
  try {
    let token;
    const email = req.body.email;

    const userLogin = await newUserSignup.findOne({ email: email });

    if (userLogin) {
      const match = await bcrypt.compare(req.body.password, userLogin.password);
      if (match) {
        token = await userLogin.generateAuthToken();

        // res.cookie("jwt", token, {
        //   expires: new Date(Date.now() + 50000),
        //   httpOnly: true,
        // });
        //  console.log("awa",req.cookies)
        res.send({
          message: "Login success! 😊 👌",
          userLogin: userLogin,
          auth: token,
        });
      } else {
        res.send({ message: "Password is Worng" });
      }
    } else {
      res.send({ message: "Not register please SignUp first" });
    }
  } catch (error) {
    console.log(error);
  }
});

// function verifyToken(req, res, next) {
//   var token = req.headers.authorization;
//   if (token) {
//     token = token.split(" ")[1];

//     jwt.verify(token, jwtKey, (err, valid) => {
//       if (err) {
//         res.status(401).send("Your token is not valid");
//       } else {
//         next();
//       }
//     });
//   } else {
//     res.status(402).send("Please Add token");
//   }
// }
