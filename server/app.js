const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;

const colleges = [
  { name: 'College A', course: 'BBA', fees: 10000 },
  { name: 'College B', course: 'BBA', fees: 12000 },
  { name: 'College C', course: 'BBA', fees: 11000 },
  // Add more colleges as needed
];
// require('./db/conn');
// const User = require('./model/userSchema')
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection`));



app.use(express.json());

app.use(require('./router/auth'));

const middleware = (req, res, next) => {
  console.log("hello middleware");
  next();
};
app.get("/", (req, res) => {
  res.send(`Hello from server`);
});

app.get('/api/colleges', (req, res) => {
  const course = req.query.course;
  const filteredColleges = colleges.filter(college => college.course === course);
  res.json(filteredColleges);
});

app.get("/about", middleware, (req, res) => {
  console.log(`Hello About`);
  res.send(`Hello About from server`);
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});

// console.log("hi");
