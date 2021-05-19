const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4085;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
const config = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onlineproducts", config);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});
