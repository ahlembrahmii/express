const express = require("express");

const app = express();

const timer = require("./Middelware/timer.js");

app.use(timer);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/pages/NavBar.html");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/HomePage.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/pages/ContactUs.html");
});

app.get("/ourservices", (req, res) => {
  res.sendFile(__dirname + "/pages/OurServices.html");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server stared on port $(PORT)");
});
