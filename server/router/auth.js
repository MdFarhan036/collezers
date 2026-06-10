const express = require("express");
const router = express.Router();

require("../app");
const ContactUser = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello from server router`);
});

router.post("/contact", (req, res) => {
  const { fullname, email, phone, courses, message } = req.body;

  // if (!fullname || !email || !phone || !courses || !message) {
  //   return res.status(422).json({ error: "Plz fill the details correctly" });
  // }
  // User.findOne({ email: email }).then((userExist) => {
  //   if (userExist) {
  //     return res.status(422).json({ error: "Data already exist" });
  //   }
  const contactuser = new ContactUser({
    fullname: fullname,
    email: email,
    phone: phone,
    courses: courses,
    message: message,
  });
  const savedData = contactuser.save();
  res.status(201).json({ message: "Data registered successfully" });
});

router.post("/footer", (req, res) => {

    const { fullname, email, phone, courses } = req.body;

    const footeruser = new ContactUser({
      fullname: fullname,
      email: email,
      phone: phone,
      courses: courses,
      message: message,
    });
    const savednewData = footeruser.save();
    res.status(201).json({ message: "Data registered successfully" });

    // const footeruser = User.findOne({})
});

module.exports = router;
